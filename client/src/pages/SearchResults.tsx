// Required packages.
import axios from "axios";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Required components.
import BlankLink from "../components/BlankLink";
import Card from "../components/Card";
import Loader from "../components/Loader";

// Required data.
import { PATHS, STRINGS } from "../constants";
import { SearchContext } from "../context/SearchContext";

const SearchResults = () => {
  // Get the query from the url.
  const [query] = useSearchParams();

  const { state, actions } = useContext(SearchContext);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios(`${PATHS.api}/characters`);

      actions.searchSuccess({ characters: response.data.data });
    };

    fetchCharacters();
    //eslint-disable-next-line
  }, []);

  // Render a loading indicator if the data is still loading.
  if (!state.hasLoaded) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  // Filter the characters to only names that match the query.
  const matches = state.characters
    .filter((character) => {
      return character.name.toLowerCase().includes(query.get("name")!);
    })
    .sort((character1, character2) => {
      return character1.name.localeCompare(character2.name);
    });

  return (
    <Centered>
      <Wrapper>
        {/* Create a card for each character that matches the query. */}
        {matches.map((character) => {
          return (
            <BlankLink
              key={character._id}
              path={`/characters/${character.region.toLowerCase()}/${character.realm.toLowerCase()}/${character.name.toLowerCase()}`}
            >
              <Card filled>
                <Details>
                  <div>
                    <Thumbnail
                      src={character.thumbnail}
                      alt={`${character.name}'s class icon.`}
                    />
                    <Name faction={character.faction}>{character.name}</Name>
                  </div>
                  <p>{`(${character.region}) ${character.realm}`}</p>
                </Details>
              </Card>
            </BlankLink>
          );
        })}
        <Divider />
        <BlankLink path={PATHS.addCharacter}>
          <Card description={STRINGS.cards.addCharacter.description} filled />
        </BlankLink>
      </Wrapper>
    </Centered>
  );
};

// Styled components.
const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Details = styled.div`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  justify-content: space-between;
  text-shadow: 2px 2px black;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    gap: 0.2rem;
  }
`;

const Divider = styled.div`
  border-bottom: 3px solid var(--color-secondary);
  margin-bottom: 1.5em;
  width: 65%;
`;

const Name = styled.h2<any>`
  color: ${(props) =>
    props.faction === "Alliance"
      ? "var(--color-alliance)"
      : "var(--color-horde)"};
  font-size: 1.2rem;
`;

const Thumbnail = styled.img`
  border: 2px solid var(--color-background);
  height: 2.5rem;
  width: 2.5rem;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

export default SearchResults;
