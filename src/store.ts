import { useState, useRef, useCallback } from "react";

export function createStore<T extends object>(initialState: T) {
  const currentState = { ...initialState };
  const subscribers = new Set<() => void>();

  function updateState(updater: Partial<T> | ((state: T) => Partial<T>)) {
    const updatedState =
      typeof updater === "function" ? updater(currentState) : updater;
    Object.assign(currentState, updatedState);
    subscribers.forEach((subscriber) => subscriber());
  }

  function useStore(): [
    T,
    (updater: Partial<T> | ((state: T) => Partial<T>)) => void
  ] {
    const [, setState] = useState(0);
    const stateRef = useRef(currentState);

    useCallback(() => {
      const subscriber = () => setState((c) => c + 1);
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    }, [])();

    return [stateRef.current, updateState];
  }

  return useStore;
}
