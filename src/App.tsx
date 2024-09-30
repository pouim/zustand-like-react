import { FC } from "react";
import { createStore } from "./store";

interface CounterState {
  count: number;
}

const useCounterStore = createStore<CounterState>({ count: 0 });

const Counter: FC = () => {
  const [state, updateState] = useCounterStore();

  return (
    <div>
      <h2>Counter Component</h2>
      <h3>Count: {state.count}</h3>
      <button onClick={() => updateState({ count: state.count + 1 })}>
        Increment
      </button>
      <button onClick={() => updateState({ count: state.count - 1 })}>
        Decrement
      </button>
      <button onClick={() => updateState({ count: 0 })}>Reset</button>
    </div>
  );
};

const DisplayCount: FC = () => {
  const [state] = useCounterStore();

  return (
    <div>
      <h2>DisplayCount Component</h2>
      <p>The current count is: {state.count}</p>
    </div>
  );
};

const App: FC = () => {
  return (
    <div>
      <h1>State Management Demo</h1>
      <Counter />
      <DisplayCount />
    </div>
  );
};

export default App;
