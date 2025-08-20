'use client'

import { useState, useEffect } from 'react'

type TypewriterProps = {
  texts: string[]
}

export default function Typewriter({texts}: TypewriterProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(150) // typing speed (ms)

  useEffect(() => {
    const currentText = texts[textIndex]

    let timeout : ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentText.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1))
      }, speed)
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1))
      }, speed / 2)
    } else if (!isDeleting && displayedText.length === currentText.length) {
      // Wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000)
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next text
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, textIndex])

  return (
    <h1 className="text-2xl text-center font-bold tracking-wider  bg-gradient-to-r from-purple-400 via-blue-500 to-gray-400 bg-clip-text text-transparent font-mono border-r-4 border-gray-500 pr-2  animate-blink-caret">
      {displayedText}
    </h1>
  )
}
