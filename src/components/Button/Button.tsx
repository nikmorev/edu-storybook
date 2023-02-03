import React from 'react'
import s from './Button.module.css'

export function Button() {
    return (
        <button className={s.button} onClick={() => console.log('joke')}>Button</button>
    )
}