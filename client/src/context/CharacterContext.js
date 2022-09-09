import { createContext, useReducer } from "react";

const initialState = {
  character: null,
  mythicPlus: null,
  error: null,
  hasLoaded: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "character-error":
      return {
        ...state,
        error: action.error,
        hasLoaded: false,
      };

    case "character-fetched":
      return {
        ...state,
        character: action.character,
        mythicPlus: action.mythicPlus,
        hasLoaded: true,
      };

    case "reset-character":
      return {
        ...initialState,
      };

    default:
      throw new Error("Unrecognized action:", action.type);
  }
};

export const CharacterContext = createContext(null);

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Indicate that the character data has been fetched.
  const characterFetched = (data) => {
    dispatch({
      type: "character-fetched",
      ...data,
    });
  };

  // Indicate that an error has occurred.
  const characterError = (data) => {
    dispatch({
      type: "character-error",
      ...data,
    });
  };

  // Reset the character data.
  const resetCharacter = () => {
    dispatch({ type: "reset-character" });
  };

  return (
    <CharacterContext.Provider
      value={{
        state,
        actions: { characterFetched, characterError, resetCharacter },
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};