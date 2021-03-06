import React, { Fragment} from 'react'
import NumOfWins from './CareerStatsComponents/NumOfWins';
import NumOfStarts from './CareerStatsComponents/NumOfStarts';
import DriverDetails from './CareerStatsComponents/DriverDetails';
import AverageGrid from './CareerStatsComponents/AverageGrid';
import AverageFinish from './CareerStatsComponents/AverageFinish';
import NumOfPoles from './CareerStatsComponents/NumOfPoles';
import Card from "react-bootstrap/Card"
import './CareerStats.css'

const CareerStats = (props) => {
    return (
        <Card id="driver-career-stats">
            <DriverDetails
                name={props.name}
                code={props.code}
                number={props.number}
                nationality={props.nationality} />
            <NumOfStarts races={props.allRaces} />
            <NumOfWins races={props.allRaces} />
            <NumOfPoles races={props.allRaces} />
            <AverageGrid races={props.allRaces} />
            <AverageFinish races={props.allRaces} />
        </Card>
    ); 
}

   

export default CareerStats