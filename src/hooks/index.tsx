import { useContext } from "react";
import { TriviaContext } from "../context/TriviaContext";

export function useTriviaContext() {
    return useContext(TriviaContext)
}