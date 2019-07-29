import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import './GridPie.css'

class GridPie extends Component {
    constructor(props) {
        super(props)
        this.chartComponent = React.createRef();
    }

    componentDidMount() {
        this.chartComponent.current.chart.reflow();
    }

    parseGridData(races) {
        const reduced = races.reduce((acc, race) => {
            let position = ''
            if (race.Results[0].grid === '0') {
                position = 'Pit Lane Start'
            } else {
                position = `P${race.Results[0].grid}`
            }
            const gridPosition = position;
            if (acc[gridPosition]) {
                acc[gridPosition] += 1;
            } else {
                acc[gridPosition] = 1;
            }
            return acc;
        }, {})
        return Object.entries(reduced);
    }


    render() {
        const gridPositions = this.parseGridData(this.props.allRaces)
        const options = {
            chartOptions: {
                chart: {
                    borderWidth: 5,
                    borderColor: 'rgb(0,0,0)',
                    backgroundColor: {
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(240,240,240)'],
                            [1, 'rgb(240,240,240)']
                        ]
                    },
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45
                    }
                },
                title: {
                    text: this.props.code + ' ' + this.props.number
                },
                subtitle: {
                    text: `Times in Grid Positions`
                },
                plotOptions: {
                    pie: {
                        innerSize: 100,
                        depth: 45
                    }
                },
                series: [{
                    name: 'Grid Results',
                    size: 150,
                    center: ["50%", "50%"],
                    data: gridPositions
                }]
            },
        };
        const { chartOptions } = options;
        return (
            <div id="grid-pie">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={chartOptions}
                    ref={this.chartComponent}
                />
            </div>
        )
    }
}

export default GridPie
