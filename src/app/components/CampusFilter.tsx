import { useEffect, useState } from 'react'
import { Select, Tag } from 'antd'
import type { SelectProps } from 'antd'
import { IoIosArrowDown } from 'react-icons/io'
import { campusList } from '../utils/data'

type TagRender = SelectProps['tagRender']

const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginInlineEnd: 4,
        backgroundColor: 'yellow',
        color: 'white',
        paddingTop: 4,
        paddingBottom: 4
      }}
    >
      {label}
    </Tag>
  )
}

type CampusProps = {
  handleSelectedCampus: (v: string[]) => void

  isLarge: boolean
}

const CampusFilter = ({
  handleSelectedCampus,

  isLarge
}: CampusProps) => {
  const [selectedCampus, setSelectedCampus] = useState<any>(null)

  useEffect(() => {
    if (!selectedCampus) {
      setSelectedCampus(null)
    }
  }, [selectedCampus])

  useEffect(() => {
    handleSelectedCampus(selectedCampus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCampus])

  return (
    <>
      <Select
        className='h-[42px] rounded-2xl border-none outline-none shadow-lg'
        loading={false}
        mode='multiple'
        showSearch={false}
        placeholder={
          <span className='text-black text-lg'>Select Hostel Campus</span>
        }
        value={selectedCampus}
        onChange={setSelectedCampus}
        style={{ width: 225 }}
        // options={filteredOptions}
        options={campusList}
        tagRender={tagRender}
        maxTagCount={isLarge ? 3 : 1}
        // allowClear
        suffixIcon={<IoIosArrowDown size={20} color='#484442' />}
        onClear={() => setSelectedCampus(null)}
        optionRender={(v) => {
          let selected = false
          if (selectedCampus?.includes(v.value)) {
            selected = true
          }
          return (
            <div className='flex gap-1 items-center'>
              <input
                type='checkbox'
                checked={selected}
                className=' checked:accent-hostel-yellow'
              />
              <p>{v.label}</p>
            </div>
          )
        }}
      />
    </>
  )
}

export default CampusFilter
