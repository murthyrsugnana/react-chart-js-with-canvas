// import Card from 'react-bootstrap/Card';
import DataGraph1 from "./DataGraph1";
import DataGraph3 from "./DataGraph3";
// import DataGraph5 from "./DataGraph5";
// import DataGraph7 from "./DataGraph7";
// import DataGraph8 from "./DataGraph8";
// import DataGraph9 from "./DataGraph9";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div id='main-div'>
      <header id="main-header">
        <div className="main-header-title">OTC NPI Dashboard</div>
      </header>

      <div id="content">
        <main>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test (Test)
              <p>Test</p>
            </div>
            <DataGraph1 />
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test
              {/* <p>Improve OTD and Reduce NCs</p> */}
            </div>
            {/* <DataGraph />  */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test
              <p>Test</p>
            </div>
            <DataGraph3 />
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test
              <p>Test</p>
            </div>
            {/* <DataGraph />  */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test
              <p>Test</p>
            </div>
            {/* <DataGraph5 /> */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test
              {/* <p>Improve OTD and Reduce NCs</p> */}
            </div>
            {/* <DataGraph />  */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test (%)
              <p>Test</p>
            </div>
            {/* <DataGraph7 /> */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test (%)
              <p>Test</p>
            </div>
            {/* <DataGraph8 /> */}
          </div>
          <div id="bar-graph">
            <div style={{ padding: "5px" }}>
              Test (%)
              <p>Test</p>
            </div>
            {/* <DataGraph9 /> */}
          </div>
        </main>
        <aside>
          <div id="aside-content">
            HIGHLIGHTS
            <p>Highlights</p>
          </div>
          <div id="aside-content">
            LOWLIGHTS
            <p>Lowlights</p>
          </div>
          <div id="aside-content">
            NEXT STEPS
            <p>Next Steps</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
