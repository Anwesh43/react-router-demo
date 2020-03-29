import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'
import {useParams} from 'react-router-dom'

const rotatingStyle = (scale, w, h) => {

    const size = Math.min(w, h) / 4
    const position = 'absolute'
    const top = `${h / 2 - size / 2}px`
    const left = `${w / 2 - size / 2}px`
    const width = `${size}px`
    const height = `${size}px`
    const background = '#4CAF50'
    const textAlign = 'center'
    const color = 'white'
    const fontSize = `${Math.min(w, h) /20}px`
    const WebkitTransform = `rotate(${90 * Math.sin(scale * Math.PI)}deg)`
    return {
        position,
        top,
        left,
        width,
        height,
        background,
        textAlign,
        color,
        fontSize,
        WebkitTransform
    }
}

const RotatingRect = ({w, h}) => {
    const {text} = useParams()
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <div onClick = {start} style = {rotatingStyle(scale, w, h)}>{text}</div>
}

export default RotatingRect
