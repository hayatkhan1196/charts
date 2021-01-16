import React from "react";
import Chartline from "./components/Chartline";
// import "./App.css";
import BarChart from "./components/barChart";
import Bubblechart from "./components/Bubblechart";
import Piechart from "./components/Piechart";

import Doughnutchart from "./components/Doughtnut";

import Navbar from "./Onepagewebsite/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
  {
    /* <div className="chart">
        {/* <Chartline />
        <BarChart />
        <Bubblechart />
        <Piechart />
        <Doughnutchart /> */
  }
}

export default App;
