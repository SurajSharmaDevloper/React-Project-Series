import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Your Color Palette (HEX ONLY)
const palette = {
  coral: "#e36e53",
  charcoal: "#111827",
  lightgray: "#c4c8cb",
  softgray: "#eaeaea",
  offwhite: "#f7f6f3",
};

const ReusableChart = ({
  title = "Chart Title",
  categories = [],
  data = [],
  color = palette.coral,
  height = 280,
  bg = "#ffffff",
}) => {
  const options = {
    chart: {
      type: "spline", // smoother than line
      backgroundColor: bg,
      height: height,
      borderRadius: 12,
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },

    title: {
      text: title,
      align: "left",
      style: {
        fontSize: "18px",
        fontWeight: 600,
        color: palette.charcoal,
      },
      margin: 25,
    },

    xAxis: {
      categories: categories,
      lineColor: palette.lightgray,
      tickColor: palette.lightgray,
      labels: {
        style: {
          color: palette.charcoal,
          fontSize: "12px",
        },
      },
    },

    yAxis: {
      title: { text: "" },
      gridLineColor: palette.softgray,
      labels: {
        style: {
          color: palette.charcoal,
        },
      },
    },

    tooltip: {
      backgroundColor: bg,
      borderColor: palette.lightgray,
      borderRadius: 8,
      style: {
        fontSize: "12px",
        color: palette.charcoal,
      },
      shadow: true,
    },

    series: [
      {
        showInLegend: false,
        data: data,
        color: color,
        lineWidth: 3,
        marker: {
          radius: 4,
          fillColor: color,
        },
      },
    ],

    credits: { enabled: false },
  };

  return (
    <div className="w-full p-5 rounded-xl shadow-sm border border-[#e5e7eb] bg-white">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ReusableChart;
