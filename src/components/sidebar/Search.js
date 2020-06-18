import React from 'react';
import styled from 'styled-components';

import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon/search'

import {GeneralWrapper, StyledPgrey} from '../GlobalStyles';

const Search = () => {
    return (
        <SearchWrapper>
            <StyledInput type="text" placeholder="Search.."/>
        </SearchWrapper>
    )
}

//---------------- STYLES ----------------

const SearchWrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
`;

const StyledInput = styled.input`
    width: 100%;
    border: 2px inset;
`;

export default Search;