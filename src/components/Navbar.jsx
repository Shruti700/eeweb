import React from 'react';
import styled from 'styled-components';
//#99e6ff
const Container = styled.div`
height: 60px;
background:beige;
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
background:#ffcc66;
`
const Left=styled.div`
flex:auto;
display:flex;
align-items:center;

`
const Center=styled.div`
flex:auto;
display:flex;
align-items:center;
justify-content:center;

`
const Right=styled.div`
flex:auto;
display:flex;
align-items:center;
justify-content:flex-end;
`
const Logoname= styled.header`
padding:10px;
font-family:verdana;
font-size:25px;
justify-content:center;
`
const Logouni=styled.div`
padding:10px;
height:180px;
width:120px;
display: flex;
align-items: left;
 `


const Navbar = () => {
    return (
        <Container><Wrapper>
        <Left><Logouni>< img src="https://img.collegepravesh.com/2019/08/HBTU-Kanpur-Logo.png" alt="College logo here"/></Logouni>
        </Left>
        <Center><Logoname><h2>Department of Electrical Engineering</h2><br/>
        Harcourt Butler Technological University, Kanpur UP (208002)</Logoname> </Center>
        <Right><Logouni><img src="https://www.dakotafluidpower.com/media/Products/ProductImages/OEM-Electrical-Controls-1.jpg" alt="dept logo"/></Logouni></Right>
        </Wrapper> </Container>
        
    );
};

export default Navbar;
