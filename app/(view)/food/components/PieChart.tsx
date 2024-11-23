/** Pizza ingredients distribution chart component */
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

/** Props interface for PieChart component */
interface PieChartProps {
  className?: string;
}

/** Pizza ingredients pie chart component */
export default function PieChart({ className }: PieChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "披萨配料分布图",
        subtext: "各配料重量占比",
        left: "center",
        top: 0,
        textStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
        subtextStyle: {
          fontSize: 12,
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}g ({d}%)",
      },
      legend: {
        top: "15%",
        left: "center",
        data: ["芝士", "番茄酱", "面团", "香肠", "蘑菇", "青椒"],
      },
      series: [
        {
          name: "披萨成分",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "65%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{b}: {d}%",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: true,
            length: 10,
            length2: 15,
          },
          data: [
            { value: 150, name: "芝士" },
            { value: 100, name: "番茄酱" },
            { value: 200, name: "面团" },
            { value: 80, name: "香肠" },
            { value: 50, name: "蘑菇" },
            { value: 40, name: "青椒" },
          ],
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      chart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={chartRef} className={className} style={{ height: "400px" }} />
  );
}
