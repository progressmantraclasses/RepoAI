"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function PredictiveModels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictive Models</CardTitle>
        <CardDescription>AI forecasting & analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pollution" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pollution">Pollution</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
          </TabsList>
          <TabsContent value="pollution" className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">72-Hour AQI Forecast</div>
              <div className="h-[140px] rounded-md border bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Simple chart visualization */}
                  <div className="w-full h-full flex items-end">
                    <div className="w-1/6 h-[40%] bg-yellow-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[50%] bg-yellow-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[65%] bg-orange-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[80%] bg-orange-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[70%] bg-orange-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[60%] bg-yellow-500/70 mx-0.5"></div>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[10px] px-2 text-muted-foreground">
                    <span>Now</span>
                    <span>+24h</span>
                    <span>+48h</span>
                    <span>+72h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Prediction Accuracy</div>
                <Badge variant="outline" className="text-xs">
                  ±12% Error
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <PredictionMetric name="PM2.5" accuracy={88} />
                <PredictionMetric name="NO₂" accuracy={92} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="traffic" className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Traffic Congestion Forecast</div>
              <div className="h-[140px] rounded-md border bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Simple chart visualization */}
                  <div className="w-full h-full flex items-end">
                    <div className="w-1/6 h-[70%] bg-red-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[40%] bg-yellow-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[30%] bg-green-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[35%] bg-green-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[60%] bg-yellow-500/70 mx-0.5"></div>
                    <div className="w-1/6 h-[75%] bg-red-500/70 mx-0.5"></div>
                  </div>
                  <div className="absolute bottom-1 left-0 right-0 flex justify-between text-[10px] px-2 text-muted-foreground">
                    <span>8AM</span>
                    <span>12PM</span>
                    <span>4PM</span>
                    <span>8PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Traffic Prediction Accuracy</div>
                <Badge variant="outline" className="text-xs">
                  ±8% Error
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <PredictionMetric name="Rush Hour" accuracy={94} />
                <PredictionMetric name="Congestion" accuracy={91} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function PredictionMetric({ name, accuracy }: { name: string; accuracy: number }) {
  return (
    <div className="rounded-lg border p-2 text-center">
      <div className="text-xs text-muted-foreground">{name}</div>
      <div className="text-sm font-medium">{accuracy}% Accurate</div>
    </div>
  )
}

