'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export function TypedEffect({ strings }: { strings: string[] }) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return <span ref={el} />
}

