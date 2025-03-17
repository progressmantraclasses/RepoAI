"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, ArrowDown, ArrowUp, Info, Wind } from "lucide-react"
import { AqiMap } from "@/components/aqi-map"
import { AqiChart } from "@/components/aqi-chart"

export default function Dashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current AQI</CardTitle>
          <Badge className="bg-red-500">Unhealthy</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">215</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 inline-flex items-center">
              <ArrowUp className="mr-1 h-4 w-4" />
              12%
            </span>{" "}
            from yesterday
          </p>
          <Progress value={43} className="h-2 mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">PM2.5 Level</CardTitle>
          <Badge className="bg-orange-500">High</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">130 µg/m³</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 inline-flex items-center">
              <ArrowUp className="mr-1 h-4 w-4" />
              8%
            </span>{" "}
            from yesterday
          </p>
          <Progress value={65} className="h-2 mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Traffic Density</CardTitle>
          <Badge className="bg-yellow-500">Moderate</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68%</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-green-500 inline-flex items-center">
              <ArrowDown className="mr-1 h-4 w-4" />
              4%
            </span>{" "}
            from yesterday
          </p>
          <Progress value={68} className="h-2 mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Forecast (72h)</CardTitle>
          <Badge className="bg-amber-500">Worsening</Badge>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">245</div>
          <p className="text-xs text-muted-foreground">
            <span className="text-red-500 inline-flex items-center">
              <ArrowUp className="mr-1 h-4 w-4" />
              14%
            </span>{" "}
            from current
          </p>
          <Progress value={49} className="h-2 mt-2" />
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Air Quality Index Map</CardTitle>
          <CardDescription>Real-time AQI levels across the city</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <AqiMap />
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>AQI Trend Analysis</CardTitle>
          <CardDescription>Last 7 days with 72-hour prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <AqiChart />
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Critical Alerts</CardTitle>
          <CardDescription>Current pollution and traffic warnings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Critical AQI Level</AlertTitle>
              <AlertDescription>
                AQI exceeds 200 in ITO and Anand Vihar areas. Activating emergency traffic protocols.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>School Advisory</AlertTitle>
              <AlertDescription>
                Schools in East Delhi advised to suspend outdoor activities for next 48 hours.
              </AlertDescription>
            </Alert>
            <Alert>
              <Wind className="h-4 w-4" />
              <AlertTitle>Weather Impact</AlertTitle>
              <AlertDescription>
                Low wind speed (3 km/h) expected to worsen pollution levels in next 24 hours.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

