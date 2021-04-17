import React from 'react';

export default function TableHead(props) {
    return props.DataHeadings.map((value, label) => {
        if (Object.keys(props.specialObjs).includes(value)) {
            let specialObj = props.specialObjs[value];
            if (specialObj.type === 'exclude') {
                return null;
            }
        }
        return < th key={value} > {value}</th >
    })
}