"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, MapPin, Navigation, AlertTriangle, Clock } from "lucide-react"

export function CitizenAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Citizen Alerts & Routes</CardTitle>
        <CardDescription>Real-time notifications & green routes</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="alerts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="routes">Green Routes</TabsTrigger>
          </TabsList>
          <TabsContent value="alerts" className="space-y-4">
            <div className="space-y-3">
              <AlertItem
                title="High Pollution Alert"
                description="AQI exceeds 200 in Anand Vihar. Avoid outdoor activities if possible."
                time="15 min ago"
                type="warning"
              />
              <AlertItem
                title="School Closure Recommendation"
                description="Schools in East Delhi advised to consider online classes tomorrow."
                time="1 hour ago"
                type="info"
              />
              <AlertItem
                title="Traffic Diversion"
                description="ITO junction congested. Alternative routes suggested."
                time="2 hours ago"
                type="info"
              />
            </div>
            <Button variant="outline" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Manage Alert Preferences
            </Button>
          </TabsContent>
          <TabsContent value="routes" className="space-y-4">
            <div className="space-y-3">
              <RouteItem
                from="Connaught Place"
                to="Noida Sector 62"
                aqi={185}
                distance="18.5 km"
                time="45 min"
                recommended={true}
              />
              <RouteItem
                from="Connaught Place"
                to="Noida Sector 62"
                aqi={240}
                distance="15.2 km"
                time="35 min"
                recommended={false}
              />
            </div>
            <div className="text-xs text-muted-foreground text-center">
              Routes optimized for minimal pollution exposure
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function AlertItem({
  title,
  description,
  time,
  type = "warning",
}: {
  title: string
  description: string
  time: string
  type: "warning" | "info" | "success"
}) {
  return (
    <div className="rounded-lg border p-3 space-y-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {type === "warning" && <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />}
          {type === "info" && <Bell className="h-4 w-4 text-blue-500 mr-2" />}
          {type === "success" && <Bell className="h-4 w-4 text-green-500 mr-2" />}
          <div className="font-medium text-sm">{title}</div>
        </div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="h-3 w-3 mr-1" />
          {time}
        </div>
      </div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  )
}

function RouteItem({
  from,
  to,
  aqi,
  distance,
  time,
  recommended,
}: {
  from: string
  to: string
  aqi: number
  distance: string
  time: string
  recommended: boolean
}) {
  return (
    <div
      className={`rounded-lg border p-3 space-y-2 ${recommended ? "border-green-500/50 bg-green-50 dark:bg-green-950/20" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
          <div className="text-sm">
            <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span>
          </div>
        </div>
        {recommended && (
          <Badge
            variant="outline"
            className="text-xs bg-green-100 dark:bg-green-900 border-green-200 dark:border-green-800"
          >
            Recommended
          </Badge>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="text-xs">
          <div className="text-muted-foreground">AQI Exposure</div>
          <div
            className={`font-medium ${aqi > 200 ? "text-red-500" : aqi > 150 ? "text-amber-500" : "text-green-500"}`}
          >
            {aqi}
          </div>
        </div>
        <div className="text-xs">
          <div className="text-muted-foreground">Distance</div>
          <div className="font-medium">{distance}</div>
        </div>
        <div className="text-xs">
          <div className="text-muted-foreground">Time</div>
          <div className="font-medium">{time}</div>
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-full text-xs h-8">
        <Navigation className="h-3 w-3 mr-1" />
        Navigate
      </Button>
    </div>
  )
}

