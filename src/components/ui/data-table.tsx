'use client'
import { Button } from '@/components/ui/button'
import { MdArrowBackIos } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  emptyMessage?: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  emptyMessage
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10 //custom default page size
      }
    }
  })
  const numberOfPages = table.getPageOptions()
  const isLarge = useMediaQuery({
    query: '(min-width: 640px)'
  })

  return (
    <>
      <div className='bg-white rounded-xl mt-5 p-2 sm:p-5 w-full shadow-lg border border-gray-300'>
        <Table>
          <TableHeader className='bg-gray-100'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className='font-bold'>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='bg-hostel-yellow  cursor-pointer hover:bg-hostel-yellow hover: w-fit'
        >
          <MdArrowBackIos className='size-5 ' /> {isLarge && <span>Prev</span>}
        </Button>
        {numberOfPages.map((page) => (
          <button
            key={page}
            className={`size-7 p-1 rounded ${
              page === table.getState().pagination.pageIndex
                ? 'bg-hostel-yellow '
                : 'bg-gray-300'
            }  cursor-pointer`}
            onClick={() => table.setPageIndex(page)}
          >
            {page + 1}
          </button>
        ))}
        <Button
          variant='outline'
          size='sm'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className='bg-hostel-yellow  cursor-pointer hover:bg-hostel-yellow hover: w-fit'
        >
          {isLarge && <span>Next</span>}
          <MdArrowForwardIos className='size-5 ' />
        </Button>
      </div>
    </>
  )
}
