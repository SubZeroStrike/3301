"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const targetDate = new Date("2026-05-30T13:40:00").getTime()

    function updateCountdown() {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance <= 0) {
        setIsExpired(true)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center font-mono">
      <div className="flex flex-col items-center gap-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LxNYUVOQOpt9FkU446zB3SjEvSU06n.jpg"
          alt="Cicada 3301"
          className="w-[300px] h-auto"
        />

        {!isExpired ? (
          <div className="flex gap-6 text-black">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold tracking-wide">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-700">Days</span>
            </div>
            <span className="text-5xl font-bold">:</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold tracking-wide">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-700">Hours</span>
            </div>
            <span className="text-5xl font-bold">:</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold tracking-wide">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-700">Minutes</span>
            </div>
            <span className="text-5xl font-bold">:</span>
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl font-bold tracking-wide">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-700">Seconds</span>
            </div>
          </div>
        ) : (
          <p className="text-2xl text-black tracking-wide animate-in fade-in duration-1000">
            37.759720, -121.543372
          </p>
        )}
      </div>
    </main>
  )
}
