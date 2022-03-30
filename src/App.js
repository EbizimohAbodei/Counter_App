import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header className="header" />
      <Main className="main" />
      <Footer />
    </div>
  );
};

export default App;
