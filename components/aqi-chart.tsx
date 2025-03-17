"use client"

import { useEffect, useRef } from "react"

export function AqiChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        // Clear canvas
        ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height)

        // Set dimensions
        const width = chartRef.current.width
        const height = chartRef.current.height
        const padding = 40

        // Data for the past 7 days and 3 days prediction
        const data = [
          { day: "Mon", value: 180, predicted: false },
          { day: "Tue", value: 195, predicted: false },
          { day: "Wed", value: 175, predicted: false },
          { day: "Thu", value: 190, predicted: false },
          { day: "Fri", value: 205, predicted: false },
          { day: "Sat", value: 215, predicted: false },
          { day: "Sun", value: 215, predicted: false },
          { day: "Mon", value: 230, predicted: true },
          { day: "Tue", value: 245, predicted: true },
          { day: "Wed", value: 235, predicted: true },
        ]

        // Calculate scales
        const maxValue = Math.max(...data.map((d) => d.value)) * 1.1
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

        // Draw data line
        ctx.beginPath()
        ctx.strokeStyle = "#3b82f6"
        ctx.lineWidth = 2

        // Historical data (solid line)
        let predictedStartX = 0
        data.forEach((point, i) => {
          const x = padding + i * xStep
          const y = height - padding - (height - padding * 2) * (point.value / maxValue)

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }

          // Mark where prediction starts
          if (i < data.length - 1 && !point.predicted && data[i + 1].predicted) {
            predictedStartX = x
          }

          // Add X-axis labels
          ctx.fillStyle = "#6b7280"
          ctx.font = "12px Arial"
          ctx.textAlign = "center"
          ctx.fillText(point.day, x, height - padding + 20)
        })
        ctx.stroke()

        // Draw prediction line (dashed)
        if (predictedStartX > 0) {
          ctx.beginPath()
          ctx.setLineDash([5, 3])
          ctx.strokeStyle = "#ec4899"
          ctx.lineWidth = 2

          const predictionStartIndex = data.findIndex((d) => d.predicted)
          const x = padding + predictionStartIndex * xStep
          const y = height - padding - (height - padding * 2) * (data[predictionStartIndex].value / maxValue)

          ctx.moveTo(x, y)

          for (let i = predictionStartIndex + 1; i < data.length; i++) {
            const x = padding + i * xStep
            const y = height - padding - (height - padding * 2) * (data[i].value / maxValue)
            ctx.lineTo(x, y)
          }
          ctx.stroke()
          ctx.setLineDash([])
        }

        // Draw data points
        data.forEach((point, i) => {
          const x = padding + i * xStep
          const y = height - padding - (height - padding * 2) * (point.value / maxValue)

          ctx.beginPath()
          ctx.fillStyle = point.predicted ? "#ec4899" : "#3b82f6"
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()
        })

        // Add legend
        ctx.fillStyle = "#6b7280"
        ctx.font = "14px Arial"
        ctx.textAlign = "left"

        // Historical data
        ctx.beginPath()
        ctx.strokeStyle = "#3b82f6"
        ctx.lineWidth = 2
        ctx.moveTo(width - 200, 20)
        ctx.lineTo(width - 160, 20)
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "#3b82f6"
        ctx.arc(width - 180, 20, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#111827"
        ctx.fillText("Historical Data", width - 150, 25)

        // Prediction
        ctx.beginPath()
        ctx.setLineDash([5, 3])
        ctx.strokeStyle = "#ec4899"
        ctx.lineWidth = 2
        ctx.moveTo(width - 200, 45)
        ctx.lineTo(width - 160, 45)
        ctx.stroke()
        ctx.setLineDash([])

        ctx.beginPath()
        ctx.fillStyle = "#ec4899"
        ctx.arc(width - 180, 45, 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#111827"
        ctx.fillText("72-hour Prediction", width - 150, 50)
      }
    }
  }, [])

  return <canvas ref={chartRef} width={800} height={300} className="w-full h-[300px]" />
}

