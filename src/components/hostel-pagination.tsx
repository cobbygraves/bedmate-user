import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export default function HostelPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            handlePageChange={() => console.log('previous button clicked')}
            className='text-black'
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            handlePageChange={() => console.log('page button clicked')}
            className='border border-black text-black'
          >
            1
          </PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem> */}
        <PaginationItem>
          <PaginationNext
            handlePageChange={() => console.log('next button clicked')}
            className='text-black'
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
