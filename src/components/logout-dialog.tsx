import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { signOut } from 'next-auth/react'
import { CgLogOut } from 'react-icons/cg'

export function LogoutDialog({ hideUserMenu }: { hideUserMenu: () => void }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild onClick={hideUserMenu}>
        <div className='text-red-500 text-xl hover:bg-yellow-100 flex gap-x-2 items-center'>
          <CgLogOut size={30} />
          <span className='font-semibold'>Logout</span>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className='w-[90%] sm:w-[60%] rounded-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl text-red-500'>
            Confirm Logout
          </AlertDialogTitle>
          <AlertDialogDescription className='text-lg'>
            Are you sure you want to logout?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex flex-row justify-center items-center gap-x-7'>
          <AlertDialogCancel className='w-[85px]'>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              signOut()
            }}
            className='w-[85px]'
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
