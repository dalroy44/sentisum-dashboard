"use client";

import { MetricCard } from "@/components/metricCard";

export default function MetricCardLayout() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-2">
          <MetricCard
            metricId="1"
            metricName="Total Tickets"
            sourceDisplayName="Zendesk"
            currentValueText="1,245"
            isPercentSymbolNeeded={false}
            percentChangeValue={5.2}
            percentChangeText="200"
            color="green"
          />
          <MetricCard
            metricId="2"
            metricName="CSAT Score"
            sourceDisplayName="Survey"
            currentValueText="89%"
            isPercentSymbolNeeded={true}
            percentChangeValue={-1.1}
            percentChangeText="2%"
            color="red"
          />
          <MetricCard
            metricId="3"
            metricName="Avg. Response Time"
            sourceDisplayName="Zendesk"
            currentValueText="2h 15m"
            isPercentSymbolNeeded={false}
            percentChangeValue={-8.4}
            percentChangeText="30m"
            color="green"
          />
          <MetricCard
            metricId="4"
            metricName="NPS"
            sourceDisplayName="Survey"
            currentValueText="62"
            isPercentSymbolNeeded={false}
            percentChangeValue={3.0}
            percentChangeText="8"
            color="green"
          />
        </div>
  );
}
