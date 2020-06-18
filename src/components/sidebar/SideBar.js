import React from 'react';
import styled from 'styled-components';

import {GeneralWrapper, RowWrapper, BarWrapper, StyledPblack, StyledPgrey, StyledPBeige, StyledImg} from '../GlobalStyles';
import Search from './Search';
import Appointments from './Appointments';

const SideBar = (props) => {
    return (
        <BarWrapper>
            <div style={{backgroundColor: "#27252B"}}>
                <Search />
            <RowWrapper style={{justifyContent: "start"}}>
                <StyledImg src={props.avatar}/>
                <StyledDiv>
                    <StyledPBeige>John Doe</StyledPBeige>
                    <StyledPgrey>title</StyledPgrey>
                </StyledDiv>
            </RowWrapper>
            </div>
            <Appointments title={props.title} date={props.date} hours={props.hours} company={props.company} convention={props.convention} meetingTitle={props.meetingTitle} location={props.location}/>
        </BarWrapper>
    )
}

//---------------- STYLES ----------------

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default SideBar;