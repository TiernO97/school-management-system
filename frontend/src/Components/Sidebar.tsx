import React, { useEffect, useState } from 'react'
import { Calendar, CheckSquare, Clock, Menu, User, Users } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const Sidebar:React.FC = props => {
    const history = useHistory()

    const userInfo = {
        _id: '12345678',
        isAdmin: true,
        username: 'MyUser123',
        email: "admin@example.com",
        password: '123456'
    }

    useEffect(() => {
      document.querySelector('.mobile-menu-button')?.addEventListener('click',() => {
        const sidebar = document.querySelector('.sidebar')

        sidebar?.classList.toggle('-translate-x-full')
      })
    })

    const [dropDown, setDropDown] = useState(false)

    const logoutHandler = () => {
        history.push('/login')
    }

    return (
        <div className="relative min-h-screen md:flex">
        {/* Mobile menu */}
        <div className='bg-blue-900 text-blue-100 flex justify-between md:hidden'>
          {/* Logo */}
          <a href="/" className="block p-4 text-white font-bold">
            School Management System
          </a>

          {/* Menu Button */}
          <button className='mobile-menu-button p-4 focus:outline-none focus:bg-blue-600'><Menu className='h-5 w-5' /></button>
        </div>
        {/* Sidebar */}
        <div className="sidebar bg-blue-900 text-white w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <Link className="flex items-center space-x-2 px-2 ml-2 hover:text-white hover:no-underline" to="/">
            <span className="text-2xl font-bold">School Management System</span>
          </Link>

          <nav>
            <Link
              to="/manage-students"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Users className='w-6 h-6 flex mr-2' />
              <span>Students</span>
            </Link>
            <Link
              to="/manage-staff"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <User className='w-6 h-6 flex mr-2' />
              Staff
            </Link>
            <Link
              to="/manage-years"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Calendar className='w-6 h-6 flex mr-2' />
              Years
            </Link>
            <Link
              to="/manage-timetables"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Clock className='w-6 h-6 flex mr-2' />
              Timetables
            </Link>
            <Link
              to="/manage-grades"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <CheckSquare className='w-6 h-6 flex mr-2' />
              Grades
            </Link>

          </nav>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className=' flex justify-end w-full h-12 bg-white'>
            <div className="justify-end mt-2 px-2 text-gray-800 text-lg mr-16">
              {userInfo ? (
                <>
                  <Dropdown isOpen={dropDown} toggle={() => setDropDown(!dropDown)}>
                    <DropdownToggle className='text-gray-800 text-xl m-0 p-0 hover:no-underline' color='link'>
                      {userInfo.username}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        <Link className='hover:no-underline' to={`/profile/${userInfo._id}`}>
                          Profile
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link className='hover:no-underline' to='/manage-users'>
                          Manage Users
                        </Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={logoutHandler}>
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </>
              ) : (
                <p>
                  You are not signed in. You can sign in <Link className='text-info' to='/login'>here</Link>
                </p>
              )}
            </div>
          </div>
          <div className='p-10'>
            {props.children}
          </div>
        </div>
      </div>
    )
}

export default Sidebar
