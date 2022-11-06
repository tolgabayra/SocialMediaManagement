import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

type Props = {}

export default function Navbar() {
  const { isOpen: isOpenLoginModal, onOpen: onOpenLoginModal, onClose: onCloseLoginModal } = useDisclosure()
  const { isOpen: isOpenRegisterModal, onOpen: onOpenRegisterModal, onClose: onCloseRegisterModal } = useDisclosure()

  return (
    <div>
      <Modal isOpen={isOpenLoginModal} onClose={onCloseLoginModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <div>
                <Input placeholder='Email' />
              </div>

              <div className='mt-4'>
                <Input type="password" placeholder='Password' />
              </div>

            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onCloseLoginModal}>
              Cancel
            </Button>
            <Button colorScheme="green" >Log In</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>







      <Modal isOpen={isOpenRegisterModal} onClose={onCloseRegisterModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              
              <div>
                <Input placeholder='Username' />
              </div>
              <div className='mt-4'>
                <Input placeholder='Email' />
              </div>
              <div className='mt-4'>
                <Input type="password" placeholder='Password' />
              </div>


            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onCloseRegisterModal}>
              Cancel
            </Button>
            <Button colorScheme="green" >Register</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>






      <nav className="fixed bg-white w-full z-10 border-b border-solid border-gray-300">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="font-bold text-2xl lg:text-3xl">
            TSocial
          </a>
          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 boder-gray-600 hiver:text-gray-800">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://wwww.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="inline-flex">
              <li>
                <a href="#" className="px-4 font-bold hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a onClick={onOpenLoginModal} className="px-4 cursor-pointer hover:text-gray-800">
                  Login
                </a>
              </li>
              <li>
                <a onClick={onOpenRegisterModal} className="px-4 cursor-pointer hover:text-gray-800">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav>
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <a href="#" className="font-bold text-2xl lg:text-4xl">
            TAILWIND
          </a>
          <div className="block md:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 boder-gray-600 hiver:text-gray-800">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://wwww.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="inline-flex">
              <li>
                <a href="#" className="px-4 font-bold hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="px-4 hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="px-4 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}