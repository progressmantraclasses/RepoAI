"use client"

import React from "react"
import { useEffect, useRef } from "react"

export function AqiMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would be replaced with actual map implementation
    // using Google Maps or Mapbox API
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = 400
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple map representation
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw roads
        ctx.strokeStyle = "#9ca3af"
        ctx.lineWidth = 2

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, i * 80)
          ctx.lineTo(canvas.width, i * 80)
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(i * 120, 0)
          ctx.lineTo(i * 120, canvas.height)
          ctx.stroke()
        }

        // Draw pollution hotspots
        const hotspots = [
          { x: 240, y: 160, radius: 80, color: "rgba(239, 68, 68, 0.5)" }, // Red - high pollution
          { x: 480, y: 240, radius: 100, color: "rgba(239, 68, 68, 0.4)" },
          { x: 720, y: 160, radius: 70, color: "rgba(245, 158, 11, 0.5)" }, // Orange - medium
          { x: 360, y: 320, radius: 90, color: "rgba(245, 158, 11, 0.4)" },
          { x: 600, y: 80, radius: 60, color: "rgba(16, 185, 129, 0.4)" }, // Green - low
        ]

        hotspots.forEach((spot) => {
          ctx.beginPath()
          ctx.fillStyle = spot.color
          ctx.arc(spot.x, spot.y, spot.radius, 0, Math.PI * 2)
          ctx.fill()
        })

        // Add labels
        ctx.fillStyle = "#111827"
        ctx.font = "14px Arial"
        ctx.fillText("ITO Junction (AQI: 235)", 220, 160)
        ctx.fillText("Anand Vihar (AQI: 248)", 460, 240)
        ctx.fillText("Connaught Place (AQI: 175)", 700, 160)
        ctx.fillText("Nehru Place (AQI: 182)", 340, 320)
        ctx.fillText("Lodhi Garden (AQI: 120)", 580, 80)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return <div ref={mapRef} className="h-[400px] w-full bg-muted" />
}
