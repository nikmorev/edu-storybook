import React from 'react'
import s from './Button.module.css'

export function Button(props: ButtonProps) {
    return (
        <button
            className={s.button}
            onClick={() => console.log('joke')}
            style={{color: props.color || 'black'}}
        >
            {props.text || 'Button'}
            {props.dark ? 'Dark' : 'Light'}
        </button>
    )
}

export interface ButtonProps {
    dark?: boolean,
    color: string,
    text: string
}