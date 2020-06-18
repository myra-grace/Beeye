import React from 'react';
import styled from 'styled-components';

import {GeneralWrapper, BarWrapper, StyledPblack, StyledPgrey, StyledPBeige} from './GlobalStyles';
import Booked from './Booked';

const Calendar = (props) => {
    return (
        <BarWrapper style={{backgroundColor: "#2F2C3A"}}>
            <StyledPgrey>January</StyledPgrey>
            <CalendarContainer>
                <div style={{gridArea: "1 / 1 / 2 / 2"}}>
                    <StyledPBeige>Sunday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                </div>
                <div style={{gridArea: "1 / 2 / 2 / 3"}}>
                    <StyledPBeige>Monday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{gridArea: "1 / 3 / 2 / 4"}}>
                    <StyledPBeige>Tuesday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{gridArea: "1 / 4 / 2 / 5"}}>
                    <StyledPBeige>Wednesday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{gridArea: "1 / 5 / 2 / 6"}}>
                    <StyledPBeige>Thursday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{gridArea: "1 / 6 / 2 / 7"}}>
                    <StyledPBeige>Friday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                    <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
                </div>
                <div style={{gridArea: "1 / 7 / 2 / 8"}}>
                    <StyledPBeige>Saturday</StyledPBeige>
                    <StyledPgrey>0/3</StyledPgrey>
                </div>
            </CalendarContainer>
        </BarWrapper>
    )
}

//---------------- STYLES ----------------
const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;



export default Calendar;