export interface MetricItem {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  icon: string; // FontAwesome class
  colorClass?: string;
  subtext?: string;
}

export interface ChartDataPoint {
  day: string;
  value: number;
}

export interface SourceDataPoint {
  name: string;
  value: number;
  color: string;
}