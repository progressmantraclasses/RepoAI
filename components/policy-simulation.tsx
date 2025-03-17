"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, RotateCcw } from "lucide-react"

export function PolicySimulation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policy Simulation & Public Awareness</CardTitle>
        <CardDescription>Simulate policy impacts and awareness campaigns</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="simulation" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simulation">Policy Simulation</TabsTrigger>
            <TabsTrigger value="awareness">Public Awareness</TabsTrigger>
          </TabsList>
          <TabsContent value="simulation" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Policy Type</Label>
                  <Select defaultValue="odd-even">
                    <SelectTrigger>
                      <SelectValue placeholder="Select policy" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="odd-even">Odd-Even Vehicle Scheme</SelectItem>
                      <SelectItem value="industrial">Industrial Emission Caps</SelectItem>
                      <SelectItem value="public-transport">Public Transport Incentives</SelectItem>
                      <SelectItem value="construction">Construction Dust Control</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Implementation Intensity</Label>
                    <span className="text-sm">65%</span>
                  </div>
                  <Slider defaultValue={[65]} max={100} step={5} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Duration (Days)</Label>
                    <span className="text-sm">14</span>
                  </div>
                  <Slider defaultValue={[14]} max={30} step={1} />
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Run Simulation
                  </Button>
                  <Button variant="outline">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-medium">Predicted Impact</div>
                <div className="space-y-3">
                  <ImpactMetric name="AQI Reduction" value={-18.5} unit="%" positive={true} />
                  <ImpactMetric name="Traffic Congestion" value={-12.3} unit="%" positive={true} />
                  <ImpactMetric name="Economic Impact" value={-2.1} unit="%" positive={false} />
                  <ImpactMetric name="Public Health Benefit" value={+8.7} unit="%" positive={true} />
                </div>
                <div className="text-xs text-muted-foreground text-center mt-2">
                  Based on historical data and AI prediction models
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="awareness" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Campaign Type</Label>
                  <Select defaultValue="schools">
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="schools">School Education Program</SelectItem>
                      <SelectItem value="community">Community Workshops</SelectItem>
                      <SelectItem value="digital">Digital Media Campaign</SelectItem>
                      <SelectItem value="incentives">Green Behavior Incentives</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Budget Allocation</Label>
                    <span className="text-sm">₹25L</span>
                  </div>
                  <Slider defaultValue={[25]} max={100} step={5} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Campaign Duration (Weeks)</Label>
                    <span className="text-sm">8</span>
                  </div>
                  <Slider defaultValue={[8]} max={52} step={1} />
                </div>

                <Button className="w-full">Generate Campaign Strategy</Button>
              </div>

              <div className="space-y-4">
                <div className="text-sm font-medium">Projected Outcomes</div>
                <div className="space-y-3">
                  <ImpactMetric name="Public Awareness" value={+32.5} unit="%" positive={true} />
                  <ImpactMetric name="Behavior Change" value={+18.7} unit="%" positive={true} />
                  <ImpactMetric name="Pollution Reduction" value={+7.2} unit="%" positive={true} />
                  <ImpactMetric name="ROI (Cost-Benefit)" value={+3.5} unit="x" positive={true} />
                </div>
                <div className="text-xs text-muted-foreground text-center mt-2">
                  Based on similar campaign performance and AI models
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function ImpactMetric({
  name,
  value,
  unit,
  positive,
}: {
  name: string
  value: number
  unit: string
  positive: boolean
}) {
  // For economic impact, negative is bad even though the number is negative
  const isPositiveImpact = name === "Economic Impact" ? !positive : positive

  return (
    <div className="flex items-center justify-between">
      <div className="text-sm">{name}</div>
      <div className={`font-medium ${isPositiveImpact ? "text-green-500" : "text-red-500"}`}>
        {value > 0 ? "+" : ""}
        {value}
        {unit}
      </div>
    </div>
  )
}

