"use client"

import { useState } from "react"
import { Bell, Home, Map, Settings } from "lucide-react"

export function MobileAppPreview() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="w-[280px] h-[560px] bg-white rounded-[36px] border-8 border-gray-800 overflow-hidden shadow-xl flex flex-col">
      {/* Status bar */}
      <div className="h-6 bg-gray-800 flex items-center justify-between px-4">
        <div className="text-white text-xs">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-80"></div>
        </div>
      </div>

      {/* App content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-red-500 text-white p-4">
          <div className="text-xs">Current Location</div>
          <div className="font-bold">ITO Junction, Delhi</div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <div className="text-3xl font-bold">235</div>
              <div className="text-xs">AQI - Very Unhealthy</div>
            </div>
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <div className="text-xs text-center">
                <div className="font-bold">PM2.5</div>
                <div>130</div>
                <div className="text-[10px]">µg/m³</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alert */}
        <div className="bg-red-100 p-3 border-l-4 border-red-500">
          <div className="text-xs font-bold text-red-800">EMERGENCY ALERT</div>
          <div className="text-xs text-red-800">AQI has reached VERY UNHEALTHY levels. Avoid outdoor activities.</div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          <div className="bg-white rounded-lg shadow p-3 border">
            <div className="text-xs font-bold">Health Recommendations</div>
            <ul className="text-xs mt-1 space-y-1">
              <li>• Wear N95 masks if going outside</li>
              <li>• Keep windows closed</li>
              <li>• Use air purifiers if available</li>
              <li>• Avoid strenuous activities</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-3 border">
            <div className="text-xs font-bold">Green Route Available</div>
            <div className="text-xs mt-1">
              A route with 35% lower pollution exposure is available for your commute to work.
            </div>
            <button className="mt-2 text-xs bg-green-500 text-white rounded px-2 py-1">View Route</button>
          </div>

          <div className="bg-white rounded-lg shadow p-3 border">
            <div className="text-xs font-bold">72-Hour Forecast</div>
            <div className="flex justify-between mt-2">
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Today</div>
                <div className="h-16 flex items-end justify-center">
                  <div className="w-6 bg-red-500 rounded-t" style={{ height: "80%" }}></div>
                </div>
                <div className="text-xs font-bold">235</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Tomorrow</div>
                <div className="h-16 flex items-end justify-center">
                  <div className="w-6 bg-red-600 rounded-t" style={{ height: "90%" }}></div>
                </div>
                <div className="text-xs font-bold">245</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Wed</div>
                <div className="h-16 flex items-end justify-center">
                  <div className="w-6 bg-red-500 rounded-t" style={{ height: "85%" }}></div>
                </div>
                <div className="text-xs font-bold">235</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Thu</div>
                <div className="h-16 flex items-end justify-center">
                  <div className="w-6 bg-orange-500 rounded-t" style={{ height: "70%" }}></div>
                </div>
                <div className="text-xs font-bold">195</div>
              </div>
              <div className="text-center">
                <div className="text-[10px] text-gray-500">Fri</div>
                <div className="h-16 flex items-end justify-center">
                  <div className="w-6 bg-orange-400 rounded-t" style={{ height: "60%" }}></div>
                </div>
                <div className="text-xs font-bold">175</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="h-14 bg-white border-t flex items-center justify-around">
          <button
            className={`flex flex-col items-center justify-center ${activeTab === "home" ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("home")}
          >
            <Home className="h-5 w-5" />
            <span className="text-[10px]">Home</span>
          </button>
          <button
            className={`flex flex-col items-center justify-center ${activeTab === "map" ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("map")}
          >
            <Map className="h-5 w-5" />
            <span className="text-[10px]">Map</span>
          </button>
          <button
            className={`flex flex-col items-center justify-center ${activeTab === "alerts" ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("alerts")}
          >
            <Bell className="h-5 w-5" />
            <span className="text-[10px]">Alerts</span>
          </button>
          <button
            className={`flex flex-col items-center justify-center ${activeTab === "settings" ? "text-red-500" : "text-gray-500"}`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-5 w-5" />
            <span className="text-[10px]">Settings</span>
          </button>
        </div>
      </div>
    </div>
  )
}

