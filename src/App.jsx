import Nav from "./components/Nav";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-x">
        <Hero />
      </section>
    </main>
  );
};

export default App;
