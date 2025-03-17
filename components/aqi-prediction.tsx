"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const predictionData = [
  { time: "Now", AQI: 225, status: "Very Unhealthy" },
  { time: "+12h", AQI: 240, status: "Very Unhealthy" },
  { time: "+24h", AQI: 210, status: "Very Unhealthy" },
  { time: "+36h", AQI: 180, status: "Unhealthy" },
  { time: "+48h", AQI: 160, status: "Unhealthy" },
  { time: "+60h", AQI: 140, status: "Unhealthy for Sensitive Groups" },
  { time: "+72h", AQI: 130, status: "Unhealthy for Sensitive Groups" },
]

const getStatusColor = (aqi: number) => {
  if (aqi > 300) return "bg-purple-500 text-white"
  if (aqi > 200) return "bg-red-500 text-white"
  if (aqi > 150) return "bg-orange-500 text-white"
  if (aqi > 100) return "bg-yellow-500 text-black"
  if (aqi > 50) return "bg-green-500 text-white"
  return "bg-blue-500 text-white"
}

export function AQIPrediction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>72-Hour AQI Prediction</CardTitle>
        <CardDescription>Forecasted Air Quality Index for key areas in Delhi NCR</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={predictionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-background p-2 border rounded shadow">
                        <p className="font-bold">{data.time}</p>
                        <p>AQI: {data.AQI}</p>
                        <Badge className={getStatusColor(data.AQI)}>{data.status}</Badge>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="AQI" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex justify-between">
          {predictionData.map((data, index) => (
            <div key={index} className="text-center">
              <p className="text-sm font-medium">{data.time}</p>
              <Badge className={getStatusColor(data.AQI)}>{data.AQI}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

