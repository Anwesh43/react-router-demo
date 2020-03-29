import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'

const rotatingStyle = (scale, w, h) => {
    const size = Math.min(w, h) / 4
    const position = 'absolute'
    const top = `${h / 2 - size / 2}px`
    const left = `${w / 2 - size / 2}px`
    const width = `${size}px`
    const height = `${size}px`
    const background = '#4CAF50'
    const WebkitTransform = `rotate(${90 * Math.sin(scale * Math.PI / 180)}deg)`
    return {
        position,
        top,
        left,
        width,
        height,
        background,
        WebkitTransform
    }
}

const RotatingRect = ({w, h}) => {
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <div onClick = {start} style = {rotatingStyle(scale, w, h)}></div>
}

export default RotatingRect
