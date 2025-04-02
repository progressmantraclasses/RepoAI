// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card.jsx"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs.jsx"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select.jsx"
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts"

// const monthlyData = [
//   { month: "Jan", AQI: 180, PM25: 120, NO2: 85, O3: 52 },
//   { month: "Feb", AQI: 200, PM25: 130, NO2: 90, O3: 48 },
//   { month: "Mar", AQI: 190, PM25: 125, NO2: 88, O3: 50 },
//   { month: "Apr", AQI: 170, PM25: 110, NO2: 80, O3: 55 },
//   { month: "May", AQI: 160, PM25: 100, NO2: 75, O3: 60 },
//   { month: "Jun", AQI: 150, PM25: 90, NO2: 70, O3: 65 },
//   { month: "Jul", AQI: 140, PM25: 85, NO2: 65, O3: 58 },
//   { month: "Aug", AQI: 130, PM25: 80, NO2: 60, O3: 54 },
//   { month: "Sep", AQI: 150, PM25: 95, NO2: 72, O3: 56 },
//   { month: "Oct", AQI: 180, PM25: 115, NO2: 82, O3: 50 },
//   { month: "Nov", AQI: 220, PM25: 140, NO2: 95, O3: 45 },
//   { month: "Dec", AQI: 210, PM25: 135, NO2: 92, O3: 48 },
// ]

// const locationComparison = [
//   { location: "ITO", AQI: 235, vehicular: 60, industrial: 20, construction: 20 },
//   { location: "Anand Vihar", AQI: 248, vehicular: 40, industrial: 40, construction: 20 },
//   { location: "Dwarka", AQI: 180, vehicular: 50, industrial: 10, construction: 40 },
//   { location: "CP", AQI: 205, vehicular: 70, industrial: 10, construction: 20 },
//   { location: "Nehru Place", AQI: 195, vehicular: 55, industrial: 15, construction: 30 },
// ]

// export function AirQualityTrends() {
//   return (
//     <Card className="col-span-2">
//       <CardHeader>
//         <div className="flex items-center justify-between">
//           <div>
//             <CardTitle>Air Quality Analysis</CardTitle>
//             <CardDescription>Comprehensive pollution trends and comparisons</CardDescription>
//           </div>
//           <Select defaultValue="year">
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select period" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="year">Past Year</SelectItem>
//               <SelectItem value="6months">Past 6 Months</SelectItem>
//               <SelectItem value="3months">Past 3 Months</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <Tabs defaultValue="trends" className="space-y-4">
//           <TabsList>
//             <TabsTrigger value="trends">Pollution Trends</TabsTrigger>
//             <TabsTrigger value="comparison">Location Comparison</TabsTrigger>
//           </TabsList>

//           <TabsContent value="trends" className="space-y-4">
//             <div className="grid md:grid-cols-2 gap-4">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-sm">AQI Trend Analysis</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="h-[300px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <LineChart data={monthlyData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="AQI" stroke="#8884d8" activeDot={{ r: 8 }} />
//                       </LineChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-sm">Pollutant Comparison</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="h-[300px]">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <LineChart data={monthlyData}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="PM25" stroke="#ff7300" />
//                         <Line type="monotone" dataKey="NO2" stroke="#82ca9d" />
//                         <Line type="monotone" dataKey="O3" stroke="#8884d8" />
//                       </LineChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </TabsContent>

//           <TabsContent value="comparison">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-sm">Location-wise Pollution Sources</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-[400px]">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={locationComparison}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="location" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="vehicular" stackId="a" fill="#8884d8" name="Vehicular" />
//                       <Bar dataKey="industrial" stackId="a" fill="#82ca9d" name="Industrial" />
//                       <Bar dataKey="construction" stackId="a" fill="#ffc658" name="Construction" />
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </CardContent>
//     </Card>
//   )
// }




"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card.jsx"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/Tabs.jsx"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select.jsx"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const monthlyData = [
  { month: "Jan", AQI: 180, PM25: 120, NO2: 85, O3: 52 },
  { month: "Feb", AQI: 200, PM25: 130, NO2: 90, O3: 48 },
  { month: "Mar", AQI: 190, PM25: 125, NO2: 88, O3: 50 },
  { month: "Apr", AQI: 170, PM25: 110, NO2: 80, O3: 55 },
  { month: "May", AQI: 160, PM25: 100, NO2: 75, O3: 60 },
  { month: "Jun", AQI: 150, PM25: 90, NO2: 70, O3: 65 },
  { month: "Jul", AQI: 140, PM25: 85, NO2: 65, O3: 58 },
  { month: "Aug", AQI: 130, PM25: 80, NO2: 60, O3: 54 },
  { month: "Sep", AQI: 150, PM25: 95, NO2: 72, O3: 56 },
  { month: "Oct", AQI: 180, PM25: 115, NO2: 82, O3: 50 },
  { month: "Nov", AQI: 220, PM25: 140, NO2: 95, O3: 45 },
  { month: "Dec", AQI: 210, PM25: 135, NO2: 92, O3: 48 },
]

const locationComparison = [
  { location: "ITO", AQI: 235, vehicular: 60, industrial: 20, construction: 20 },
  { location: "Anand Vihar", AQI: 248, vehicular: 40, industrial: 40, construction: 20 },
  { location: "Dwarka", AQI: 180, vehicular: 50, industrial: 10, construction: 40 },
  { location: "CP", AQI: 205, vehicular: 70, industrial: 10, construction: 20 },
  { location: "Nehru Place", AQI: 195, vehicular: 55, industrial: 15, construction: 30 },
]

export function AirQualityTrends() {
  return (
    <div>
    <Card className="col-span-2 bg-[#0a0a0a] border-gray-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Air Quality Analysis</CardTitle>
            <CardDescription className="text-gray-400">Comprehensive pollution trends and comparisons</CardDescription>
          </div>
          <Select defaultValue="year">
            <SelectTrigger className="w-[180px] bg-gray-900 text-white border-gray-700">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-gray-700 text-white">
              <SelectItem className="hover:bg-gray-800" value="year">Past Year</SelectItem>
              <SelectItem className="hover:bg-gray-800" value="6months">Past 6 Months</SelectItem>
              <SelectItem className="hover:bg-gray-800" value="3months">Past 3 Months</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trends" className="space-y-4">
          <TabsList className="bg-gray-900 border border-gray-800">
            <TabsTrigger className="text-white data-[state=active]:bg-gray-800 data-[state=active]:text-white" value="trends">Pollution Trends</TabsTrigger>
            <TabsTrigger className="text-white data-[state=active]:bg-gray-800 data-[state=active]:text-white" value="comparison">Location Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-sm text-white">AQI Trend Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#FFFFFF' }}
                          itemStyle={{ color: '#FFFFFF' }}
                        />
                        <Legend wrapperStyle={{ color: '#FFFFFF' }} />
                        <Line type="monotone" dataKey="AQI" stroke="#8884d8" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-sm text-white">Pollutant Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#FFFFFF' }}
                          itemStyle={{ color: '#FFFFFF' }}
                        />
                        <Legend wrapperStyle={{ color: '#FFFFFF' }} />
                        <Line type="monotone" dataKey="PM25" stroke="#ff7300" />
                        <Line type="monotone" dataKey="NO2" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="O3" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-sm text-white">Location-wise Pollution Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={locationComparison}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="location" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111827', borderColor: '#374151', color: '#FFFFFF' }}
                        itemStyle={{ color: '#FFFFFF' }}
                      />
                      <Legend wrapperStyle={{ color: '#FFFFFF' }} />
                      <Bar dataKey="vehicular" stackId="a" fill="#8884d8" name="Vehicular" />
                      <Bar dataKey="industrial" stackId="a" fill="#82ca9d" name="Industrial" />
                      <Bar dataKey="construction" stackId="a" fill="#ffc658" name="Construction" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>

    </div>
  )
}