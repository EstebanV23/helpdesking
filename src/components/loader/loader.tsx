import React from 'react'
import Style from './loader.module.css'

export default function Loader () {
  return (
    <div className={Style.contentLoader}>
      <span className={Style.loader} />
    </div>
  )
}
