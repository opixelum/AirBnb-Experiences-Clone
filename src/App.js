import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
    return (
        <>
          <header><Navbar/></header>
          <main>
            <Hero/>
            <Card
              img="katie-zaferes.png"
              rating="5.0"
              reviewCount={6}
              location="USA"
              title="Life Lessons with Katie Zaferes"
              price={136}
            />
          </main>
        </>
    )
}
