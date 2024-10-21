import React, { useState } from 'react';
import { MdAttachMoney } from 'react-icons/md'; // Import the money icon
import { FaSearch } from 'react-icons/fa';
import { Slider, Tooltip } from 'antd'; // Import Slider and Tooltip from Ant Design
import debounce from 'lodash/debounce'; // Import only the debounce function
import type { SliderSingleProps } from 'antd';
import { TbArrowsSort } from "react-icons/tb";

const marks: SliderSingleProps['marks'] = {
    1000: '₵1,000',
    4000: '₵4,000',
    7000: '₵7,000',
    10000: {
      style: {
        color: '#f50',
      },
      label: <strong>₵10,000</strong>,
    },
  };

export default function Sort({ onSort }:{onSort:(value: {type:string, value:number[]})=>void}) {
  const [priceRange, setPriceRange] = useState([20, 50]); // Default price range
  const [school, setSchool] = useState('');
  const [occupants, setOccupants] = useState('');
  const [isSliderVisible, setIsSliderVisible] = useState(false); // State to control slider visibility
 // const [isSingleSlider, setIsSingleSlider] = useState(false); // State to control slider type

  const handlePriceChange = (value:number[]) => {
    setPriceRange(value);
    onSort({ type: 'price', value });
  };

  const handleSchoolChange = (event:any) => {
    setSchool(event.target.value);
    debounceSchoolSort(event.target.value); // Debounce the onSort call
  };

  const handleOccupantsChange = (event:any) => {
    setOccupants(event.target.value);
    debounceOccupantsSort(event.target.value); // Debounce the onSort call
  };

  // Create debounced functions
  const debounceSchoolSort = debounce((value:any) => {
    onSort({ type: 'school', value });
  }, 300); // Adjust the debounce delay as needed

  const debounceOccupantsSort = debounce((value:any) => {
    onSort({ type: 'occupants', value });
  }, 300); // Adjust the debounce delay as needed

  // Styles for the Sort component
  const sortContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Align items to the right
    gap: '1rem', // Space between sort items
  };

//   const sortItemStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-start', // Align items to the start (left)
//   };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    marginLeft: '0.5rem', // Space between icon and input
    padding: '0.5rem',
    borderRadius: '4px', // Rounded corners
    border: '1px solid #ccc', // Border style
    outline: 'none', // Remove outline on focus
  };

  const tipFormatter = (value) => `${value} $`; // Formatter for the tooltip

  return (
    <div style={sortContainerStyle}>
      {/* Price Range Toggle with Tooltip */}
      
      <div className={`flex items-center ${isSliderVisible?'gap-x-3':'gap-x-0'}`}>
      <div className='flex items-center gap-x-1 px-2 cursor-pointer'  onClick={() => setIsSliderVisible(!isSliderVisible)}>
      <p className='font-bold text-lg'>Price sort</p>
        <Tooltip title="click to set price range" placement="bottom">
          <TbArrowsSort 
           size={29}
           className=' cursor-pointer'
           // Adjusted line height and margin
            // Toggle slider visibility
          />
        </Tooltip>
       
        </div>
        {/* Show Slider only if isSliderVisible is true */}
        {isSliderVisible && (
          <>
            {/* Toggle between single and range slider */}
            {/* <button onClick={() => setIsSingleSlider(!isSingleSlider)}>
              {isSingleSlider ? 'Switch to Range Slider' : 'Switch to Single Slider'}
            </button> */}
            {/* {isSingleSlider ? (
              <Slider 
                value={priceRange[0]} // Set value to the single slider
                onChange={(value) => handlePriceChange([value])} // Update state for single value
                min={0} 
                max={10000} 
                tooltipVisible={true} // Show tooltip
                tipFormatter={tipFormatter} // Use the formatter
              />
            ) : ( */}
              <Slider 
               range
                value={priceRange} 
                onChange={handlePriceChange} // Update state for range
                min={1000} 
                max={10000} 
                marks={marks}
                // tooltipVisible={true} // Show tooltips for the min and max values
                style={{width: 300}}
                
               // tipFormatter={tipFormatter} // Use the formatter
               defaultValue={[1000, 10000]}
              />
            
          </>
        )}
      </div>

      {/* School Search Filter */}
      <div className='flex flex-col'>
        <div style={searchContainerStyle}>
          <FaSearch />
          <input
            type="text"
            value={school}
            onChange={handleSchoolChange}
            placeholder="School" // Placeholder only
            style={inputStyle}
            aria-label="School Search" // Accessibility label
          />
        </div>
      </div>

      {/* Occupants Search Filter */}
      <div className='flex flex-col'>
        <div style={searchContainerStyle}>
          <FaSearch />
          <input
            type="text"
            value={occupants}
            onChange={handleOccupantsChange}
            placeholder="Occupants" // Placeholder only
            style={inputStyle}
            aria-label="Occupants Search" // Accessibility label
          />
        </div>
      </div>
    </div>
  );
}
