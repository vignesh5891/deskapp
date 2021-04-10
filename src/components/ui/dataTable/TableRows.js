import React from 'react';

export default function TableRows(props) {
    return props.dataRows.map(function (rw, index) {
        return (
            <tr key={index}>{
                Object.keys(rw).map((key, i) => {
                    if (Object.keys(props.specialObjs).includes(key)) {
                        let specialObj = props.specialObjs[key];
                        switch (specialObj.type) {
                            case 'img':
                                return (<td key={i}>
                                    <img src={rw[key]} style={{ maxWidth: specialObj.maxWidth }} alt='' />
                                </td>);
                            case 'button':
                                return (<td key={i}>
                                    <button className={'btn ' + specialObj.className}>{specialObj.buttonText}</button>
                                </td>)
                            case 'exclude':
                                return ''
                            default:
                                return ''
                        }
                    }
                    return <td key={i}>{rw[key]}</td>
                })
            }</tr >
        )
    })
}