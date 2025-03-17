"use client"

import { useEffect, useRef } from "react"

interface TrafficSimulationProps {
  adaptiveMode: boolean
  prioritizeEV: boolean
  prioritizePublicTransport: boolean
  congestionLevel: number
}

export function TrafficSimulation({
  adaptiveMode,
  prioritizeEV,
  prioritizePublicTransport,
  congestionLevel,
}: TrafficSimulationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw intersection
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const roadWidth = 60

    // Draw roads
    ctx.fillStyle = "#374151" // Dark gray for roads

    // Horizontal road
    ctx.fillRect(0, centerY - roadWidth / 2, canvas.width, roadWidth)

    // Vertical road
    ctx.fillRect(centerX - roadWidth / 2, 0, roadWidth, canvas.height)

    // Draw road markings
    ctx.strokeStyle = "#f3f4f6"
    ctx.setLineDash([10, 10])
    ctx.beginPath()

    // Horizontal road center line
    ctx.moveTo(0, centerY)
    ctx.lineTo(canvas.width, centerY)

    // Vertical road center line
    ctx.moveTo(centerX, 0)
    ctx.lineTo(centerX, canvas.height)

    ctx.stroke()
    ctx.setLineDash([])

    // Draw traffic lights
    const lightSize = 15
    const lightSpacing = 5
    const lightOffset = 40

    // Traffic light positions
    const trafficLights = [
      { x: centerX + lightOffset, y: centerY - lightOffset, direction: "north" },
      { x: centerX + lightOffset, y: centerY + lightOffset, direction: "south" },
      { x: centerX - lightOffset, y: centerY + lightOffset, direction: "east" },
      { x: centerX - lightOffset, y: centerY - lightOffset, direction: "west" },
    ]

    // Determine which lights are green based on adaptive mode
    const northSouthGreen = adaptiveMode ? congestionLevel > 50 : true

    // Draw traffic lights
    trafficLights.forEach((light) => {
      const isGreen = light.direction === "north" || light.direction === "south" ? northSouthGreen : !northSouthGreen

      // Traffic light housing
      ctx.fillStyle = "#1f2937"
      ctx.fillRect(light.x - 10, light.y - 35, 20, 30)

      // Red light
      ctx.fillStyle = isGreen ? "#9ca3af" : "#ef4444"
      ctx.beginPath()
      ctx.arc(light.x, light.y - 25, lightSize / 2, 0, Math.PI * 2)
      ctx.fill()

      // Green light
      ctx.fillStyle = isGreen ? "#10b981" : "#9ca3af"
      ctx.beginPath()
      ctx.arc(light.x, light.y - 10, lightSize / 2, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw vehicles
    const vehicleCount = Math.floor(congestionLevel / 10) + 5
    const vehicleTypes = ["car", "ev", "bus", "truck"]

    for (let i = 0; i < vehicleCount; i++) {
      const direction = Math.random() > 0.5 ? "horizontal" : "vertical"
      const position = Math.random() * canvas.width
      const vehicleType = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)]

      // Determine if this vehicle should be prioritized
      const isPrioritized =
        (vehicleType === "ev" && prioritizeEV) ||
        ((vehicleType === "bus" || vehicleType === "truck") && prioritizePublicTransport)

      // Vehicle color based on type
      let vehicleColor = "#3b82f6" // Default blue for cars
      if (vehicleType === "ev") vehicleColor = "#10b981" // Green for EVs
      if (vehicleType === "bus") vehicleColor = "#f59e0b" // Amber for buses
      if (vehicleType === "truck") vehicleColor = "#6366f1" // Indigo for trucks

      // Draw vehicle
      ctx.fillStyle = vehicleColor

      if (direction === "horizontal") {
        const x = position
        const y = centerY + (Math.random() > 0.5 ? -15 : 15)
        ctx.fillRect(x, y, 30, 10)

        // Add priority indicator
        if (isPrioritized) {
          ctx.fillStyle = "#fef3c7"
          ctx.beginPath()
          ctx.arc(x + 15, y + 5, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      } else {
        const x = centerX + (Math.random() > 0.5 ? -15 : 15)
        const y = position
        ctx.fillRect(x, y, 10, 30)

        // Add priority indicator
        if (isPrioritized) {
          ctx.fillStyle = "#fef3c7"
          ctx.beginPath()
          ctx.arc(x + 5, y + 15, 3, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    // Draw pollution cloud if adaptive mode is off or congestion is high
    if (!adaptiveMode || congestionLevel > 70) {
      const cloudRadius = adaptiveMode ? 30 : 60
      const cloudOpacity = adaptiveMode ? 0.3 : 0.6

      // Create gradient for pollution cloud
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, cloudRadius)
      gradient.addColorStop(0, `rgba(120, 120, 120, ${cloudOpacity})`)
      gradient.addColorStop(1, `rgba(120, 120, 120, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, cloudRadius, 0, Math.PI * 2)
      ctx.fill()
    }

    // Add legend
    ctx.fillStyle = "#111827"
    ctx.font = "12px Arial"
    ctx.textAlign = "left"

    // Legend items
    const legendItems = [
      { color: "#3b82f6", label: "Regular Cars" },
      { color: "#10b981", label: "Electric Vehicles" },
      { color: "#f59e0b", label: "Public Transport" },
    ]

    legendItems.forEach((item, index) => {
      const y = 20 + index * 20

      // Color box
      ctx.fillStyle = item.color
      ctx.fillRect(10, y - 10, 10, 10)

      // Label
      ctx.fillStyle = "#111827"
      ctx.fillText(item.label, 30, y)
    })

    // Add status text
    ctx.fillStyle = "#111827"
    ctx.font = "14px Arial"
    ctx.textAlign = "right"

    ctx.fillText(`Adaptive Mode: ${adaptiveMode ? "ON" : "OFF"}`, canvas.width - 10, 20)
    ctx.fillText(`Congestion: ${congestionLevel}%`, canvas.width - 10, 40)

    if (adaptiveMode) {
      ctx.fillText(
        `Prioritizing: ${prioritizeEV ? "EVs" : ""} ${prioritizePublicTransport ? "Public Transport" : ""}`,
        canvas.width - 10,
        60,
      )
    }
  }, [adaptiveMode, prioritizeEV, prioritizePublicTransport, congestionLevel])

  return <canvas ref={canvasRef} width={600} height={400} className="w-full h-[400px] border rounded-lg bg-gray-50" />
}

