import React from 'react';
import styled from 'styled-components';
import { RowWrapper, NavBar, StyledPBButton } from './GlobalStyles';

const PBfunctionality = () => {
    return (
        <RowWrapper>
            <NavBar>
                <div>
                    <StyledPBButton>Today</StyledPBButton>
                    <StyledPBButton>⬅</StyledPBButton>
                    <StyledPBButton>➡</StyledPBButton>
                    <StyledPBButton>date - date</StyledPBButton>
                    <StyledPBButton>week</StyledPBButton>
                    <StyledPBButton>Split Screen</StyledPBButton>
                </div>
                <div>
                    <StyledPBButton>Conflicts</StyledPBButton>
                    <StyledPBButton>Personalize</StyledPBButton>
                </div>
            </NavBar>
        </RowWrapper>
        
    )
}

export default PBfunctionality;