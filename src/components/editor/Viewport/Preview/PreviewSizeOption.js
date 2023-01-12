import React, { useState } from 'react';
import { responsive } from "../../../../rtk/features/Preview/PreviewResonsiveSlice"
import { useDispatch } from 'react-redux';

const SizeMenuItems = [
    { id: 1, name: "MacBook", width: '1132px' },
    { id: 2, name: "iMac", width: '1240px' },
    { id: 3, name: "iPad", width: '748px' },
    { id: 4, name: "iPad Pro", width: '1240px' },
    { id: 5, name: "iPhone 11", width: '396px' },
    { id: 6, name: "Android", width: '320px' },
]

export const PreviewSize = () => {
    const [size, setSize] = useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setSize(event.target.value);
        dispatch(responsive(event.target.value))
    };

    return (
        <div className='preview_section'>
            <select value={size} onChange={handleChange}
                style={SelectStyle}
                className="focus:ring-blue-500 focus:border-blue-500">
                {SizeMenuItems.map((item, index) => (
                    <option key={index} value={item.width}>
                        {item.name} - {item.width}
                    </option>
                ))}
            </select>
        </div>
    );
}


const SelectStyle = {
    width: '150px',
    paddingBottom: '3px',
    paddingTop: '3px',
    fontSize: '12px',
    border: '1px solid gray',
    color: 'gray'
}