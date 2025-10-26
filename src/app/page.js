'use client';
import Counter from "../components/Counter";

export default function Home() {
  return (
    <main>
      <h1>Simple Button Counter</h1>
      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}