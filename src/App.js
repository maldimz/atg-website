import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import navLinks from "./constant/navLinks";
import styles from "./constant/style";
import { Homepage } from "./pages";


function App() {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
      </div>


      <Routes>
        <Route exact path={navLinks[0].path} element={<Homepage />} />
        <Route path={navLinks[1].path} element={navLinks[1].title} />
        <Route path={navLinks[2].path} element={navLinks[2].title} />
      </Routes>

    </Router>
  );
}

export default App;
