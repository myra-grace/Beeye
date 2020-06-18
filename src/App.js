import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import PlanningBoard from './components/PlanningBoard';

function App() {
  let title = "Mon Planning"
  let date = "15 Nov";
  let hours = "2h";
  let company = "Air Quebec";
  let convention = "Expertise";
  let meetingTitle = "Reporting/Planning";
  let location = "Online";
  let avatar = "https://www.goodfreephotos.com/albums/people/young-man-in-a-corporate-suit-face-portrait.jpg"

  return (
    <Wrapper className="App">
      <NavContainer>
        <Nav avatar={avatar}/>
      </NavContainer>
      <ContentContainer>
        <PlanningBoard title={title} avatar={avatar} date={date} hours={hours} company={company} convention={convention} meetingTitle={meetingTitle} location={location}/>
      </ContentContainer>
    </Wrapper>
  );
}
//---------------- STYLES ----------------
const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: block;
`;

const NavContainer = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
background-color: #E4D7B6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
