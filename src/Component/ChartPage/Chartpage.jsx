import React from 'react';
import Header_home from '../HomePage/header_homepage/Header_home';
import { Line } from 'react-chartjs-2';
import './chartpage.css'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip
)

const Chartpage = () => {
    const data = {
        labels: ['0.5','1.5','2'], //estimate high with jump
        datasets: [{
            label: 'Vertical', 
            data: [1.3,1.5,0.9], //estimate time at float
            backgroundColor: ['red','blue','green'],
            borderColor: 'black',
            pointBorderColor: 'aqua',
            fill: true,
            tension: 0.5
            }
        ]
    }
    const options = {
        plugins: {
            legend: true
        },
        scales: {
            x: { //millisec
                min: 0,
                max: 3
            },
            y: {  //CM
                min: 0.2,
                max: 5
            }
        }
    }

  return (
    <div>
        <div className='header-graph'>
            <Header_home/>
        </div>
            <div className="graph-display" style={{
                width: '600px',
                height: '900px',
                padding: '10px',
                margin: '50px 100px 50px 100px'
            }}>
                <Line
                    data = {data}
                    options = {options}
                ></Line>
            </div>
        <div className='data-table'>
            Show data 
        </div>




    </div>
  )
}

export default Chartpage