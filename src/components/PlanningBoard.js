import React from 'react';
import styled from 'styled-components';

import {GeneralWrapper} from './GlobalStyles';
import SideBar from './sidebar/SideBar';
import Calendar from './Calendar';
import PBfunctionality from './PBfunctionality';

const PlanningBoard = (props) => {
    return (
        <GeneralWrapper>
            <div style={{flexGrow: "1", backgroundColor: "#E4D7B6"}}>
                <p>{props.title}</p>
                <PBfunctionality />
            </div>
            <PlannerWrapper style={{flexGrow: "3"}}>
                <div style={{flexGrow: "1"}}>
                    <SideBar title={props.title} avatar={props.avatar} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{flexGrow: "4"}}>
                    <Calendar title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
            </PlannerWrapper>
        </GeneralWrapper>
    )
}

//---------------- STYLES ----------------

const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export default PlanningBoard;