'use client'

import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  availableRooms,
  availableFacilities,
  availablePrices
} from '@/app/utils/data'
import { FiFilter } from 'react-icons/fi'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const SHEET_SIDES = ['bottom'] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function MobileFilter() {
  return (
    <div className='grid  gap-2'>
      <Sheet>
        <SheetTrigger asChild>
          {/* <Button variant="outline">{side}</Button> */}
          <div className='flex justify-end items-center gap-x-1 sm:hidden cursor-pointer'>
            <h3>Filters</h3>
            <FiFilter size={30} />
          </div>
        </SheetTrigger>
        <SheetContent
          side='bottom'
          className=' rounded-t-xl bg-hostel-yellow h-[67vh]'
        >
          <SheetHeader>
            <SheetTitle>
              <div className='flex items-center gap-x-1 sm:hidden cursor-pointer relative bottom-3 w-fit'>
                <p>Filters</p>
                <FiFilter size={20} />
              </div>
              <hr className='border border-black mb-3' />
            </SheetTitle>
          </SheetHeader>
          <div>
            <h3 className='mb-2'>Rooms</h3>
            <RadioGroup
              // defaultValue='1 bed'
              className='grid grid-cols-2'
            >
              {availableRooms.map((price: any) => (
                <div className='flex items-center space-x-2' key={price.label}>
                  <RadioGroupItem value={price.name} id={price.label} />
                  <Label htmlFor={price.label}>{price.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <hr className='border border-black mt-5 mb-2' />
          </div>
          <div>
            <h3 className='mb-2'>Facilities</h3>
            <RadioGroup
              // defaultValue='Air-condition'
              className='grid grid-cols-2'
            >
              {availableFacilities.map((facility: any) => (
                <div className='flex items-center gap-2' key={facility.label}>
                  <Checkbox id={facility.label} />
                  <Label htmlFor={facility.label}>{facility.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <hr className='border border-black my-5' />
          </div>
          <div>
            <h3 className='mb-2'>Prices</h3>
            <RadioGroup
              // defaultValue='GH 1,000 - GH 2,000'
              className='grid grid-cols-1'
            >
              {availablePrices.map((price: any) => (
                <div className='flex items-center space-x-2' key={price.label}>
                  <RadioGroupItem value={price.name} id={price.label} />
                  <Label htmlFor={price.label}>{price.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <hr className='border border-black my-5' />
          </div>
          <SheetFooter>
            <div className='flex justify-end gap-x-7'>
              <SheetClose asChild className='text-black w-[20%]'>
                <Button variant='outline'>Cancel</Button>
              </SheetClose>
              <SheetClose asChild className='w-[20%]'>
                <Button type='submit'>Apply</Button>
              </SheetClose>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
