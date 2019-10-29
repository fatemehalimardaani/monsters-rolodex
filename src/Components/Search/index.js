import React from 'react';

export const Search =(props)=>{
    return (
        <div>
            <input className='search' placeholder={props.placeHolder} onChange={props.onChange} type="search"/>
        </div>
    )
};