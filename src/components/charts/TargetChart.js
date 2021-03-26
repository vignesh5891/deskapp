import React from 'react';
import { VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryBar } from "victory";

function TargetChart() {
    return (
        <div className="card-box height-100-p pd-20">
            <h2 className="h4 mb-20">Lead Target</h2>

            <VictoryChart polar
                theme={VictoryTheme.material}
                startAngle={0}
                endAngle={180}
            >
                <VictoryPolarAxis
                    tickValues={[0, 45, 90, 135, 180]}
                    labelPlacement="vertical"
                />
                <VictoryBar style={{ data: { fill: "tomato", width: 30 } }}
                    data={[
                        { x: 0, y: 2 },
                        { x: 45, y: 3 },
                        { x: 90, y: 5 },
                        { x: 135, y: 4 },
                        { x: 180, y: 7 }
                    ]}
                />
            </VictoryChart>
        </div>
    );
}

export default TargetChart;