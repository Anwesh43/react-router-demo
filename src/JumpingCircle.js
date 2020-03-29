import {useAnimatedScale, useDimension} from './hooks'
import {useParams} from 'react-router-dom'
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
    const color = "white"
    const fontSize = `${Math.min(w, h) / 35}px`
    const textAlign = 'center'
    return {position, top, left, width, height, background, borderRadius, color, textAlign, fontSize}
}


const JumpingCircle = ({w, h}) => {
    const {scale, start} = useAnimatedScale(0.02, 30)
    const {text} = useParams()
    return (<div onClick = {start} style = {circleStyle(scale,w, h)}>{text}</div>)
}

export default JumpingCircle
