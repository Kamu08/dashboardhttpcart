import React from 'react';
import StatisticsCard from './StatisticsCard';
import LineChartComponent from './LineChartComponent';
import PieChartComponent from './PieChartComponent';
import BarChartComponent from './BarChartComponent';
import ProtoBarChartComponent from './ProtoBarChartComponent';
import TopIPsTable from './TopIPsTable';
import { getProcessedData } from '../data';

const Dashboard = () => {
  const { severityCounts, categoryCounts, alertsByTime, sourceIPCounts, destPortCounts, protoCounts, totalAlerts } = getProcessedData();

  const severityData = Object.keys(severityCounts).map(severity => ({
    name: `Severity ${severity}`,
    value: severityCounts[severity],
  }));

  const categoryData = Object.keys(categoryCounts).map(category => ({
    name: category,
    value: categoryCounts[category],
  }));

  const alertsByTimeData = Object.keys(alertsByTime).map(time => ({
    name: `${time}:00`,
    value: alertsByTime[time],
  }));

  const topIPs = Object.keys(sourceIPCounts).map(ip => ({
    ip,
    count: sourceIPCounts[ip],
  })).sort((a, b) => b.count - a.count).slice(0, 5);

  const destPortData = Object.keys(destPortCounts).map(port => ({
    port: port,
    count: destPortCounts[port],
  }));

  const protoData = Object.keys(protoCounts).map(proto => ({
    proto: proto,
    count: protoCounts[proto],
  }));

  return (
    <div className="p-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StatisticsCard title="Total Alerts" value={totalAlerts} description="The total number of security alerts generated." />
      <PieChartComponent data={severityData} title="Alerts by Severity" description="Distribution of alerts based on their severity levels." />
      <PieChartComponent data={categoryData} title="Alerts by Category" description="Distribution of alerts based on their categories." />
      <LineChartComponent data={alertsByTimeData} title="Alerts Over Time" description="Number of alerts generated over time (by hour)." />
      <TopIPsTable data={topIPs} title="Top Source IPs" description="Top source IPs generating the most alerts." />
     
      <ProtoBarChartComponent data={protoData} title="Alerts by Protocol" description="Number of alerts received by each protocol." />
      <BarChartComponent data={destPortData} title="Alerts by Destination Port" description="Number of alerts received by each destination port." />
    </div>
  );
};

export default Dashboard;
