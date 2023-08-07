import { createContext } from "react";

// Context
export const MovieContext = createContext();

// Provider

export function MovieProvider(props) {
  const movies = [
    {
      id: 1,
      name: "Titanic",
      rating: 4,
    },

    {
      id: 2,
      name: "Avatar",
      rating: 4.5,
    },

    {
      id: 3,
      name: "Iron Man",
      rating: "3.5",
    },
  ];

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
}
