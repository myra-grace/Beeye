import React from 'react';
import styled from 'styled-components';

import {GeneralWrapper, RowWrapper, NavBar, StyledPblack, StyledPgrey} from './GlobalStyles';

const Booked = (props) => {
    return (
        <BookedWrapper>
            <RowWrapper style={{justifyContent: "space-between"}}>
                <StyledPgrey><b>{props.date}</b></StyledPgrey>
                <StyledPgrey><b>{props.hours}</b></StyledPgrey>
            </RowWrapper>
            <div>
                <StyledPgrey><b>{props.company}</b></StyledPgrey>
                <StyledPblack><b>{props.convention}</b></StyledPblack>
                <StyledPgrey>{props.meetingTitle}</StyledPgrey>
            </div>
            <RowWrapper style={{justifyContent: "space-between"}}>
                <StyledPgrey>{props.location}</StyledPgrey>
                <StyledPgrey>Chat</StyledPgrey>
            </RowWrapper>
        </BookedWrapper>
    )
}

//---------------- STYLES ----------------
const BookedWrapper = styled.div`
background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`;

export default Booked;