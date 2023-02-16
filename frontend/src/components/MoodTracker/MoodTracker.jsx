import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import "./MoodTracker.css";

const MoodTracker = ({entries, setCollapsible}) => {
    
    const [chartData, setChartData] = useState([]);

    useEffect (() => {
        let chartData = entries.map(entry => {
            return [entry.date, entry.mood];
        });
        setChartData(chartData);
    }, [entries])

    return ( 
        <>
        <Chart className="chart"
        chartType="LineChart"
        data={[["Date", "Mood"], ...chartData]}
        legendToggle
        options={
            {legend: {position: "bottom"}}}
        />
        <button onClick={() => setCollapsible(false)}>Close</button>
        </>
     );
}
 
export default MoodTracker;