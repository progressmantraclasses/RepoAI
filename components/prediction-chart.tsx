"use client"

import { useEffect, useRef } from "react"

interface PredictionChartProps {
  type: "aqi" | "pm25" | "no2"
}

export function PredictionChart({ type }: PredictionChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const canvas = chartRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40

    // Generate data based on type
    let data: { hour: number; value: number; confidence: [number, number] }[] = []
    let maxValue = 0
    let label = ""
    let color = ""

    if (type === "aqi") {
      data = Array.from({ length: 72 }, (_, i) => {
        const baseValue = 215 + Math.sin(i / 12) * 40 + i / 3
        const confidence = [baseValue * 0.9, baseValue * 1.1]
        return { hour: i, value: baseValue, confidence }
      })
      maxValue = 350
      label = "AQI"
      color = "#ef4444" // Red
    } else if (type === "pm25") {
      data = Array.from({ length: 72 }, (_, i) => {
        const baseValue = 130 + Math.sin(i / 12) * 25 + i / 4
        const confidence = [baseValue * 0.85, baseValue * 1.15]
        return { hour: i, value: baseValue, confidence }
      })
      maxValue = 200
      label = "PM2.5 (µg/m³)"
      color = "#f59e0b" // Amber
    } else if (type === "no2") {
      data = Array.from({ length: 72 }, (_, i) => {
        const baseValue = 80 + Math.sin(i / 12) * 15 + i / 6
        const confidence = [baseValue * 0.9, baseValue * 1.1]
        return { hour: i, value: baseValue, confidence }
      })
      maxValue = 150
      label = "NO₂ (µg/m³)"
      color = "#8b5cf6" // Purple
    }

    // Calculate scales
    const xStep = (width - padding * 2) / (data.length - 1)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#9ca3af"
    ctx.lineWidth = 1

    // X-axis
    ctx.moveTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)

    // Y-axis
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.stroke()

    // Draw grid lines
    ctx.beginPath()
    ctx.strokeStyle = "#e5e7eb"
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 1; i <= 5; i++) {
      const y = padding + (height - padding * 2) * (1 - i / 5)
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)

      // Add Y-axis labels
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px Arial"
      ctx.textAlign = "right"
      ctx.fillText(((maxValue * i) / 5).toFixed(0), padding - 10, y + 4)
    }
    ctx.stroke()

    // Draw X-axis labels
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"

    for (let i = 0; i < data.length; i += 12) {
      const x = padding + i * xStep
      ctx.fillText(`+${i}h`, x, height - padding + 20)
    }

    // Draw confidence interval
    ctx.fillStyle = `${color}20` // Color with 20% opacity

    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + i * xStep
      const y1 = height - padding - (height - padding * 2) * (point.confidence[0] / maxValue)
      const y2 = height - padding - (height - padding * 2) * (point.confidence[1] / maxValue)

      if (i === 0) {
        ctx.moveTo(x, y1)
      } else {
        ctx.lineTo(x, y1)
      }
    })

    // Complete the confidence interval shape
    for (let i = data.length - 1; i >= 0; i--) {
      const x = padding + i * xStep
      const y = height - padding - (height - padding * 2) * (data[i].confidence[1] / maxValue)
      ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.fill()

    // Draw prediction line
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2

    data.forEach((point, i) => {
      const x = padding + i * xStep
      const y = height - padding - (height - padding * 2) * (point.value / maxValue)

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw data points
    data.forEach((point, i) => {
      if (i % 12 === 0) {
        // Only draw points every 12 hours
        const x = padding + i * xStep
        const y = height - padding - (height - padding * 2) * (point.value / maxValue)

        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }
    })

    // Add legend
    ctx.fillStyle = "#111827"
    ctx.font = "14px Arial"
    ctx.textAlign = "left"

    // Prediction line
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.moveTo(width - 200, 20)
    ctx.lineTo(width - 160, 20)
    ctx.stroke()

    ctx.fillStyle = "#111827"
    ctx.fillText(`Predicted ${label}`, width - 150, 25)

    // Confidence interval
    ctx.fillStyle = `${color}20`
    ctx.fillRect(width - 200, 35, 40, 15)

    ctx.fillStyle = "#111827"
    ctx.fillText("Confidence Interval (±10%)", width - 150, 45)

    // Add title
    ctx.fillStyle = "#111827"
    ctx.font = "16px Arial"
    ctx.textAlign = "center"
    ctx.fillText(`72-Hour ${label} Prediction`, width / 2, 20)
  }, [type])

  return <canvas ref={chartRef} width={800} height={400} className="w-full h-[400px]" />
}

