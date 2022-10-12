import React from 'react'
import { Link } from 'react-router-dom'
import CardPLayer from '../CardPlayer/CardPLayer'
import { CardContainer, ChartContainer, HeaderContainer } from './TopChart.styles'



const TopChart = () => {
  return (
   <ChartContainer>
    <HeaderContainer>
        <h2>
        Top charts
        </h2>
    </HeaderContainer>
    <CardContainer>
        <CardPLayer/>
        <CardPLayer/>
        <CardPLayer/>
        <CardPLayer/>

        </CardContainer>

       
   </ChartContainer>
  )
}

export default TopChart
