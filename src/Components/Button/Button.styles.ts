import styled from "styled-components"


export const StyledButton = styled.button`
padding:  3px 5px;
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(5px);
border-radius: 32px;
border: none;
cursor: pointer;
`


export const CollectionBtn = styled(StyledButton)<any>`
background: #FACD66;
border-radius: 27px;
margin: 0 10px;
padding: 0px ${props => props.likes ? "1.7rem" : "1.2rem"};

p{
    font-weight: 400;
font-size: 14px;
color: #1D2123;
}

`