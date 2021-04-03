
import { createUseScopedState } from "powerhooks";

const { useCounter, CounterProvider } = createUseScopedState<number, "counter">("counter");

export function App() {

    return (
        <CounterProvider initialState={0}>
            <Inner />
        </CounterProvider>
    );

}

function Inner() {

    const { counter, setCounter } = useCounter();

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
            <p>counter: {counter}</p>
        </>
    );

}

