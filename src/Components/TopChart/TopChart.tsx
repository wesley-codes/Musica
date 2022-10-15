import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchWorldChartQuery } from '../../Services/songApi'
import CardPLayer from '../CardPlayer/CardPLayer'
import { CardContainer, ChartContainer, HeaderContainer } from './TopChart.styles'



const TopChart = () => {

  const {data} = useFetchWorldChartQuery()
  return (
   <ChartContainer>
    <HeaderContainer>
        <h2>
        Top charts
        </h2>
    </HeaderContainer>
    <CardContainer>
 
      
        <CardPLayer  thumbnail='="'/>
        <CardPLayer thumbnail='="'/>
        <CardPLayer thumbnail='="'/>
        <CardPLayer thumbnail='="'/>

        </CardContainer>

       
   </ChartContainer>
  )
}

export default TopChart
