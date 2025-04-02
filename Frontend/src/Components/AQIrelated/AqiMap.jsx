

import React, { useState } from "react";

export  function AirQualityMap() {
  const [hoveredCity, setHoveredCity] = useState(null);
  
  // Data for map markers
  const locations = [
    {
      id: 1,
      name: "ITO",
      aqi: 235,
      status: "Increasing",
      x: "40%",
      y: "30%",
      severity: "high", // high AQI
    },
    {
      id: 2,
      name: "Anand Vihar",
      aqi: 248,
      status: "Increasing",
      x: "27%",
      y: "45%",
      severity: "high",
    },
    {
      id: 3,
      name: "Connaught Place",
      aqi: 205,
      status: "Increasing",
      x: "53%",
      y: "50%",
      severity: "high",
    },
    {
      id: 4,
      name: "Nehru Place",
      aqi: 195,
      status: "Decreasing",
      x: "65%",
      y: "55%",
      severity: "medium",
    },
    {
      id: 5,
      name: "Gurugram",
      aqi: 210,
      status: "Stable",
      x: "28%",
      y: "70%",
      severity: "high",
    },
    {
      id: 6,
      name: "Ghaziabad",
      aqi: 240,
      status: "Increasing",
      x: "75%",
      y: "25%",
      severity: "high",
    },
    {
      id: 7,
      name: "Dwarka",
      aqi: 180,
      status: "Stable",
      x: "68%",
      y: "35%",
      severity: "medium",
    },
    {
      id: 8,
      name: "Noida",
      aqi: 220,
      status: "Increasing",
      x: "80%",
      y: "60%",
      severity: "high",
    },
  ];

  // Data for pollutant indicators
  const pollutants = [
    {
      id: 1,
      name: "Particulate Matter",
      subname: "(PM2.5)",
      value: "63",
      unit: "μg/m³",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      name: "Particulate Matter",
      subname: "(PM10)",
      value: "160",
      unit: "μg/m³",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" />
        </svg>
      ),
      color: "bg-red-100 text-red-800",
    },
    {
      id: 3,
      name: "Carbon Monoxide",
      subname: "(CO)",
      value: "776",
      unit: "ppb",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
        </svg>
      ),
      color: "bg-yellow-200 text-yellow-900",
    },
    {
      id: 4,
      name: "Sulfur Dioxide",
      subname: "(SO2)",
      value: "3",
      unit: "ppb",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z" />
        </svg>
      ),
      color: "bg-green-100 text-green-800",
    },
    {
      id: 5,
      name: "Nitrogen Dioxide",
      subname: "(NO2)",
      value: "23",
      unit: "ppb",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
        </svg>
      ),
      color: "bg-green-100 text-green-800",
    },
    {
      id: 6,
      name: "Ozone",
      subname: "(O3)",
      value: "6",
      unit: "ppb",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 3h6.93c-.06.33-.14.66-.24 1H13v-1zm0 3h6.24c-.22.35-.47.69-.74 1H13v-1zm0 3h3.65c-.9.36-1.87.61-2.91.69v-.69H13z" />
        </svg>
      ),
      color: "bg-green-100 text-green-800",
    },
  ];

  // Helper function to render status icon
  const renderStatusIcon = (status) => {
    if (status === "Increasing") {
      return <span className="text-red-500">↑</span>;
    } else if (status === "Decreasing") {
      return <span className="text-green-500">↓</span>;
    } else {
      return <span className="text-yellow-500">→</span>;
    }
  };

  // Function to handle hover effect
  const handleMouseEnter = (id) => {
    setHoveredCity(id);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  // CSS for blinking animation
  const blinkingStyle = `
    @keyframes blink {
      0% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.5); }
      100% { opacity: 0.5; transform: scale(1); }
    }
    .blinking {
      animation: blink 1.5s infinite;
    }
  `;

  return (
    <div className="bg-black text-white p-4 rounded-lg w-full max-w-6xl mx-auto">
      <style>{blinkingStyle}</style>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Air Quality Map</h1>
          <p className="text-gray-400">Real-time pollution levels across Delhi NCR</p>
        </div>
        <div className="bg-red-900 rounded-full px-3 py-1 text-white">
          AQI: 225
        </div>
      </div>

      {/* Map */}
      <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-indigo-900 w-full h-[500px] rounded-lg mb-4 overflow-hidden">
        {/* Map Markers */}
        {locations.map((location) => (
          <div
            key={location.id}
            className="absolute"
            style={{ left: location.x, top: location.y }}
            onMouseEnter={() => handleMouseEnter(location.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Marker dot with conditional blinking */}
            <div
              className={`w-3 h-3 rounded-full ${
                location.severity === "high" ? "bg-red-500" : "bg-orange-500"
              } shadow-lg shadow-red-500/50 mb-1 mx-auto ${
                hoveredCity === location.id ? "blinking" : ""
              }`}
            ></div>
            
            {/* Tooltip box */}
            <div className="bg-black bg-opacity-80 text-white rounded p-2 shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="text-center font-medium">{location.name}</div>
              <div className="text-center text-red-500 font-bold">
                AQI: {location.aqi}
              </div>
              <div className="text-center text-sm flex justify-center items-center">
                {renderStatusIcon(location.status)} {location.status}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pollutant Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {pollutants.map((pollutant) => (
          <div
            key={pollutant.id}
            className={`${pollutant.color} rounded-lg p-3 flex flex-col`}
          >
            <div className="flex items-center mb-1">
              <div className="p-2 rounded-lg bg-opacity-20 mr-2">
                {pollutant.icon}
              </div>
              <div>
                <div className="text-xs font-medium">{pollutant.name}</div>
                <div className="text-xs font-medium">{pollutant.subname}</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{pollutant.value}</span>
                  <span className="text-xs ml-1 mb-1">{pollutant.unit}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
// import { Badge } from "../ui/Badge";

// const locations = [
//   {
//     id: 'ito',
//     name: 'ITO',
//     latitude: '28.6289° N',
//     longitude: '77.2405° E',
//     description: 'Heavy traffic area, industrial pollution',
//     aqi: 225,
//     trend: '↑ Increasing',
//     status: 'Danger Zone',
//     pollutants: {
//       pm25: 63,
//       pm10: 160,
//       co: 776,
//       so2: 3,
//       no2: 23,
//       o3: 6
//     }
//   },
//   {
//     id: 'chandni',
//     name: 'Chandni Chowk',
//     latitude: '28.6556° N',
//     longitude: '77.2310° E',
//     description: 'Commercial area with dense traffic',
//     aqi: 240,
//     trend: '↑ Increasing',
//     pollutants: {
//       pm25: 72,
//       pm10: 185,
//       co: 820,
//       so2: 5,
//       no2: 28,
//       o3: 8
//     }
//   },
//   {
//     id: 'dwarka',
//     name: 'Dwarka',
//     latitude: '28.5925° N',
//     longitude: '77.0437° E',
//     description: 'Residential area with moderate traffic',
//     aqi: 180,
//     trend: '→ Stable',
//     pollutants: {
//       pm25: 45,
//       pm10: 120,
//       co: 450,
//       so2: 2,
//       no2: 15,
//       o3: 4
//     }
//   },
//   {
//     id: 'anand',
//     name: 'Anand Vihar',
//     latitude: '28.6505° N',
//     longitude: '77.3153° E',
//     description: 'Transport hub with high pollution',
//     aqi: 248,
//     trend: '↑ Increasing',
//     pollutants: {
//       pm25: 80,
//       pm10: 195,
//       co: 900,
//       so2: 6,
//       no2: 32,
//       o3: 10
//     }
//   },
//   {
//     id: 'cp',
//     name: 'Connaught Place',
//     latitude: '28.6315° N',
//     longitude: '77.2167° E',
//     description: 'Commercial center with heavy traffic',
//     aqi: 205,
//     trend: '↑ Increasing',
//     pollutants: {
//       pm25: 58,
//       pm10: 150,
//       co: 700,
//       so2: 4,
//       no2: 20,
//       o3: 7
//     }
//   },
//   {
//     id: 'nehru',
//     name: 'Nehru Place',
//     latitude: '28.5486° N',
//     longitude: '77.2519° E',
//     description: 'Commercial area with IT offices',
//     aqi: 195,
//     trend: '↓ Decreasing',
//     pollutants: {
//       pm25: 52,
//       pm10: 140,
//       co: 650,
//       so2: 3,
//       no2: 18,
//       o3: 5
//     }
//   },
//   {
//     id: 'gurgaon',
//     name: 'Gurgaon',
//     latitude: '28.4595° N',
//     longitude: '77.0266° E',
//     description: 'Corporate hub with moderate pollution',
//     aqi: 210,
//     trend: '→ Stable',
//     pollutants: {
//       pm25: 60,
//       pm10: 155,
//       co: 720,
//       so2: 4,
//       no2: 22,
//       o3: 6
//     }
//   }
// ];

// const getAqiStatus = (aqi) => {
//   if (aqi > 300) return { color: 'bg-purple-600', text: 'Hazardous' };
//   if (aqi > 200) return { color: 'bg-red-600', text: 'Very Unhealthy' };
//   if (aqi > 150) return { color: 'bg-orange-500', text: 'Unhealthy' };
//   if (aqi > 100) return { color: 'bg-yellow-500', text: 'Unhealthy for Sensitive Groups' };
//   if (aqi > 50) return { color: 'bg-green-500', text: 'Moderate' };
//   return { color: 'bg-blue-500', text: 'Good' };
// };

// const getTrendColor = (trend) => {
//   if (trend.includes('↑')) return 'text-red-500';
//   if (trend.includes('↓')) return 'text-green-500';
//   return 'text-yellow-500';
// };

// export function AirQualityMap() {
//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);

//   return (
//     <Card className="bg-[#0a0a0a] border-gray-800">
//       <CardHeader>
//         <CardTitle className="text-white">Air Quality Map</CardTitle>
//         <CardDescription className="text-gray-400">
//           Real-time pollution levels across Delhi NCR
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Map Area - Simplified representation */}
//           <div className="lg:col-span-2 bg-gray-900 rounded-lg border border-gray-800 p-4 h-[500px] relative">
//             {/* This would be your actual map component */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="relative w-full h-full">
//                 {/* Map dots representing locations */}
//                 {locations.map((loc) => (
//                   <button
//                     key={loc.id}
//                     onClick={() => setSelectedLocation(loc)}
//                     className={`absolute rounded-full w-8 h-8 flex items-center justify-center text-white font-bold
//                       ${selectedLocation.id === loc.id ? 'ring-4 ring-purple-500' : ''}
//                       ${getAqiStatus(loc.aqi).color}`}
//                     style={{
//                       left: `${Math.random() * 80 + 10}%`,
//                       top: `${Math.random() * 80 + 10}%`
//                     }}
//                   >
//                     {loc.name.charAt(0)}
//                   </button>
//                 ))}
//                 <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
//                   {/* Map legend would go here */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Location Details */}
//           <div className="space-y-6">
//             <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
//               <h3 className="text-xl font-bold text-white mb-2">{selectedLocation.name}</h3>
//               <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-4">
//                 <div>
//                   <p className="text-gray-400">Latitude:</p>
//                   <p>{selectedLocation.latitude}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400">Longitude:</p>
//                   <p>{selectedLocation.longitude}</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 mb-4">{selectedLocation.description}</p>
              
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-gray-400 text-sm">AQI</p>
//                   <div className="flex items-center gap-2">
//                     <Badge className={`text-white ${getAqiStatus(selectedLocation.aqi).color}`}>
//                       {selectedLocation.aqi}
//                     </Badge>
//                     <span className={getTrendColor(selectedLocation.trend)}>
//                       {selectedLocation.trend}
//                     </span>
//                   </div>
//                 </div>
//                 {selectedLocation.status && (
//                   <Badge className="bg-red-600 text-white">
//                     {selectedLocation.status}
//                   </Badge>
//                 )}
//               </div>
//             </div>

//             {/* Pollutant Levels */}
//             <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
//               <h3 className="text-lg font-bold text-white mb-4">Pollutant Levels</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Particulate Matter (PM2.5)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.pm25} µg/m³
//                   </Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Particulate Matter (PM10)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.pm10} µg/m³
//                   </Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Carbon Monoxide (CO)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.co} ppb
//                   </Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Sulfur Dioxide (SO2)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.so2} ppb
//                   </Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Nitrogen Dioxide (NO2)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.no2} ppb
//                   </Badge>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-gray-300">Ozone (O3)</span>
//                   <Badge className="bg-gray-800 text-white">
//                     {selectedLocation.pollutants.o3} ppb
//                   </Badge>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }