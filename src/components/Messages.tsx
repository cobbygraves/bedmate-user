import React from 'react'
import { Table } from 'antd'
import type { TableColumnsType, TableProps } from 'antd'

interface DataType {
  key: React.Key
  message: string
}

const columns: TableColumnsType<DataType> = [
  {
    title: <span className='font-bold text-xl'>Messages Received</span>,
    dataIndex: 'message',
    ellipsis: true
  }
]

const data: DataType[] = [
  {
    key: '1',
    message:
      'cupidatat reprehenderit irure fugiat. Cillum quis aliquip occaecat irure nisi cillum elit consequat dolor adipisicing aliquip reprehenderit.'
  },
  {
    key: '2',
    message:
      'Aute aliqua commodo amet officia ullamco. Reprehenderit proident voluptate eiusmod fugiat id deserunt qui amet. Ex velit cupidatat adipisicing amet nisi ea velit tempor cillum excepteur adipisicing.'
  },
  {
    key: '3',
    message:
      'Sunt ea minim mollit sunt labore veniam nulla consequat culpa incididunt Lorem in reprehenderit. Quis amet ipsum consectetur amet elit. Ad ipsum mollit commodo tempor esse.'
  },
  {
    key: '4',
    message:
      'Officia veniam ipsum deserunt velit minim. Tempor amet aute veniam tempor cillum commodo aliquip non cillum amet exercitation. Laborum sit non sit cillum.'
  }
]

// rowSelection object indicates the need for row selection
const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  }
}

const Messages: React.FC = () => {
  return (
    <div>
      <Table<DataType>
        rowSelection={{ type: 'checkbox', ...rowSelection }}
        columns={columns}
        dataSource={data}
        onRow={(record) => {
          return {
            onClick: () => {
              console.log(record)
            } // click row
          }
        }}
      />
    </div>
  )
}

export default Messages
