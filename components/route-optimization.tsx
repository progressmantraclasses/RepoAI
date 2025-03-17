"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Car, Leaf, MapPin, Timer } from "lucide-react"
import { RouteMap } from "@/components/route-map"

export default function RouteOptimization() {
  const [prioritizeAQI, setPrioritizeAQI] = useState(true)
  const [balanceFactors, setBalanceFactors] = useState(70)

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Green Route Optimization</CardTitle>
          <CardDescription>AI-powered route suggestions that minimize pollution exposure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="start-location">Start Location</Label>
              <div className="flex space-x-2">
                <Input id="start-location" placeholder="Enter start location" defaultValue="Connaught Place" />
                <Button size="icon" variant="outline">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="destination">Destination</Label>
              <div className="flex space-x-2">
                <Input id="destination" placeholder="Enter destination" defaultValue="Nehru Place" />
                <Button size="icon" variant="outline">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="transport-mode">Transport Mode</Label>
              <Select defaultValue="car">
                <SelectTrigger id="transport-mode">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="public">Public Transport</SelectItem>
                  <SelectItem value="bike">Bicycle</SelectItem>
                  <SelectItem value="walk">Walking</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-type">User Type</Label>
              <Select defaultValue="regular">
                <SelectTrigger id="user-type">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular User</SelectItem>
                  <SelectItem value="sensitive">Sensitive Group (Asthma)</SelectItem>
                  <SelectItem value="elderly">Elderly</SelectItem>
                  <SelectItem value="child">Child</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="prioritize-aqi">Prioritize Air Quality over Distance</Label>
              <Switch id="prioritize-aqi" checked={prioritizeAQI} onCheckedChange={setPrioritizeAQI} />
            </div>
            <p className="text-xs text-muted-foreground">
              When enabled, routes with lower pollution exposure will be preferred even if they are longer.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Balance: AQI vs Distance</Label>
              <Badge variant="outline">
                {balanceFactors}% AQI / {100 - balanceFactors}% Distance
              </Badge>
            </div>
            <Slider
              defaultValue={[balanceFactors]}
              max={100}
              step={1}
              onValueChange={(value) => setBalanceFactors(value[0])}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Optimize Route</Button>
        </CardFooter>
      </Card>

      <Card className="h-[500px]">
        <CardHeader>
          <CardTitle>Route Preview</CardTitle>
          <CardDescription>See the optimized route on the map</CardDescription>
        </CardHeader>
        <CardContent>
          <RouteMap />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Route Details</CardTitle>
          <CardDescription>Detailed information about the optimized route</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center space-x-4">
            <Car className="h-4 w-4 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Mode of Transport</p>
              <p className="text-xs text-muted-foreground">Car</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Timer className="h-4 w-4 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Estimated Time</p>
              <p className="text-xs text-muted-foreground">25 minutes</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">Distance</p>
              <p className="text-xs text-muted-foreground">12.5 km</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Leaf className="h-4 w-4 text-muted-foreground" />
            <div className="space-y-1">
              <p className="text-sm font-medium">AQI Exposure</p>
              <p className="text-xs text-muted-foreground">Low</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

