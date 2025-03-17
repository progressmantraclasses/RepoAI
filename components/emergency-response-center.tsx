"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Phone, Ambulance, FireExtinguisher } from "lucide-react"

export function EmergencyResponseCenter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Response Center</CardTitle>
        <CardDescription>Coordinate rapid response to pollution-related emergencies</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <span className="font-semibold">Active Alerts:</span>
            </div>
            <Badge variant="destructive">2 Critical</Badge>
          </div>

          <div className="space-y-2">
            <EmergencyAlert
              title="Hazardous AQI Levels"
              description="AQI exceeding 300 in Anand Vihar. Immediate evacuation recommended."
              type="critical"
            />
            <EmergencyAlert
              title="Industrial Fire"
              description="Chemical plant fire in Okhla Industrial Area. Potential toxic fumes."
              type="critical"
            />
            <EmergencyAlert
              title="Traffic Congestion"
              description="Major accident on NH-48 causing severe congestion and increased localized pollution."
              type="warning"
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <Button className="flex-1">
              <Phone className="mr-2 h-4 w-4" />
              Emergency Hotline
            </Button>
            <Button variant="outline" className="flex-1">
              <Ambulance className="mr-2 h-4 w-4" />
              Medical Response
            </Button>
            <Button variant="outline" className="flex-1">
              <FireExtinguisher className="mr-2 h-4 w-4" />
              Fire Department
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EmergencyAlert({
  title,
  description,
  type,
}: {
  title: string
  description: string
  type: "critical" | "warning"
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-lg border p-4
        ${
          type === "critical"
            ? "bg-red-900/20 border-red-900/50 dark:bg-red-900/30 dark:border-red-900/50"
            : "bg-yellow-900/20 border-yellow-900/50 dark:bg-yellow-900/30 dark:border-yellow-900/50"
        }
      `}
    >
      <div
        className={`
        font-semibold mb-1
        ${type === "critical" ? "text-red-100 dark:text-red-100" : "text-yellow-100 dark:text-yellow-100"}
      `}
      >
        {title}
      </div>
      <div
        className={`
        text-sm
        ${type === "critical" ? "text-red-100 dark:text-red-100" : "text-yellow-100 dark:text-yellow-100"}
      `}
      >
        {description}
      </div>
      {/* Animated pulse effect for critical alerts */}
      {type === "critical" && (
        <div className="absolute -top-4 -right-4 w-12 h-12">
          <div className="absolute w-full h-full bg-red-500/20 rounded-full animate-ping" />
          <div className="absolute w-full h-full bg-red-500/40 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  )
}

