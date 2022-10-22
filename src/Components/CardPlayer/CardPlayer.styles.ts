import { Mobile } from "./../../Utility/Responsive/Mobile";

import styled from "styled-components";
import FavoriteSVG from "../SVG/FavoriteSVG";

export const CardPlayerContainer = styled.div`
  display: flex;
  background: #1a1e1f;
  border-radius: 20px;
  justify-content: space-between;
  padding: 0.8rem;
  margin-bottom: 20px;
  ${Mobile({ padding: "1rem", marginRight: "2rem", marginBottom: "0" })}
`;

export const FirstContainer = styled.div`
  display: flex;
  ${Mobile({ flexDirection: "column", width: "200px", height: "200px" })}
`;

export const SecondContainer = styled.div`
  display: flex;
  align-items: center;
  ${Mobile({ alignItems: "flex-start" })}
`;

export const ThummbnailContainer = styled.div``;

export const Thumbnail = styled.img`
  object-fit: cover;
  width: 70px;
  height: 70px;
  border-radius: 1rem;
`;

export const CenterContainer = styled.div`
  margin: 0 15px;
  ${Mobile({ margin: "0", marginTop: "10px" })}
`;

export const SongName = styled.h3`
  margin: 0;
  color: #ffffff;
  font-weight: 400;
  font-size: 17px;
`;

export const ArtistName = styled.h4`
  margin: 10px 0;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
  font-size: 12px;
  ${Mobile({ margin: "15px 0" })}
`;

export const SongDuration = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 12px;
  color: #ffffff;
  ${Mobile({ fontSize: "14px" })}
`;

export const CircleAvatar = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Mobile({ height: "30px", width: "30px" })}
`;

export const FavoriteIcon = styled(FavoriteSVG)``;
