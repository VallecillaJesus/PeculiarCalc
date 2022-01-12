import React from 'react'
import {ContentButton} from './styledComponents'


export const CalcButton = (props) => {
    const { number = 0} = props
    return (
        <ContentButton>{number}</ContentButton>
    )
}

export default CalcButton