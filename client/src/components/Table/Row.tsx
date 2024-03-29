// Required packages.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../../models/components/Default";

const Row: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

// Styled components.
const Wrapper = styled.tr`
  text-shadow: none;

  & > td,
  & > th {
    border: 2px solid var(--color-primary);
    padding: 0.4em;
    text-align: center;
  }
`;

export default Row;
