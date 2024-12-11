import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
  // AlertDialogTrigger
} from '@/components/ui/alert-dialog'
//   import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function ErrorDialog() {
  const router = useRouter()
  return (
    <AlertDialog open={true}>
      {/* <AlertDialogTrigger asChild>
          <Button variant='ghost' className='text-red-500 text-xl hover:bg-yellow-100 flex gap-x-2 items-center'>
            <CgLogOut size={30} />
            <span className='font-semibold'>Logout</span>
          </Button>
        </AlertDialogTrigger> */}
      <AlertDialogContent className='w-[90%] sm:w-[30%] h-[125px] rounded-lg'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl text-red-500'>
            Wrong Credentials
          </AlertDialogTitle>
          <AlertDialogDescription className='text-lg'>
            Please try again
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex flex-row justify-end items-center'>
          <AlertDialogAction
            onClick={() => {
              router.push('/sign-in')
            }}
            className='w-fit mt-0 relative bottom-16 bg-hostel-yellow text-black hover:bg-hostel-yellow/80'
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
