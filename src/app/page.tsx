"use client";

import { Sidebar } from "@/components/sidebar";
import { DashboardHeader } from "@/components/dashboardHeader";
import MetricCardLayout from "@/components/metricCardLayout";
import Infoports from "@/components/infoports";

export default function Home() {
  return (
    <div className="flex h-full bg-gray-650 dark:bg-zinc-800">
      <Sidebar />
      <main className="flex-1 bg-gray-50 dark:bg-zinc-900 p-8">
        <DashboardHeader />
        <MetricCardLayout />
        <Infoports />
      </main>
    </div>
  );
}
