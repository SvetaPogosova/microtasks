import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonPropsType) => {

    const onClickBtnHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickBtnHandler}>{props.name}</button>
    );
};