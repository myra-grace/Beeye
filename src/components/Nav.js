import React, {useState} from 'react';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/icomoon/search'
import {bellO} from 'react-icons-kit/fa/bellO'
import {questionCircleO} from 'react-icons-kit/fa/questionCircleO'
import {cog} from 'react-icons-kit/fa/cog'
import {folderO} from 'react-icons-kit/fa/folderO';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down'
import {cloudUpload} from 'react-icons-kit/fa/cloudUpload'
import { StyledNavButton, NavBar, StyledImg } from './GlobalStyles';

const Nav = (props) => {
    const [dropDown, setDropDown] = useState(false);

    
    return (
        <>
        <NavBar>
            <div>
                <StyledNavButton>LOGO</StyledNavButton>
                <StyledNavButton>Gestion</StyledNavButton>
                <StyledNavButton>Temps</StyledNavButton>
                <StyledNavButton>Analyse</StyledNavButton>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <StyledUpload onClick={() => setDropDown(!dropDown)}><Icon icon={folderO} /><span style={{margin: "0 5px"}}>Ajouter</span><Icon icon={ic_keyboard_arrow_down} /></StyledUpload>
                <StyledSearch><Icon icon={search} /><StyledInput type="text"/></StyledSearch>
                <StyledNavButton><Icon icon={bellO} /></StyledNavButton>
                <StyledNavButton><Icon icon={questionCircleO} /></StyledNavButton>
                <StyledNavButton><Icon icon={cog} /></StyledNavButton>
                <StyledNavButton><StyledImg src={props.avatar}/></StyledNavButton>
            </div>
        </NavBar>
        {!dropDown ? null : 
        <WarapDiv>
            <UploadDiv>
                <Icon size="100" icon={cloudUpload} />
            </UploadDiv>
        </WarapDiv>
        }
        </>
    )
}

//---------------- STYLES ----------------

const StyledUpload = styled.button`
  padding: 0 10px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  border: none;
  background-color: #3E3749;
  color: white;
  border-radius: 40px;
  :hover {
    cursor: pointer;
}
`;

const WarapDiv = styled.div`
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

const UploadDiv = styled.div`
    background-color: rgba(255,255,255,0.7);
    width: 70vw;
    height: 70vh;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledSearch = styled.form`
    margin: 0 15px;
    padding-bottom: 5px;
    padding-left: 5px;
    width: 20px;
    text-align: center;
    background-color: transparent;
    color: white;
    display: flex;
    flex-direction: row;
    :hover, :focus {
        cursor: pointer;
        width: 200px;
        border: 2px solid black;
        border-radius: 4px;
    }
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}
`;

const StyledInput = styled.input`
    max-width: 100%;
    border: none;
    background-color: transparent;
    color: white;
`;

export default Nav;