import React from 'react';
import styled from 'styled-components';

import {GeneralWrapper, RowWrapper} from '../GlobalStyles';
import Search from './Search';
import Booked from '../Booked';

const Appointments = (props) => {
    return (
        <RowWrapper>
            <StatusContainer>
                <StatusP>Status</StatusP>
            </StatusContainer>
            <div style={{flexGrow: "1"}}>
                <Booked title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
            </div>
        </RowWrapper>
    )
}

//---------------- STYLES ----------------
const StatusContainer = styled.div`
    margin: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const StatusP = styled.p`
    background-color: #FFBDA4;
    width: 100%;
    border-radius: 20px;
`;

export default Appointments;