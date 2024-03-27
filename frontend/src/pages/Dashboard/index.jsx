import React, { useEffect, useRef, useState } from "react";
import "./Dashboard.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Chart from "chart.js/auto";
import { dateGenerator, monthNameGenerator } from "../../util";
import { exportIcon } from "../../constants/assets";

function Dashboard() {
  const [chartType, setChartTyp] = useState("months");
  const [count, setCount] = useState(12);
  const chartRef = useRef(null);
  const chartData = {
    labels:
      chartType === "months" ? monthNameGenerator(count) : dateGenerator(count),
    datasets: [
      {
        label: "My First Dataset",
        data: [60, 55, 85, 70, 51, 50, 325],
        fill: false,
        backgroundColor: "#F7F9FF",
        borderColor: "#6941c6",
        tension: 0.4,
      },
      {
        label: "My SEcond Dataset",
        data: [80, 70, 100, 20, 40, 35, 89.5, 50],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "#F7F9FF",
        tension: 0.4,
      },
    ],
  };
  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: chartData,
    });
    return () => chart.destroy(); // cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartType, count]);
  return (
    <MainLayout>
      <div className="container Dashboard__wrapper">
        <div className="row">
          <div className="col-lg-8 col-md-12-col-sm-12 Dashboard__chart__side">
            <small>Today is a</small>
            <ul>
              <li>
                <Input type="radio" /> <label> Leg Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Arm Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Chest Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Rest Day</label>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12-col-sm-12 Dashboard__bar__side user">
            <h5>
              Hey Yeshara - <span>here’s what’s happening </span>{" "}
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12-col-sm-12 Dashboard__chart__side">
            <div className="card w-100 p-0 mt-2">
              <div className="card-header">
                <h5>Weight Report</h5>
                <ul>
                  <li>
                    <button className="filter__options active">
                      12 Months
                    </button>
                  </li>
                  <li>
                    <button className="filter__options">6 Months</button>
                  </li>
                  <li>
                    <button className="filter__options">30 Days</button>
                  </li>
                  <li>
                    <button className="filter__options">7 Days</button>
                  </li>
                </ul>
                <button>
                  <img src={exportIcon} alt="exportIcon" srcset={exportIcon} />
                  &nbsp; Export PDF
                </button>
              </div>
              <div className="card-body">
                <canvas ref={chartRef} className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12-col-sm-12  Dashboard__bar__side">
            <div className="card w-100">
              <div className="card-body">
                <div className="header__part">
                  <span> Target Completing Presentage</span>
                  <Select
                    options={["Last 7 Days"]}
                    wrapperStyles={{
                      border: "none",
                      backgroundColor: "transparent",
                      width: "60%",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <div className="bars__warpper">
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Total workouts</small>
                      <small>81%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="81"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Arms</small>
                      <small>75%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="75"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Chest</small>
                      <small>79%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="79"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Legs</small>
                      <small>100%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total leg days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total arm days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total chest days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total workout days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
