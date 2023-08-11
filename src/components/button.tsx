'use client'


import React from 'react'

import { Burger, Close, Plus } from 'components/icons'
import type { ButtonProps } from 'lib/types'

import style from './button.module.css'


export function Button({
  children,
  controlledID,
  // handleClick,
  icon,
  id,
  isActive,
  isExpandable,
  title,
  type,
  wrap}: ButtonProps) {
    
  const ButtonWrapTag = wrap ?? React.Fragment

  let buttonWrapOpts: {[key: string]: string} = {}
  let buttonOpts: {[key: string]: boolean | number | string | undefined} = {}
  let buttonIcon: React.ReactNode

  if (wrap) {
    buttonWrapOpts['className'] = `${style.container}`
  }

  if (type === 'tab') {
    buttonOpts['aria-selected'] = isActive
    buttonOpts['role'] = 'tab'
  }
  
  if (isExpandable) {
    buttonOpts['aria-expanded'] = isActive
  }
  
  switch (icon) {
    case ('burger'):
      buttonIcon = <Burger />
      break
    case 'close':
      buttonIcon = <Close />
      break
    case 'plus':
      buttonIcon = <Plus />
      break
  }
  
  return (
    <ButtonWrapTag {...buttonWrapOpts}>
      <button
        aria-controls={controlledID}
        className={style[type]}
        id={id}
        // onClick={handleClick}
        title={title}
        {...buttonOpts}
      >
        { children }
        { buttonIcon }
      </button>
    </ButtonWrapTag>
  )
}
