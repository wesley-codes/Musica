import React from 'react'
import styled from 'styled-components'
import Banner from '../Banner/Banner'
import TopChart from '../TopChart/TopChart'

const Container = styled.div`
display: flex;
padding: 15px;
`

const HomePage = () => {
  return (
    <Container>
        <Banner/>
        <TopChart/>

    </Container>
  )
}

export default HomePage
