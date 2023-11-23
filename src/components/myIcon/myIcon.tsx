'use client'

import React, { useState } from 'react'
import { Icon, IconProps, loadIcons } from '@iconify/react'
import Skeleton from 'react-loading-skeleton'

export default function MyIcon (props: IconProps) {
  const [loaded, setLoaded] = useState(false)

  loadIcons([props.icon as string], (loaded, missing, pending, unsubscribe) => {
    if (loaded.length) {
      console.log(
        `Icon ${props.icon} have been loaded and is ready to be renderered.`
      )
      setLoaded(true)
      return
    }

    if (missing.length) {
      console.log(`Icon ${props.icon} does not exist.`)
      return
    }

    if (pending.length) {
      // Pending icons list in this example is empty.
      // If you call loadIcons() with multiple icons, pending list might not be empty, but for one icon it is always empty.
      //
      // Callback is called when something changes, with 1 icon there can only be 2 type of changes: icon has loaded or icon is missing.
    }
  })

  if (!loaded) {
    return (
      <Skeleton width={20} />
    )
  }

  return (
    <Icon
      {...props} onLoad={() => setLoaded(true)}
    />
  )
}
