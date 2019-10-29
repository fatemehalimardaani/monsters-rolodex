import React from 'react';
import {CardList} from './Card-list'
export const Card =(props)=>{
    return(

        <div className='row'>
            {
                props.monsters.map(item=>(
                    <CardList key={item.id} cardItems={item} />
                ))
            }
        </div>

    )
}