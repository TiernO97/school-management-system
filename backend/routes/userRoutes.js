import express from 'express'
import { authUser, forgotPassword, getUsers, registerUser, resetPassword, verifyEmail, deleteUser, getUserProfile, updateUserProfile, getUserById, updateUser } from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, getUsers)
router.route('/verify-email/:token').get(verifyEmail)
router.route('/forgot-password').post(forgotPassword)
router.route('/reset-password/:id').post(resetPassword)
router.post('/login', authUser)
router.route('/profile')
            .get(protect, getUserProfile)
            .put(protect, updateUserProfile)
router.route('/:id')
            .delete(protect, admin, deleteUser)
            .get(protect, getUserById)
            .put(protect, admin, updateUser)

export default router;