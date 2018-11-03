
import styled from 'styled-components';
import media from '../themes/Media';

export default styled.button`
display: flex;
text-align: center;
padding: 14px 40px;
font-size: 25px;
border-radius: 4px;
background-color: #7be966; 
color: white;

${media.mobile`
    background-color: black;

`}
`;
