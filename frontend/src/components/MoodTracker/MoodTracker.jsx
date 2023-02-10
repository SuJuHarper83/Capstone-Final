import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const MoodTracker = (props) => {
    
    const [chartData, setChartData] = useState([]);

    useEffect (() => {
        let chartData = props.entries.map(entry => {
            return [entry.date, entry.mood];
        });
        setChartData(chartData);
    }, [props.entries])

    return ( 
        <Chart
        chartType="LineChart"
        data={[["Date", "Mood"], ...chartData]}
        width="600"
        height="500"
        legendToggle
        options={{legend: {position: "bottom"}}}
        />
     );
}
 
export default MoodTracker;