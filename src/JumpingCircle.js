import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'

const circleStyle = (scale, w, h) => {
    const position = 'absolute'
    const yJump = (h / 3) * Math.sin(scale * Math.PI)
    const r = Math.min(w, h) / 8
    const left = `${w / 2 - r}px`
    const top = `${h / 2 - r - yJump}px`
    const width = `${2 * r}px`
    const height = `${2 * r}px`
    const background = '#3F51B5'
    const borderRadius = '50%'
    return {position, top, left, width, height, background, borderRadius}
}


const JumpingCircle = ({w, h}) => {
    const {scale, start} = useAnimatedScale(0.02, 30)
    return (<div onClick = {start} style = {circleStyle(scale,w, h)}></div>)
}

export default JumpingCircle
