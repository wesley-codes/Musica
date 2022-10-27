import React from "react"
import styled from "styled-components";
import CollectionButton from "../Button/CollectionButton"

type Props = {
  title: string
  index : number
  selectedTab:number
  isActive : boolean
  setSelectedTab: (index: number) => void
}

const ButtonContainer = styled.div`

`;


const TabTitle: React.FC<Props> = ({isActive, title, index, selectedTab ,setSelectedTab}) => {
  return (
     <CollectionButton likes onClick={() => setSelectedTab(index)} selectedTab={selectedTab}  isActive={isActive}>
    <p> {title}</p>
  </CollectionButton>
  )
}

export default TabTitle