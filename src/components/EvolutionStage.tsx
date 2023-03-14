import React from "react";
import styled from "@emotion/styled/macro";
import { Color } from "../types";
import { mapColorToHex } from "../utils";

const Base = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Divider = styled.div`
  background-color: #D1D5DB;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

interface Props {
  level: number;
  color?: Color;
  from: {
    name: string;
    url: string;
  };
  to: {
    name: string;
    url: string;
  }
}

const EvolutionState: React.FC<Props> = ({ level, color }) => {
  return (
    <Base>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <DividerWrapper>
        <Text color={mapColorToHex(color?.name)} />
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
    </Base>
  )
}

export default EvolutionState;