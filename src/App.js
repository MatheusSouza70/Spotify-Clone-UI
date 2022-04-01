import "./App.css";
import Sidebar from "./containers/Sidebar";
import Header from "./components/Header";
import MainContainer from "./containers/MainView";
import Footer from "./containers/Footer";

function App() {
  return (
    <>
      <div className="app__container">
        <Sidebar />
        <div className="view__container">
          <Header />
          <MainContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
