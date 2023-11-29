import { useEffect, useState } from "react";
import { read, utils, writeFile } from "xlsx";
import chart from "./Chart-js.xlsx";
import { createDiagonalPattern } from "./util";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import "./DataGraph.css";

export default function DataGraph() {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    (async () => {
      /* Download file */
      const f = await (await fetch(chart)).arrayBuffer();
      const wb = read(f); // parse the array buffer
      const ws = wb.Sheets[wb.SheetNames[1]]; // get the first worksheet
      const data = utils.sheet_to_json(ws); // generate objects
      const filtered_data = data.filter((v) => {
        if (
          !v.qtr.includes("2018") &&
          !v.qtr.includes("2019") &&
          !v.qtr.includes("2020") &&
          !v.qtr.includes("2021") &&
          !v.qtr.includes("2022") &&
          !v.qtr.includes("2024") &&
          v.bu === "ALL"
        )
          return v;
      });
      // console.log('graph1', filtered_data);
      filtered_data.sort(function (a, b) {
        return a.sortorder - b.sortorder;
      });
      setFiltered(filtered_data);
    })();
  }, []);

  const bgArray = filtered.map((v) => {
    if (v["datasource"].includes("BL")) {
      return "white";
    } else if (v["qtr"].includes("23")) {
      return "rgb(52, 125, 162)";
    } else if (v["datasource"].includes("TARGET")) {
      return createDiagonalPattern();
    } else {
      return "white";
    }
  });

  const state = {
    // x axis
    labels: filtered.map((v) => v["qtr"]),

    datasets: [
      {
        label: "",
        backgroundColor: bgArray,
        borderWidth: 1,
        borderColor: "rgb(52, 125,162)",
        //     y axis
        data: filtered.map((val) => Math.round(Number(val.value))),
        stack: filtered.map((val, i) => "Stack " + i),
      },
    ],
  };

  // console.log('labels', labels);

  return (
    <>
      <Bar
        style={{ marginRight: "10px" }}
        data={state}
        type="bar"
        plugins={[ChartDataLabels]}
        options={{
          barValueSpacing: 20,
          // responsive: true,
          // animation: true,
          categoryPercentage: 1.0,
          barpercentage: 1.3,
          scales: {
            x: {
              grid: {
                display: false,
              },
              stacked: true,
              border: {
                width: 0.75,
                color: "black",
                z: 9999,
              },
              ticks: {
                display: true,
                font: {
                  weight: "bold",
                  size: "8",
                },
              },
            },
            y: {
              // beginAtZero: true,
              // max: 100,
              grace: "25%",
              grid: {
                display: false,
              },
              stacked: true,
              ticks: {
                display: false,
                stepSize: 0.5,
              },
              border: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top",
              offset: 2,
              font: {
                weight: "bold",
                size: "9",
              },
            },
          },
        }}
      />
    </>
  );
}
