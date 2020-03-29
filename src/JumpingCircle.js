import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'

const circleStyle = (scale) => {
    const position = 'absolute'
    const yJump = (h / 3) * Math.sin(scale * Math.PI / 180)
    const r = Math.min(w, h) / 8
    const left = `${w / 2 - r}px`
    const top = `${h / 2 - r - y}px`
    const width = `${2 * r}px`
    const height = `${2 * r}px`
    const background = '#3F51B5'
    const borderRadius = '50%'
    return {position, top, left, width, height, background, borderRadius}
}


const JumpingCircle = () => {
    const {scale, start} = useAnimatedScale(0.02, 30)
    return (<div onClick = {start} style = {circleStyle(scale)}></div>)
}

export default JumpingCircle
