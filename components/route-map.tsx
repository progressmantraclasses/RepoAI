"use client"

import { useEffect, useRef } from "react"

interface RouteMapProps {
  prioritizeAQI: boolean
  balanceFactors: number
}

export function RouteMap({ prioritizeAQI, balanceFactors }: RouteMapProps) {
  const mapRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const canvas = mapRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw map background
    ctx.fillStyle = "#f3f4f6"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw roads
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 2

    // Main roads
    ctx.beginPath()
    // Horizontal roads
    ctx.moveTo(0, 100)
    ctx.lineTo(canvas.width, 100)
    ctx.moveTo(0, 200)
    ctx.lineTo(canvas.width, 200)
    ctx.moveTo(0, 300)
    ctx.lineTo(canvas.width, 300)

    // Vertical roads
    ctx.moveTo(100, 0)
    ctx.lineTo(100, canvas.height)
    ctx.moveTo(300, 0)
    ctx.lineTo(300, canvas.height)
    ctx.moveTo(500, 0)
    ctx.lineTo(500, canvas.height)
    ctx.stroke()

    // Secondary roads
    ctx.beginPath()
    ctx.strokeStyle = "#d1d5db"
    ctx.lineWidth = 1

    // Horizontal secondary roads
    ctx.moveTo(0, 150)
    ctx.lineTo(canvas.width, 150)
    ctx.moveTo(0, 250)
    ctx.lineTo(canvas.width, 250)

    // Vertical secondary roads
    ctx.moveTo(200, 0)
    ctx.lineTo(200, canvas.height)
    ctx.moveTo(400, 0)
    ctx.lineTo(400, canvas.height)
    ctx.stroke()

    // Draw pollution heatmap
    // High pollution area (ITO Junction)
    const gradient1 = ctx.createRadialGradient(300, 200, 0, 300, 200, 100)
    gradient1.addColorStop(0, "rgba(239, 68, 68, 0.5)")
    gradient1.addColorStop(1, "rgba(239, 68, 68, 0)")

    ctx.fillStyle = gradient1
    ctx.beginPath()
    ctx.arc(300, 200, 100, 0, Math.PI * 2)
    ctx.fill()

    // Medium pollution area
    const gradient2 = ctx.createRadialGradient(150, 250, 0, 150, 250, 80)
    gradient2.addColorStop(0, "rgba(245, 158, 11, 0.4)")
    gradient2.addColorStop(1, "rgba(245, 158, 11, 0)")

    ctx.fillStyle = gradient2
    ctx.beginPath()
    ctx.arc(150, 250, 80, 0, Math.PI * 2)
    ctx.fill()

    // Low pollution area
    const gradient3 = ctx.createRadialGradient(450, 150, 0, 450, 150, 70)
    gradient3.addColorStop(0, "rgba(16, 185, 129, 0.3)")
    gradient3.addColorStop(1, "rgba(16, 185, 129, 0)")

    ctx.fillStyle = gradient3
    ctx.beginPath()
    ctx.arc(450, 150, 70, 0, Math.PI * 2)
    ctx.fill()

    // Draw routes
    // Start and end points
    const startPoint = { x: 100, y: 100 }
    const endPoint = { x: 500, y: 300 }

    // Draw start and end markers
    ctx.fillStyle = "#047857"
    ctx.beginPath()
    ctx.arc(startPoint.x, startPoint.y, 8, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = "#be123c"
    ctx.beginPath()
    ctx.arc(endPoint.x, endPoint.y, 8, 0, Math.PI * 2)
    ctx.fill()

    // Add labels
    ctx.fillStyle = "#111827"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"

    ctx.fillText("Start", startPoint.x, startPoint.y - 15)
    ctx.fillText("End", endPoint.x, endPoint.y - 15)

    // Draw fastest route (through high pollution)
    ctx.beginPath()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 3
    ctx.setLineDash([])

    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(300, startPoint.y)
    ctx.lineTo(300, 200)
    ctx.lineTo(300, endPoint.y)
    ctx.lineTo(endPoint.x, endPoint.y)

    ctx.stroke()

    // Draw green route (avoiding high pollution)
    ctx.beginPath()
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 3
    ctx.setLineDash(prioritizeAQI ? [] : [5, 5])

    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(startPoint.x, 200)
    ctx.lineTo(200, 200)
    ctx.lineTo(200, 300)
    ctx.lineTo(400, 300)
    ctx.lineTo(400, endPoint.y)
    ctx.lineTo(endPoint.x, endPoint.y)

    ctx.stroke()

    // Draw alternative route
    ctx.beginPath()
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 3
    ctx.setLineDash([5, 5])

    ctx.moveTo(startPoint.x, startPoint.y)
    ctx.lineTo(startPoint.x, 150)
    ctx.lineTo(400, 150)
    ctx.lineTo(400, 250)
    ctx.lineTo(500, 250)
    ctx.lineTo(endPoint.x, endPoint.y)

    ctx.stroke()
    ctx.setLineDash([])

    // Add route labels
    ctx.font = "11px Arial"

    // Fastest route label
    ctx.fillStyle = "#3b82f6"
    ctx.fillText("Fastest Route", 300, 170)
    ctx.fillText("(25 min, AQI 220)", 300, 185)

    // Green route label
    ctx.fillStyle = "#10b981"
    ctx.fillText("Green Route", 200, 250)
    ctx.fillText("(28 min, AQI 160)", 200, 265)

    // Alternative route label
    ctx.fillStyle = "#8b5cf6"
    ctx.fillText("Alternative", 400, 200)
    ctx.fillText("(32 min, AQI 175)", 400, 215)

    // Add pollution labels
    ctx.fillStyle = "#ef4444"
    ctx.fillText("High Pollution", 300, 230)
    ctx.fillText("AQI: 220", 300, 245)

    ctx.fillStyle = "#f59e0b"
    ctx.fillText("Medium", 150, 280)
    ctx.fillText("AQI: 175", 150, 295)

    ctx.fillStyle = "#10b981"
    ctx.fillText("Low", 450, 180)
    ctx.fillText("AQI: 120", 450, 195)

    // Add legend
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
    ctx.fillRect(canvas.width - 150, 10, 140, 100)
    ctx.strokeStyle = "#d1d5db"
    ctx.strokeRect(canvas.width - 150, 10, 140, 100)

    ctx.fillStyle = "#111827"
    ctx.font = "12px Arial"
    ctx.textAlign = "left"
    ctx.fillText("Routes", canvas.width - 140, 30)

    // Legend items
    ctx.beginPath()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2
    ctx.moveTo(canvas.width - 140, 45)
    ctx.lineTo(canvas.width - 110, 45)
    ctx.stroke()

    ctx.fillStyle = "#111827"
    ctx.fillText("Fastest", canvas.width - 100, 48)

    ctx.beginPath()
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 2
    ctx.moveTo(canvas.width - 140, 65)
    ctx.lineTo(canvas.width - 110, 65)
    ctx.stroke()

    ctx.fillStyle = "#111827"
    ctx.fillText("Green", canvas.width - 100, 68)

    ctx.beginPath()
    ctx.strokeStyle = "#8b5cf6"
    ctx.lineWidth = 2
    ctx.setLineDash([5, 5])
    ctx.moveTo(canvas.width - 140, 85)
    ctx.lineTo(canvas.width - 110, 85)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.fillStyle = "#111827"
    ctx.fillText("Alternative", canvas.width - 100, 88)
  }, [prioritizeAQI])

  return <canvas ref={mapRef} width={600} height={400} className="w-full h-[400px] border rounded-lg" />
}

