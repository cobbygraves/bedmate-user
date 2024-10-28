import React from 'react'
import { Select } from 'antd'

const BedSelect = ({
  onSelect,
  rooms
}: {
  onSelect: (value: string) => void
  rooms: { value: string; lable: string }[]
}) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
    onSelect(value)
  }

  return (
    <>
      <Select
        defaultValue={rooms[0].value}
        style={{
          width: 'fit-content',
          backgroundColor: 'transparent',
          color: 'black',
          height: 25
        }}
        onChange={handleChange}
        options={rooms}
      />
    </>
  )
}
export default BedSelect
