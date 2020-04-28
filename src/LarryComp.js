import React, { useState } from 'react';

function LarryComp(props) {
    console.log(props);

    function myOnClick(e){
        // console.log('you clicked in LarryComp');
        props.countFunc();
    }

    return (
        <div>
            <h1 onClick={props.countFunc}> "hello world from LarryComp" {props.countx} </h1>
            {/* <h1 onClick={myOnClickCount}>Hello World: count {count}</h1> */}
        </div>
    )
}

export default LarryComp;