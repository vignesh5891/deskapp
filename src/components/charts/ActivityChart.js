import React from 'react';
import { VictoryChart, VictoryGroup, VictoryBar } from "victory";

function ActivityChart() {
    return (
        <div className="card-box height-100-p pd-20">
            <h2 className="h4 mb-20">Activity</h2>
            <VictoryChart height={200}>
                <VictoryGroup offset={20}
                    colorScale={"qualitative"}
                >
                    <VictoryBar
                        data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                    />
                    <VictoryBar
                        data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                    />
                    <VictoryBar
                        data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    );
}


export default ActivityChart;