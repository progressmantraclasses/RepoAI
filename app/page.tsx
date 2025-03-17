import { DashboardHeader } from "@/components/dashboard-header"
import { PollutionMap } from "@/components/pollution-map"
import { TrafficControlPanel } from "@/components/traffic-control-panel"
import { PredictiveModels } from "@/components/predictive-models"
import { CitizenAlerts } from "@/components/citizen-alerts"
import { PolicySimulation } from "@/components/policy-simulation"
import { EnergyDistribution } from "@/components/energy-distribution"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Delhi Smart Traffic & Pollution Management</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Last updated: March 2, 2025 12:30 PM</span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <PollutionMap />
          <TrafficControlPanel />
          <PredictiveModels />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <CitizenAlerts />
          <EnergyDistribution />
        </div>

        <PolicySimulation />
      </main>
    </div>
  )
}

