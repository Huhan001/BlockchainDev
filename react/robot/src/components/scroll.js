import React from "react";

const  Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '2px solid gray', height: '670px'}}>
            {props.children}
        </div>
    )
}

export default Scroll