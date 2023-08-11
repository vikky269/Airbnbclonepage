import "./App.css";
import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key = {item.id}
         {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
      <Footer />
    </>
  );
}

export default App;
