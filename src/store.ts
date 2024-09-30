import { useState, useRef } from "react";

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

    useRef(() => {
      const subscriber = () => setState((c) => c + 1);
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    }).current();

    return [stateRef.current, updateState];
  }

  return useStore;
}
