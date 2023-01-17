import Home from "./components/Home";
import Navbar from "./components/navbar";
import Howitworks from "./components/howitworks";
import Aboutus from "./components/aboutus";
import Footer from  "./components/footer";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Howitworks />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default App;
