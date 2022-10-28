import React, { ReactElement, useState } from "react";
import TabTitle from "./TabTitle";
import styled from "styled-components";
import { Mobile } from "../../Utility/Responsive/Mobile";
type Props = {
  children: ReactElement[];
};

const StyledContainer = styled.div`
  ${Mobile({ display: "flex" })}
`;

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <StyledContainer>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={index === selectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </StyledContainer>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
