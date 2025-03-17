"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sun, Wind, Zap, Battery } from "lucide-react"

export function EnergyDistribution() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Energy Distribution</CardTitle>
            <CardDescription>Smart infrastructure power management</CardDescription>
          </div>
          <Badge variant="outline" className="bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800">
            Eco Mode Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm font-medium">Energy Source Distribution</div>
          <div className="grid grid-cols-2 gap-3">
            <EnergySourceCard
              name="Solar"
              percentage={45}
              icon={<Sun className="h-4 w-4 text-amber-500" />}
              status="Optimal"
            />
            <EnergySourceCard
              name="Wind"
              percentage={25}
              icon={<Wind className="h-4 w-4 text-blue-500" />}
              status="Active"
            />
            <EnergySourceCard
              name="Grid"
              percentage={20}
              icon={<Zap className="h-4 w-4 text-purple-500" />}
              status="Reduced"
            />
            <EnergySourceCard
              name="Battery"
              percentage={10}
              icon={<Battery className="h-4 w-4 text-green-500" />}
              status="Charging"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Smart Infrastructure Status</div>
          <div className="space-y-3">
            <InfrastructureItem name="Traffic Signals" status="Eco Mode" powerSaving={35} />
            <InfrastructureItem name="Street Lights" status="Adaptive Brightness" powerSaving={42} />
            <InfrastructureItem name="Pollution Sensors" status="Full Power" powerSaving={0} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function EnergySourceCard({
  name,
  percentage,
  icon,
  status,
}: {
  name: string
  percentage: number
  icon: React.ReactNode
  status: string
}) {
  return (
    <div className="rounded-lg border p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {icon}
          <div className="ml-2 text-sm font-medium">{name}</div>
        </div>
        <div className="text-xs text-muted-foreground">{status}</div>
      </div>
      <div className="space-y-1">
        <Progress value={percentage} className="h-2" />
        <div className="text-xs text-right">{percentage}%</div>
      </div>
    </div>
  )
}

function InfrastructureItem({
  name,
  status,
  powerSaving,
}: {
  name: string
  status: string
  powerSaving: number
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm">{name}</div>
      <div className="flex items-center">
        <div className="text-xs mr-2">{status}</div>
        {powerSaving > 0 && (
          <Badge
            variant="outline"
            className="text-xs bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800"
          >
            -{powerSaving}% Power
          </Badge>
        )}
      </div>
    </div>
  )
}

