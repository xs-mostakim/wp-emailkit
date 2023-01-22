import { useNode } from '@craftjs/core';
import React, { useState } from 'react'


export const TextAlignment = ({ options, title }) => {
    const [selectedAlign, setSelectedAlign] = useState("");
    const { actions: { setProp } } = useNode();

    const handleChange = (event) => {
        setSelectedAlign(event.target.value);
        setProp((props) => (props.TextAlign = event.target.value));
    };

    return (
        <div className="radio-toolbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p style={TitleStyle}>{title}:</p>
            <div>
                {options.map((item, index) => (
                    <span key={index}>
                        <input
                            type="radio"
                            id={item.id}
                            name={item.name}
                            value={item.value}
                            onChange={handleChange}
                            checked={selectedAlign === item.value}
                        />
                        <label htmlFor={item.id}>{item.icon}</label>
                    </span>
                ))}
            </div>
        </div>
    )
}


const TitleStyle = { display: 'block', fontSize: '14px', color: 'gray', fontWeight: '400' }