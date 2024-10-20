import React from 'react'
import useSound from 'use-sound'
import happySong from '../music/happy-birthday.mp3'
export default function Music() {
    const [play] = useSound(happySong)
  return (
    <div>Music</div>
  )
}
