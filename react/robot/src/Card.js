import React from "react";


//when it is javascript it has got to stay in its brackets

const Card = (props) => {
    const {name, email, id} = props
    return (
//        you need to return one thing and cannot return multiple things
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robots'/>
            <div>
                <h2 className='f6'>{name}</h2>
                <p className='f6'>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;