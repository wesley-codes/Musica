import { Mobile } from './../../Utility/Responsive/Mobile';
import styled,{css} from "styled-components"


export const StyledButton = styled.button`
padding:  3px 5px;
background: rgba(255, 255, 255, 0.07);
backdrop-filter: blur(5px);
border-radius: 32px;
border: none;
cursor: pointer;
`




export const CollectionBtn = styled(StyledButton)<any>`
background-color: ${props => props.active ? "#FECD66" : "transparent"};
border-radius: 27px;
margin: 0 10px;
padding: 0px 1.2rem;
border : ${props => props.active ? "" : "1px solid  #EFEEE0"};
${(props) => props.like && css`
padding : 0px 1.7rem
`};
p{
    font-weight: 400;
font-size: 14px;
color:${props => props.active ? "#1D2123" : "#EFEEE0"};
};

${Mobile({width:"100%"})}

`