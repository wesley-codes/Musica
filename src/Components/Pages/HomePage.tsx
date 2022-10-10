import React from "react";
import styled from "styled-components";
import { Mobile } from "../../Utility/Responsive/Mobile";
import Banner from "../Banner/Banner";
import CardPlayerMobile from "../CardPlayer/CardPayerMobile";
import MobileTopChart from "../CardPlayer/CardPayerMobile";
import NewRelease from "../NewReleases/NewRelease";
import Popular from "../Popular/Popular";
import TopChart from "../TopChart/TopChart";
import { HeaderContainer } from "../TopChart/TopChart.styles";

const Container = styled.div`
  display: flex;
  margin-top: 5rem;

  ${Mobile({ flexDirection: "column" })}
`;

const HompageContainer = styled.div`
padding: 15px;
`

const HomePage = () => {
  return (
    <React.Fragment>
      <HompageContainer>
        <Container>
          <Banner />
          <TopChart />
        </Container>
        <NewRelease />

        <Popular/>
      </HompageContainer>
    </React.Fragment>
  );
};

export default HomePage;
