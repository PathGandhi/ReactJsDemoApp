import React from 'react';

const validation = (props) => {
    let validationMsg = 'Text Long enough';

    if(props.inputLength<=5){
        validationMsg = 'Text too Short'
    }

    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    );
}

export default validation;