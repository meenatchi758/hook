import useCounter from "../hooks/useCounter";

export default function CounterDemo() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="card">
      <h2>Counter Hook</h2>
      <p>Count: {count}</p>
      <button className="primary" onClick={increment}>+</button>
      <button className="secondary" onClick={decrement}>-</button>
      <button className="danger" onClick={reset}>Reset</button>
    </div>
  );
}
