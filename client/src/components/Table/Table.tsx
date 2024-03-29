// Required packages.
import styled from "styled-components";

// Required types and interfaces.
import { FC } from "react";
import Props from "../../models/components/Default";

const Table: FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

// Styled components.
const Wrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export default Table;
