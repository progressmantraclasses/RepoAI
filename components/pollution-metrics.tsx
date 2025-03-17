"use client"

import { useState } from "react"
import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Wind, Droplet, ThermometerSun, Activity, TreesIcon as Lungs } from "lucide-react"
import { cn } from "@/lib/utils"

interface PollutantMetric {
  name: string
  value: number
  unit: string
  icon: React.ReactNode
  status: "good" | "moderate" | "unhealthy"
  description: string
}

const pollutants: PollutantMetric[] = [
  {
    name: "Particulate Matter (PM2.5)",
    value: 63,
    unit: "μg/m³",
    icon: <Cloud className="h-6 w-6" />,
    status: "moderate",
    description: "Fine inhalable particles with diameters of 2.5 micrometers or smaller",
  },
  {
    name: "Particulate Matter (PM10)",
    value: 160,
    unit: "μg/m³",
    icon: <Wind className="h-6 w-6" />,
    status: "unhealthy",
    description: "Inhalable particles with diameters of 10 micrometers or smaller",
  },
  {
    name: "Carbon Monoxide (CO)",
    value: 776,
    unit: "ppb",
    icon: <Activity className="h-6 w-6" />,
    status: "moderate",
    description: "Colorless, odorless gas emitted from combustion processes",
  },
  {
    name: "Sulfur Dioxide (SO2)",
    value: 3,
    unit: "ppb",
    icon: <ThermometerSun className="h-6 w-6" />,
    status: "good",
    description: "Gas primarily produced from fossil fuel combustion",
  },
  {
    name: "Nitrogen Dioxide (NO2)",
    value: 23,
    unit: "ppb",
    icon: <Droplet className="h-6 w-6" />,
    status: "good",
    description: "Reddish-brown gas primarily from vehicle emissions",
  },
  {
    name: "Ozone (O3)",
    value: 6,
    unit: "ppb",
    icon: <Lungs className="h-6 w-6" />,
    status: "good",
    description: "Ground-level ozone created by chemical reactions",
  },
]

const healthConditions = [
  {
    name: "Asthma",
    risks: "High risk for asthma symptoms. Take necessary precautions.",
    dos: ["Stay indoors with windows closed", "Use air purifiers", "Take prescribed medications"],
    donts: ["Avoid outdoor activities", "Don't exercise outside", "Avoid exposure to irritants"],
  },
  {
    name: "Heart Issues",
    risks: "Increased risk of cardiovascular events. Monitor your condition closely.",
    dos: ["Take medications as prescribed", "Stay in air-conditioned environments", "Limit physical exertion"],
    donts: [
      "Avoid prolonged exposure to polluted air",
      "Don't ignore any chest discomfort",
      "Avoid smoking or secondhand smoke",
    ],
  },
  {
    name: "Allergies",
    risks: "Higher likelihood of allergy flare-ups. Be prepared for symptoms.",
    dos: ["Use air filters at home", "Wear a mask when outdoors", "Keep windows closed"],
    donts: ["Don't hang laundry outside", "Avoid peak pollen times", "Don't touch your face frequently"],
  },
  {
    name: "Sinus",
    risks: "Increased chance of sinus irritation and infections.",
    dos: ["Use a saline nasal spray", "Stay hydrated", "Use a humidifier indoors"],
    donts: ["Avoid known irritants", "Don't use harsh nasal sprays", "Avoid sudden temperature changes"],
  },
  {
    name: "Cold/Flu",
    risks: "Higher susceptibility to respiratory infections.",
    dos: ["Boost your immune system", "Practice good hygiene", "Get enough rest"],
    donts: ["Don't ignore worsening symptoms", "Avoid crowded places", "Don't share personal items"],
  },
  {
    name: "Chronic (COPD)",
    risks: "Severe risk of COPD exacerbations. Extreme caution advised.",
    dos: ["Follow your action plan", "Use oxygen as prescribed", "Monitor oxygen levels"],
    donts: ["Don't skip medications", "Avoid all smoke exposure", "Don't ignore increasing breathlessness"],
  },
]

export function PollutionMetrics() {
  const [selectedCondition, setSelectedCondition] = useState(healthConditions[0])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pollutants.map((pollutant) => (
          <Card key={pollutant.name} className="relative overflow-hidden">
            <div
              className={cn(
                "absolute left-0 top-0 h-full w-1",
                pollutant.status === "good" && "bg-green-500",
                pollutant.status === "moderate" && "bg-yellow-500",
                pollutant.status === "unhealthy" && "bg-red-500",
              )}
            />
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div
                  className={cn(
                    "rounded-lg p-2",
                    pollutant.status === "good" && "bg-green-100 text-green-700",
                    pollutant.status === "moderate" && "bg-yellow-100 text-yellow-700",
                    pollutant.status === "unhealthy" && "bg-red-100 text-red-700",
                  )}
                >
                  {pollutant.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{pollutant.name}</p>
                  <p className="text-2xl font-bold">
                    {pollutant.value}
                    <span className="text-sm font-normal text-muted-foreground"> {pollutant.unit}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Prevent Health Problems: Understand Your Risks</h3>
        <div className="space-y-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {healthConditions.map((condition) => (
              <button
                key={condition.name}
                onClick={() => setSelectedCondition(condition)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap",
                  selectedCondition.name === condition.name
                    ? "bg-blue-100 text-blue-700"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {condition.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-red-900">High Risk Alert</h4>
              <p className="text-red-700">{selectedCondition.risks}</p>
              <div className="space-y-2">
                <p className="font-medium text-red-900">Do's:</p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  {selectedCondition.dos.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-red-900">Don'ts:</p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  {selectedCondition.donts.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-blue-900">Preventive Measures</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-blue-700" />
                  <p className="text-blue-700">Monitor your symptoms closely</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Lungs className="h-5 w-5 text-blue-700" />
                  <p className="text-blue-700">Keep necessary medications handy</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="h-5 w-5 text-blue-700" />
                  <p className="text-blue-700">Use air quality forecasts to plan activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

