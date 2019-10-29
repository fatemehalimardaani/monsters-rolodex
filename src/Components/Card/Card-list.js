import React from 'react';

export const CardList =(props)=>{

    const cardItems=props.cardItems;
    return(

                <div className='col-md-3' key={cardItems.id}>
                    <div className='card-items'>
                        <img alt='monsters' src={`https://robohash.org/${cardItems.id}?set=set2&size=180x180`}/>

                        <h3>{cardItems.name}</h3>
                        <p>{cardItems.email}</p>
                    </div>

                </div>


    )
}