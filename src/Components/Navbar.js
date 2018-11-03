import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import media from '../themes/Media';

const Nav = styled.div`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: lightgrey;
display: flex;
justify-content: space-around;
${media.mobile`
    background-color: white
    display: flex;
    justify-content: space-around;
`}
`;


const StyledLink = styled(Link)`

    display: block;
    color: white;
    padding: 14px 16px;
    text-decoration: none;
    text-decoration-color: ;
    ${media.mobile`
      background-color: black;
      flex-wrap: wrap;
    `}
  
`;
function Navbar() {
  return (
        <React.Fragment>
             <Nav>
                    <StyledLink to="/" >Home</StyledLink>
                        <StyledLink to="/firstPage">First Page</StyledLink>
                        <StyledLink to="/breeds">BreedsOverview</StyledLink>

            </Nav>
        </React.Fragment>


  );
}


export default Navbar;
