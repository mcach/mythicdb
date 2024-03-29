// Required packages.
import styled from "styled-components";

// Required types.
import { FC } from "react";
import Props from "../models/components/Input";

const Input: FC<Props> = ({ onChange, onKeyUp, placeholder, value }) => {
  return (
    <Wrapper
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      value={value}
      required
    />
  );
};

// Styled components.
const Wrapper = styled.input`
  background: var(--color-on-background);
  border: 3px solid var(--color-secondary);
  font-size: 1rem;
  height: 3em;
  max-width: var(--maximum-width);
  padding: 0 0.5em;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export default Input;
