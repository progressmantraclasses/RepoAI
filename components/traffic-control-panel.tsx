"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Car, AlertTriangle } from "lucide-react"

export function TrafficControlPanel() {
  const [autoMode, setAutoMode] = useState(true)
  const [prioritizeEV, setPrioritizeEV] = useState(true)
  const [greenWaveIntensity, setGreenWaveIntensity] = useState([60])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Smart Traffic Control</CardTitle>
        <CardDescription>AI-powered adaptive traffic signals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="auto-mode">AI Adaptive Mode</Label>
          <Switch id="auto-mode" checked={autoMode} onCheckedChange={setAutoMode} />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="prioritize-ev">Prioritize EV & Public Transport</Label>
          <Switch id="prioritize-ev" checked={prioritizeEV} onCheckedChange={setPrioritizeEV} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Green Wave Intensity</Label>
            <span className="text-sm">{greenWaveIntensity}%</span>
          </div>
          <Slider value={greenWaveIntensity} onValueChange={setGreenWaveIntensity} max={100} step={5} />
        </div>

        <div className="rounded-md border p-3 bg-amber-50 dark:bg-amber-950/50">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-amber-800 dark:text-amber-200">High Congestion Alert</h4>
              <p className="text-xs text-amber-700 dark:text-amber-300">
                ITO Junction experiencing 85% congestion. AI recommending traffic diversion.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <TrafficSignalStatus junction="ITO" status="Optimizing" congestion={85} />
          <TrafficSignalStatus junction="Anand Vihar" status="Normal" congestion={45} />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={autoMode}>
          Manual Override
        </Button>
      </CardFooter>
    </Card>
  )
}

function TrafficSignalStatus({
  junction,
  status,
  congestion,
}: {
  junction: string
  status: "Normal" | "Optimizing" | "Critical"
  congestion: number
}) {
  return (
    <div className="rounded-lg border p-2">
      <div className="text-sm font-medium">{junction}</div>
      <div className="flex items-center justify-between">
        <div
          className={`text-xs ${status === "Normal" ? "text-green-500" : status === "Optimizing" ? "text-amber-500" : "text-red-500"}`}
        >
          {status}
        </div>
        <div className="flex items-center text-xs">
          <Car className="h-3 w-3 mr-1" />
          {congestion}%
        </div>
      </div>
    </div>
  )
}

