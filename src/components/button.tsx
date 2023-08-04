import React from 'react'
import styles from './button.module.sass'

type ButtonProps = React. PropsWithChildren<{
    primary?: boolean
}>

export default ({ primary, children }: ButtonProps) => (
    <button className={`${styles.container} ${primary ? styles.primary : ''}`}>{children}</button>
)
