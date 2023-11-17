import React from 'react'
import Style from './not-found.module.css'
import Redirect from '@/components/redirect/redirect'
import MyIcon from '@/components/myIcon/myIcon'

export default function custom404 () {
  return (
    <div className={Style.notFound}>
      <p className={Style.textMain}>Not found 404</p>
      <Redirect href='/'>
        <p className={Style.text}>Go to home <MyIcon icon='material-symbols:door-back-rounded' /></p>
      </Redirect>
    </div>
  )
}
