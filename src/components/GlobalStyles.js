import React from 'react';
import styled from 'styled-components';

export const GeneralWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const BarWrapper = styled.div`
background-color: #212025;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const NavBar = styled.div`
background-color: #27252B;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPBButton = styled.button`
    margin: 5px;
    padding: 0 20px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    border: none;
    background-color: white;
    :hover {
        cursor: pointer;
    }
`;

export const StyledNavButton = styled.button`
    margin: 0 10px;
    text-align: center;
    border: none;
    background-color: transparent;
    color: white;
    :hover {
        cursor: pointer;
    }
`;

export const StyledPblack = styled.p`
    margin: 0;
    padding: 0;
`;

export const StyledPgrey = styled.p`
    margin: 0;
    padding: 0;
    color: grey;
`;

export const StyledPBeige = styled.p`
    margin: 0;
    padding: 0;
    color: #E4D7B6;
`;

export const StyledImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin: 10px;
`;