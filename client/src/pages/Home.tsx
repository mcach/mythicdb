// Required packages.
import styled from "styled-components";

// Required components.
import BlankLink from "../components/BlankLink";
import Card from "../components/Card";

// Required data.
import { PATHS, STRINGS } from "../constants";

const Home = () => {
  return (
    <Wrapper>
      <Card
        description={STRINGS.cards.intro.description}
        title={STRINGS.cards.intro.title}
        divider
      />
      <BlankLink path={PATHS.newPlayer}>
        <Card
          description={STRINGS.cards.newPlayer.description}
          title={STRINGS.cards.newPlayer.title}
          divider
          filled
        />
      </BlankLink>
      <BlankLink path={PATHS.affixes}>
        <Card
          description={STRINGS.cards.affixes.description}
          title={STRINGS.cards.affixes.title}
          divider
          filled
        />
      </BlankLink>
    </Wrapper>
  );
};

// Styled components.
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default Home;
