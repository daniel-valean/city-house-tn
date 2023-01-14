import Home from "./components/Home";
import Navbar from "./components/navbar";
import Howitworks from "./components/howitworks"
import Aboutus from "./components/aboutus";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Howitworks />
      <Aboutus />
      <Contact />
    </div>
  );
}

export default App;
