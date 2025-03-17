"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { AlertCircle, BarChart4, CloudRain, Factory, Thermometer, Wind } from "lucide-react"
import { PredictionChart } from "@/components/prediction-chart"

export default function PredictiveModeling() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Predictive Environmental Modeling</CardTitle>
          <CardDescription>72-hour pollution forecast with ≤15% error margin</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="aqi" className="space-y-4">
            <TabsList>
              <TabsTrigger value="aqi">AQI Prediction</TabsTrigger>
              <TabsTrigger value="pm25">PM2.5 Levels</TabsTrigger>
              <TabsTrigger value="no2">NO₂ Levels</TabsTrigger>
            </TabsList>
            <TabsContent value="aqi" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">AQI Forecast</h3>
                  <p className="text-sm text-muted-foreground">Next 72 hours with confidence intervals</p>
                </div>
                <Select defaultValue="lstm">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lstm">LSTM Model</SelectItem>
                    <SelectItem value="xgboost">XGBoost Model</SelectItem>
                    <SelectItem value="randomforest">Random Forest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <PredictionChart type="aqi" />
            </TabsContent>
            <TabsContent value="pm25" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">PM2.5 Forecast</h3>
                  <p className="text-sm text-muted-foreground">Particulate matter prediction (µg/m³)</p>
                </div>
                <Select defaultValue="xgboost">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lstm">LSTM Model</SelectItem>
                    <SelectItem value="xgboost">XGBoost Model</SelectItem>
                    <SelectItem value="randomforest">Random Forest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <PredictionChart type="pm25" />
            </TabsContent>
            <TabsContent value="no2" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">NO₂ Forecast</h3>
                  <p className="text-sm text-muted-foreground">Nitrogen dioxide prediction (µg/m³)</p>
                </div>
                <Select defaultValue="randomforest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lstm">LSTM Model</SelectItem>
                    <SelectItem value="xgboost">XGBoost Model</SelectItem>
                    <SelectItem value="randomforest">Random Forest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <PredictionChart type="no2" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Model Performance</CardTitle>
            <CardDescription>Current prediction accuracy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>LSTM Model</Label>
                  <Badge className="bg-green-500">92% Accuracy</Badge>
                </div>
                <Slider value={[92]} min={0} max={100} step={1} disabled />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>XGBoost Model</Label>
                  <Badge className="bg-green-500">89% Accuracy</Badge>
                </div>
                <Slider value={[89]} min={0} max={100} step={1} disabled />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Random Forest</Label>
                  <Badge className="bg-green-500">87% Accuracy</Badge>
                </div>
                <Slider value={[87]} min={0} max={100} step={1} disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Input Factors</CardTitle>
            <CardDescription>Variables affecting predictions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Wind Speed</span>
                </div>
                <Badge variant="outline">3.2 km/h</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-5 w-5 text-red-500" />
                  <span className="text-sm">Temperature</span>
                </div>
                <Badge variant="outline">28°C</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CloudRain className="h-5 w-5 text-gray-500" />
                  <span className="text-sm">Humidity</span>
                </div>
                <Badge variant="outline">65%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Factory className="h-5 w-5 text-amber-500" />
                  <span className="text-sm">Industrial Activity</span>
                </div>
                <Badge variant="outline">High</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BarChart4 className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">Traffic Density</span>
                </div>
                <Badge variant="outline">68%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Pollution Hotspot Prediction</CardTitle>
          <CardDescription>Areas likely to experience critical AQI levels in next 72 hours</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-4 border-r pr-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="font-medium">ITO Junction</span>
                </div>
                <Badge className="bg-red-500">Critical</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Current AQI:</span>
                  <span className="font-medium">235</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Predicted Peak:</span>
                  <span className="font-medium">285</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Confidence:</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Peak Time:</span>
                  <span className="font-medium">Tomorrow, 9 AM</span>
                </div>
              </div>
              <div className="pt-2">
                <Button size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>

            <div className="space-y-4 border-r pr-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="font-medium">Anand Vihar</span>
                </div>
                <Badge className="bg-red-500">Critical</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Current AQI:</span>
                  <span className="font-medium">248</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Predicted Peak:</span>
                  <span className="font-medium">310</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Confidence:</span>
                  <span className="font-medium">94%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Peak Time:</span>
                  <span className="font-medium">Tomorrow, 10 AM</span>
                </div>
              </div>
              <div className="pt-2">
                <Button size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <span className="font-medium">Nehru Place</span>
                </div>
                <Badge className="bg-amber-500">Warning</Badge>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Current AQI:</span>
                  <span className="font-medium">182</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Predicted Peak:</span>
                  <span className="font-medium">225</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Confidence:</span>
                  <span className="font-medium">88%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Peak Time:</span>
                  <span className="font-medium">Tomorrow, 8 AM</span>
                </div>
              </div>
              <div className="pt-2">
                <Button size="sm" className="w-full">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

