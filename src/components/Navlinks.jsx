import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
padding:15% 20%;
flex:auto;
display:flex;
justify-content:space-between;

`
const Icons=styled.div`
font-family:courier;
cursor:pointer;

`

const Navlinks = () => {
  return <Container>
      <Icons>HOME</Icons>
      <Icons>ABOUT</Icons>
      <Icons>CURRICULUM</Icons>
      <Icons>PEOPLE</Icons>
      <Icons>RESEARCH</Icons>
      <Icons>ALUMNUS</Icons>
  </Container>;
};

export default Navlinks;
