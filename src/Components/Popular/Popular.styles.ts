import { Mobile } from './../../Utility/Responsive/Mobile';
import styled from "styled-components"

export const PopularContainer  = styled.div`
display: flex;
flex-direction:column ;
margin-top: 2rem;
${Mobile({marginTop:"1rem"})}
`