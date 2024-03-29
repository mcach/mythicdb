// Required packages.
import styled from "styled-components";

// Required types.
import { FC } from "react";
import Props from "../models/components/Label";

const Label: FC<Props> = ({ label }) => {
  return <Wrapper>{label}</Wrapper>;
};

// Styled components.
const Wrapper = styled.label`
  font-size: 1.3rem;
  margin: 0.4em;
`;

export default Label;
