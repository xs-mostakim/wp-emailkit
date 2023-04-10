import React, { useState } from 'react';
import { useNode } from '@craftjs/core';

export const DropdownMenu = ({ Options, title, propsName, CustomeWidth }) => {
    const [textSize, setTextSize] = useState('');
    const { actions: { setProp } } = useNode();

    // For show Spacing UI
    const handleChange = (event) => {
        setTextSize(event.target.value)
        setProp((props) => (props[propsName] = event.target.value));
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: `${CustomeWidth ? CustomeWidth : ''}` }}>
            <p style={TitleStyle}>{title}:</p>
            <select value={textSize} onChange={handleChange}
                style={SelectStyle}
                className="focus:ring-blue-500 focus:border-blue-500">
                {Options.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}



const TitleStyle = {
    display: 'block',
    fontSize: '14px',
    color: 'gray',
    fontWeight: '400'
}

const SelectStyle = {
    width: '120px',
    paddingBottom: '0px',
    paddingTop: '0px',
    fontSize: '12px',
    border: '1px solid gray',
    color: 'gray'
}