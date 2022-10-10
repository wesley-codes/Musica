import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerContainer = styled.div`
  background: #609eaf;
  border-radius: 40px;
  height: 373px;
  display: flex;
  flex: 4;
`;

export const InfoContainer = styled.div`
  padding: 2rem;
`;

export const TopContainer = styled.div`
  p {
    font-weight: 400;
    font-size: 12px;
    color: #fff;
  }
`;

export const CenterContainer = styled.div`
  h2 {
    font-weight: 700;
    font-size: 35px;
    color: #ffffff;
  }
`;

export const BottomContainer = styled.div``;

export const ArtContainer = styled.div`
  position: relative;
`;

export const VectorContainer = styled(motion.div)``;

export const VectorImage = styled.img`
  border-radius: 40px;
`;

export const ImageContainer = styled(motion.div)`
  position: absolute;
  left: 130px;
  top: 0;
`;

export const GuyMan = styled(motion.img)`
  position: absolute;
`;
