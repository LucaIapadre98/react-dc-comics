// COMPONENTS
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

// DATA
import comics from "./data/comics";

export default function App() {
  return (
  <>
    <Header />
    <Main comics ={comics} />
    <Footer />
  </>
  );
}