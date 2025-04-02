
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs.jsx"
import { Badge } from "../ui/Badge.jsx"

export function PollutionMap() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Air Quality Map</CardTitle>
            <CardDescription>Real-time pollution levels across Delhi</CardDescription>
          </div>
          <Badge variant={getAqiVariant(225)} className="text-xs">
            AQI: 225
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current" className="space-y-4">
          <TabsList>
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="forecast">72hr Forecast</TabsTrigger>
            <TabsTrigger value="historical">Historical</TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-4">
            <div className="h-[300px] rounded-md border bg-muted/30 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-green-500/20">
                  {/* Pollution hotspots */}
                  <div className="absolute top-[30%] left-[40%] w-16 h-16 rounded-full bg-red-500/40 blur-xl"></div>
                  <div className="absolute top-[50%] left-[20%] w-20 h-20 rounded-full bg-orange-500/40 blur-xl"></div>
                  <div className="absolute top-[70%] left-[60%] w-12 h-12 rounded-full bg-yellow-500/40 blur-xl"></div>
                  <div className="absolute top-[20%] left-[70%] w-24 h-24 rounded-full bg-red-600/40 blur-xl"></div>

                  {/* City landmarks */}
                  <div className="absolute top-[35%] left-[45%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[35%] left-[45%] text-xs font-bold ml-3">ITO</div>

                  <div className="absolute top-[55%] left-[25%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[55%] left-[25%] text-xs font-bold ml-3">Anand Vihar</div>

                  <div className="absolute top-[25%] left-[75%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[25%] left-[75%] text-xs font-bold ml-3">Dwarka</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <PollutantCard name="PM2.5" value={120} unit="μg/m³" limit={60} />
              <PollutantCard name="PM10" value={180} unit="μg/m³" limit={100} />
              <PollutantCard name="NO₂" value={85} unit="μg/m³" limit={80} />
              <PollutantCard name="O₃" value={52} unit="μg/m³" limit={100} />
            </div>
          </TabsContent>
          <TabsContent value="forecast" className="space-y-4">
            <div className="h-[300px] rounded-md border bg-muted/30 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 via-yellow-500/20 to-green-500/20">
                  {/* Forecasted pollution hotspots */}
                  <div className="absolute top-[25%] left-[35%] w-20 h-20 rounded-full bg-orange-500/40 blur-xl"></div>
                  <div className="absolute top-[45%] left-[25%] w-16 h-16 rounded-full bg-yellow-500/40 blur-xl"></div>
                  <div className="absolute top-[65%] left-[55%] w-14 h-14 rounded-full bg-yellow-500/40 blur-xl"></div>
                  <div className="absolute top-[15%] left-[65%] w-18 h-18 rounded-full bg-orange-600/40 blur-xl"></div>

                  {/* City landmarks */}
                  <div className="absolute top-[35%] left-[45%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[35%] left-[45%] text-xs font-bold ml-3">ITO</div>

                  <div className="absolute top-[55%] left-[25%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[55%] left-[25%] text-xs font-bold ml-3">Anand Vihar</div>

                  <div className="absolute top-[25%] left-[75%] w-2 h-2 bg-black dark:bg-white rounded-full"></div>
                  <div className="absolute top-[25%] left-[75%] text-xs font-bold ml-3">Dwarka</div>
                </div>
              </div>
            </div>
            <div className="text-center text-sm text-muted-foreground">Forecasted AQI: 195 (Unhealthy) in 72 hours</div>
          </TabsContent>
          <TabsContent value="historical" className="h-[350px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">Historical data visualization would appear here</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function PollutantCard({ name, value, unit, limit }) {
  const percentage = (value / limit) * 100
  const isExceeding = value > limit

  return (
    <div className="rounded-lg border p-2 text-center">
      <div className="text-sm font-medium">{name}</div>
      <div className={`text-lg font-bold ${isExceeding ? "text-red-500" : "text-green-500"}`}>
        {value} {unit}
      </div>
      <div className="text-xs text-muted-foreground">
        Limit: {limit} {unit}
      </div>
    </div>
  )
}

function getAqiVariant(aqi) {
  if (aqi <= 50) return "success"
  if (aqi <= 100) return "warning"
  if (aqi <= 150) return "warning"
  if (aqi <= 200) return "destructive"
  if (aqi <= 300) return "destructive"
  return "destructive"
}