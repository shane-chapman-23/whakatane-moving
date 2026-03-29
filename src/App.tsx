import { Nav } from "./components";
import { Hero } from "./sections";

function App() {
  return (
    <main className="min-h-screen bg-bg p-5">
      <Nav />
      <section className="flex justify-center md:mt-10">
        <Hero />
      </section>
    </main>
  );
}

export default App;
