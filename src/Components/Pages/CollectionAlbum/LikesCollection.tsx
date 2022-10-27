import React from 'react'
import styled from 'styled-components';
import AnimatedRoute from '../../AnimatedRoute/AnimatedRoute'
import CollectionAbulm from './CollectionAbulm'
import { Mobile } from '../../../Utility/Responsive/Mobile';

const Container = styled.div`
  padding: 15px;
  ${Mobile({ marginTop: "3rem" })}
`;

const LikesCollection = () => {
  return (
    <AnimatedRoute>
      <Container>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit rerum, corrupti deleniti odit tenetur nam esse a aliquam excepturi repellendus beatae ipsa alias at, illo voluptatibus debitis laboriosam magni.
       Dignissimos nam, tenetur repellendus sunt atque inventore ad culpa hic magni quibusdam, incidunt doloribus a. Delectus debitis, tenetur ea iusto quisquam consequatur temporibus, qui quod reprehenderit ex quasi fugiat incidunt!
       Rerum voluptate nostrum ad inventore? Tempore, hic quasi. Perferendis, id. Eaque illo, quasi ullam corrupti quo ex hic esse voluptate rerum, exercitationem laboriosam adipisci mollitia quae reprehenderit, dolore sed commodi!
       Nesciunt facilis animi libero consequatur, fugit quia qui. Exercitationem inventore dignissimos, non aperiam repellat omnis in sed ipsam reiciendis amet sapiente, distinctio, neque impedit! Delectus veritatis error distinctio illum enim?
       Blanditiis suscipit dolores soluta pariatur in quibusdam nesciunt magni, voluptatum eum sequi accusamus voluptate veniam iure, nisi, voluptatibus praesentium ad unde? Ratione blanditiis quasi error beatae in nesciunt quod dolorem?</p>
      </Container>
    </AnimatedRoute>
  )
}

export default LikesCollection
