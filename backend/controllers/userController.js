import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import crypto from 'crypto'
import sgMail from '@sendgrid/mail'
import dotenv from 'dotenv'

dotenv.config()
sgMail.setApiKey('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')

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if(!user) throw new Error('User does not exist')

    if(!user.isVerified) throw new Error('User is not verified')

    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isVerified: user.isVerified,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        isAdmin: req.body.isAdmin || false,
        emailToken: crypto.randomBytes(64).toString('hex'),
        password
    })

    if(user) {
        try {
            await sgMail.send({
                from: process.env.SENDGRID_SENDER,
                to: user.email,
                subject: 'Test Verification',
                text: `
                    Thanks for registering on our site! Please copy and paste the following link to verify your account!
                    http://${req.headers.host}/verify-email?token=${user.emailToken}
                `,
                html: `
                    <h1>Hello,</h1>
                    <p>Thanks for registering on our site.</p>
                    <p>Please click the link below to verify your account!</p>
                    <a href="http://${req.headers.host}/verify-email?token=${user.emailToken}">Verify your account!</a>
                `
            })
            res.send('Thank you for registering. Please verify your account via the email sent to your inbox')
        } catch (error) {
            throw new Error(error)
        }
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

const verifyEmail = asyncHandler(async (req, res) => {
    try {
      const user = await User.findOne({ emailToken: req.params.token });
      if(!user) {
        res.status(404);
        throw new Error('Invalid Token');
      }
  
      user.emailToken = null;
      user.isVerified = true;
      await user.save();
      res.status(201)
      res.json(user)
    } catch (err) {
      res.status(400)
      throw new Error(err)
    }
})

const resetPassword = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
  
    if(user) {
      user.password = req.body.password
      await user.save()
  
      res.status(201)
      res.send("Password Updated")
    } else {
      res.status(404)
      throw new Error('User not found')
    }
})

const forgotPassword = asyncHandler(async (req, res) => {
    const email = req.body.email
  
    const user = await User.findOne({ email })
  
    if(user) {
      const msg = {
        from: process.env.SENDGRID_SENDER,
        to: user.email,
        subject: 'Reset Password',
        text: `
          Please copy and paste the following link to reset your password!
          http://localhost:3000/reset-password?id=${user._id}
        `,
        html: `
          <h1>Hello,</h1>
          <p>Please click the link below to reset your password!</p>
          <a href="http://localhost:3000/reset-password?id=${user._id}">Reset your password!</a>
        `
      }
  
      try {
        await sgMail.send(msg);
        res.send('An email has been sent to the entered address.');
      } catch(err) {
        throw new Error(err);
      }
  
    } else {
      res.status(404)
      throw new Error('No user with this email has been found')
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isVerified: user.isVerified,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isVerified: updatedUser.isVerified,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin
    if(req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isVerified: updatedUser.isVerified,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
    authUser,
    registerUser,
    verifyEmail,
    resetPassword,
    forgotPassword,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}