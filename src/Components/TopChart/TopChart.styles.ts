import { Mobile } from './../../Utility/Responsive/Mobile';
import styled,{css} from "styled-components"


export const ChartContainer = styled.div`
flex: 2;
padding: 0 3rem;
${Mobile({padding:"0"})}

`


export const HeaderContainer = styled.div`
h2{
    font-weight: 700;
font-size: 24px;
margin: 0;
color: #EFEEE0;
}
${Mobile({margin:"20px 0"})}
`



export const CardContainer = styled.div<any>`
height: 335px;
overflow: auto;
margin-top: 20px;

${props => props.release && css`
display: flex;
height: 220px;
scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
&::-webkit-scrollbar {
    width: 0px;
  }
`}

${Mobile({display:"flex", alignItems:"center", height:"250px", marginTop:"0"})}
`

