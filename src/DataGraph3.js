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
      const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
      const data = utils.sheet_to_json(ws); // generate objects
      const filtered_data = data.filter((v) => {
        if (
          !v.qtr.includes("2021") &&
          !v.qtr.includes("2022") &&
          v.bu === "ALL"
        )
          return v;
      });
      // console.log(filtered_data);
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
        data: filtered.map((val) => Math.round(Number(val.value)))
      }
    ]
  };

  return (
    <>
      <Bar
        style={{ marginRight: "10px" }}
        data={state}
        plugins={[ChartDataLabels]}
        options={{
          responsive: true,
          animation: true,
          scales: {
            x: {
              grid: {
                display: false
              },
              border: {
                width: 0.75,
                color: "black",
                z: 9999
              },
              ticks: {
                display: true,
                font: {
                  weight: "bold",
                  size: "8"
                }
              }
            },
            y: {
              // beginAtZero: true,
              // max: 100,
              grace: "25%",
              grid: {
                display: false
              },
              ticks: {
                display: false,
                stepSize: 0.5
              },
              border: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: true
            },
            datalabels: {
              color: "black",
              anchor: "end",
              align: "top",
              offset: 2,
              font: {
                weight: "bold",
                size: "9"
              }
            }
          }
        }}
      />
    </>
  );
}
