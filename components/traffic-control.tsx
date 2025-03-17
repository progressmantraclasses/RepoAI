"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Clock, Cpu, RadioTowerIcon as EvStation, Gauge, Truck } from "lucide-react"
import { TrafficSimulation } from "@/components/traffic-simulation"

export default function TrafficControl() {
  const [adaptiveMode, setAdaptiveMode] = useState(true)
  const [prioritizeEV, setPrioritizeEV] = useState(true)
  const [prioritizePublicTransport, setPrioritizePublicTransport] = useState(true)
  const [congestionLevel, setCongestionLevel] = useState(68)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AI-Powered Adaptive Traffic Control</CardTitle>
          <CardDescription>
            Real-time traffic signal management based on pollution levels and congestion
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="adaptive-mode">Adaptive Mode</Label>
                <Switch id="adaptive-mode" checked={adaptiveMode} onCheckedChange={setAdaptiveMode} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="prioritize-ev">Prioritize EVs</Label>
                <Switch id="prioritize-ev" checked={prioritizeEV} onCheckedChange={setPrioritizeEV} />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="prioritize-public">Prioritize Public Transport</Label>
                <Switch
                  id="prioritize-public"
                  checked={prioritizePublicTransport}
                  onCheckedChange={setPrioritizePublicTransport}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Congestion Level</Label>
                  <Badge variant="outline">{congestionLevel}%</Badge>
                </div>
                <Slider
                  value={[congestionLevel]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setCongestionLevel(value[0])}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Select defaultValue="ito">
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ito">ITO Junction</SelectItem>
                    <SelectItem value="anand-vihar">Anand Vihar</SelectItem>
                    <SelectItem value="cp">Connaught Place</SelectItem>
                    <SelectItem value="nehru-place">Nehru Place</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="md:col-span-2">
              <TrafficSimulation
                adaptiveMode={adaptiveMode}
                prioritizeEV={prioritizeEV}
                prioritizePublicTransport={prioritizePublicTransport}
                congestionLevel={congestionLevel}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Traffic Signal Optimization</CardTitle>
          <CardDescription>Current signal timing adjustments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-green-100 rounded-full">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Green Signal</p>
                  <p className="text-2xl font-bold">45s</p>
                  <p className="text-xs text-muted-foreground">+15s from baseline</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-red-100 rounded-full">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">Red Signal</p>
                  <p className="text-2xl font-bold">30s</p>
                  <p className="text-xs text-muted-foreground">-10s from baseline</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">Current Prioritization</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center p-2 bg-blue-50 rounded-lg">
                  <EvStation className="h-5 w-5 text-blue-600 mb-1" />
                  <span className="text-xs font-medium">EVs</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-green-50 rounded-lg">
                  <Truck className="h-5 w-5 text-green-600 mb-1" />
                  <span className="text-xs font-medium">Public Transit</span>
                </div>
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                  <Car className="h-5 w-5 text-gray-600 mb-1" />
                  <span className="text-xs font-medium">Carpools</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Decision Factors</CardTitle>
          <CardDescription>Current factors influencing traffic decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Gauge className="h-5 w-5 text-red-500" />
                <span className="text-sm">AQI Level</span>
              </div>
              <Badge className="bg-red-500">High Impact</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Car className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Traffic Density</span>
              </div>
              <Badge className="bg-orange-500">Medium Impact</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Cpu className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Historical Patterns</span>
              </div>
              <Badge className="bg-blue-500">Medium Impact</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-500" />
                <span className="text-sm">Time of Day</span>
              </div>
              <Badge className="bg-green-500">Low Impact</Badge>
            </div>

            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium mb-2">AI Recommendation</h4>
              <p className="text-sm">
                Based on current AQI of 215 and congestion level of 68%, the AI recommends extending green signal
                duration by 15 seconds for east-west traffic to reduce idling emissions at ITO Junction.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

