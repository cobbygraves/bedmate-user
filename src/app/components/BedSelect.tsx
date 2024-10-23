import React from 'react'
import { Select } from 'antd'

const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}

const BedSelect = () => (
  <>
    <Select
      defaultValue='1 bed'
      style={{
        width: 'fit-content',
        backgroundColor: 'transparent',
        color: 'black',
        height: 25
      }}
      onChange={handleChange}
      options={[
        { value: '1 bed', label: '1 Bed' },
        { value: '2 beds', label: '2 Beds' },
        { value: '3 beds', label: '3 Beds' },
        { value: '4 beds', label: '4 Beds' }
      ]}
    />
  </>
)

export default BedSelect
