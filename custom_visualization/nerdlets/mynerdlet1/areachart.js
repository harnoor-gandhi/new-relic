import React from "react";
import { AreaChart } from 'nr1'

export default class Areachart extends React.Component{
    render(){
        const areachart1 = [
            {
                metadata: {
                  id: 'series-1',
                  name: 'Serie 1',
                  color: '#a35ebf',
                  viz: 'main',
                  units_data: {
                    y: 'BYTES',
                  },
                },
                data: [{ y: 128 }],
              }
        ]
        // return <AreaChart data={[areachart1]} fullWidth />;
        return <AreaChart
        accountId={4038254}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDAzODI1NHxJTkZSQXxOQXwyOTQzNzg5OTI0NTg1NzQ0MjQx' TIMESERIES auto" 
        fullWidth
      />;
    }
}