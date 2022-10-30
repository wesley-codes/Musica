import React from "react";
import styled from "styled-components";
import { Mobile } from "../../Utility/Responsive/Mobile";
import AnimatedRoute from "../AnimatedRoute/AnimatedRoute";
import Banner from "../Banner/Banner";

import NewRelease from "../NewReleases/NewRelease";
import Popular from "../Popular/Popular";
import TopChart from "../TopChart/TopChart";


const Container = styled.div`
  display: flex;
  margin-top: 5rem;

  ${Mobile({ flexDirection: "column", marginTop:"1.5rem" })}
`;

const HompageContainer = styled.div`
  padding: 15px;
`;

const HomePage = () => {
  return (
    <AnimatedRoute>
      <HompageContainer>
        <Container>
          <Banner />
          <TopChart />
        </Container>
        <NewRelease />

        <Popular />
      </HompageContainer>
    </AnimatedRoute>
  );
};

export default HomePage;
