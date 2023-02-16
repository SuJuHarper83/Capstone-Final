import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./MoodTracker.css";

const MoodTracker = ({props, setOpen}) => {
    
    const [chartData, setChartData] = useState([]);

    useEffect (() => {
        let chartData = props.entries.map(entry => {
            return [entry.date, entry.mood];
        });
        setChartData(chartData);
    }, [props.entries])

    return ( 
        <>
        <Chart className="chart"
        chartType="LineChart"
        data={[["Date", "Mood"], ...chartData]}
        legendToggle
        options={
            {legend: {position: "bottom"}}}
        />
        <button onClick={() => setOpen(false)}>Close</button>
        </>
     );
}
 
export default MoodTracker;