"use client";

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import type { ContentBlock } from "@/lib/cases";

const CHART_COLORS = ["#101010", "rgba(16,16,16,0.4)"];

function ChartTooltip({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: Array<{ name: string; value: number; color: string }>;
    label?: string;
}) {
    if (!active || !payload?.length) return null;
    return (
        <div className="border border-[rgba(16,16,16,0.1)] bg-white px-4 py-3">
            {label && (
                <p className="text-[12px] text-[rgba(16,16,16,0.5)] mb-1">
                    {label}
                </p>
            )}
            {payload.map((p) => (
                <p
                    key={p.name}
                    className="text-[16px] font-semibold text-[#101010]"
                >
                    {p.value.toLocaleString("ru-RU")}
                </p>
            ))}
        </div>
    );
}

export function CaseChart({ block }: { block: ContentBlock }) {
    const chartType = (block.chartType as "line" | "bar" | "area") ?? "line";
    const title = block.title as string | undefined;
    const data = block.data as
        | Array<{ name: string; value: number }>
        | undefined;
    const series = block.series as
        | Array<{ name: string; data: Array<{ name: string; value: number }> }>
        | undefined;
    const stats = block.stats as
        | Array<{ label: string; value: string | number }>
        | undefined;
    const xKey = (block.xKey as string) ?? "name";
    const yKey = (block.yKey as string) ?? "value";

    const hasSeries = series && series.length > 0;
    const chartData = hasSeries
        ? (() => {
              const keys = new Set<string>();
              series.forEach((s) => s.data.forEach((d) => keys.add(d.name)));
              return Array.from(keys).map((name) => {
                  const point: Record<string, string | number> = {
                      [xKey]: name,
                  };
                  series.forEach((s) => {
                      const item = s.data.find((d) => d.name === name);
                      point[s.name] = item?.value ?? 0;
                  });
                  return point;
              });
          })()
        : (data ?? []);

    if (!chartData.length && !hasSeries) return null;

    // Автоматически генерируем stats из данных если не переданы
    const displayStats =
        stats ??
        (hasSeries && series
            ? series.map((s) => {
                  const total = s.data.reduce((sum, d) => sum + d.value, 0);
                  return { label: s.name, value: total };
              })
            : data
              ? [
                    {
                        label: "Всего",
                        value: data.reduce((sum, d) => sum + d.value, 0),
                    },
                ]
              : []);

    const commonChartProps = {
        data: chartData,
        margin: { top: 8, right: 0, left: 0, bottom: 0 },
    };

    const axisProps = {
        tick: { fontSize: 13, fill: "rgba(16,16,16,0.4)" },
        axisLine: { stroke: "rgba(16,16,16,0.1)" },
        tickLine: false,
    };

    const renderChart = () => {
        if (chartType === "bar") {
            if (hasSeries && series) {
                return (
                    <BarChart {...commonChartProps}>
                        <CartesianGrid
                            vertical={false}
                            stroke="rgba(16,16,16,0.08)"
                        />
                        <XAxis dataKey={xKey} {...axisProps} />
                        <YAxis {...axisProps} width={50} />
                        <Tooltip
                            content={<ChartTooltip />}
                            cursor={{ fill: "rgba(16,16,16,0.03)" }}
                        />
                        {series.map((s, i) => (
                            <Bar
                                key={s.name}
                                dataKey={s.name}
                                fill={CHART_COLORS[i % CHART_COLORS.length]}
                                radius={[3, 3, 0, 0]}
                            />
                        ))}
                    </BarChart>
                );
            }
            return (
                <BarChart {...commonChartProps}>
                    <CartesianGrid
                        vertical={false}
                        stroke="rgba(16,16,16,0.08)"
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} width={50} />
                    <Tooltip
                        content={<ChartTooltip />}
                        cursor={{ fill: "rgba(16,16,16,0.03)" }}
                    />
                    <Bar dataKey={yKey} fill="#101010" radius={[3, 3, 0, 0]} />
                </BarChart>
            );
        }

        if (chartType === "area") {
            if (hasSeries && series) {
                return (
                    <AreaChart {...commonChartProps}>
                        <CartesianGrid
                            vertical={false}
                            stroke="rgba(16,16,16,0.08)"
                        />
                        <XAxis dataKey={xKey} {...axisProps} />
                        <YAxis {...axisProps} width={50} />
                        <Tooltip content={<ChartTooltip />} />
                        {series.map((s, i) => (
                            <Area
                                key={s.name}
                                type="monotone"
                                dataKey={s.name}
                                stroke={CHART_COLORS[i % CHART_COLORS.length]}
                                fill={CHART_COLORS[i % CHART_COLORS.length]}
                                fillOpacity={0.06}
                                strokeWidth={2.5}
                            />
                        ))}
                    </AreaChart>
                );
            }
            return (
                <AreaChart {...commonChartProps}>
                    <CartesianGrid
                        vertical={false}
                        stroke="rgba(16,16,16,0.08)"
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} width={50} />
                    <Tooltip content={<ChartTooltip />} />
                    <Area
                        type="monotone"
                        dataKey={yKey}
                        stroke="#101010"
                        fill="#101010"
                        fillOpacity={0.04}
                        strokeWidth={2.5}
                    />
                </AreaChart>
            );
        }

        // line
        if (hasSeries && series) {
            return (
                <LineChart {...commonChartProps}>
                    <CartesianGrid
                        vertical={false}
                        stroke="rgba(16,16,16,0.08)"
                    />
                    <XAxis dataKey={xKey} {...axisProps} />
                    <YAxis {...axisProps} width={50} />
                    <Tooltip content={<ChartTooltip />} />
                    {series.map((s, i) => (
                        <Line
                            key={s.name}
                            type="monotone"
                            dataKey={s.name}
                            stroke={CHART_COLORS[i % CHART_COLORS.length]}
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{
                                r: 5,
                                fill: CHART_COLORS[i % CHART_COLORS.length],
                                stroke: "#fff",
                                strokeWidth: 2,
                            }}
                        />
                    ))}
                </LineChart>
            );
        }
        return (
            <LineChart {...commonChartProps}>
                <CartesianGrid vertical={false} stroke="rgba(16,16,16,0.08)" />
                <XAxis dataKey={xKey} {...axisProps} />
                <YAxis {...axisProps} width={50} />
                <Tooltip content={<ChartTooltip />} />
                <Line
                    type="monotone"
                    dataKey={yKey}
                    stroke="#101010"
                    strokeWidth={2.5}
                    dot={false}
                    activeDot={{
                        r: 5,
                        fill: "#101010",
                        stroke: "#fff",
                        strokeWidth: 2,
                    }}
                />
            </LineChart>
        );
    };

    return (
        <div className="my-10 border border-[rgba(16,16,16,0.1)] rounded-2xl overflow-hidden bg-white">
            {/* Шапка: заголовок слева + статы справа */}
            <div className="px-6 md:px-8 py-5 md:py-6 border-b border-[rgba(16,16,16,0.1)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* Заголовок */}
                {title && (
                    <h3 className="font-nevermind text-[20px] md:text-[22px] font-semibold text-[#101010]">
                        {title}
                    </h3>
                )}

                {/* Статистика справа */}
                {displayStats.length > 0 && (
                    <div className="flex items-center gap-6 md:gap-8">
                        {displayStats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`flex items-center gap-3 ${i !== displayStats.length - 1 ? "pr-6 md:pr-8 border-r border-[rgba(16,16,16,0.1)]" : ""}`}
                            >
                                <p className="text-[12px] text-[rgba(16,16,16,0.5)]">
                                    {stat.label}
                                </p>
                                <p className="font-nevermind text-[20px] md:text-[24px] font-semibold text-[#101010] tracking-tight">
                                    {typeof stat.value === "number"
                                        ? stat.value.toLocaleString("ru-RU")
                                        : stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* График */}
            <div className="px-4 md:px-6 py-6 md:py-8">
                <div className="h-[280px] md:h-[340px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
