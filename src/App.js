import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import navLinks from "./constant/navLinks";
import styles from "./constant/style";
import { Contacts, Homepage, Products, Services } from "./pages";


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
        <Route path={navLinks[1].path} element={<Services />} />
        <Route path={navLinks[2].path} element={<Products />} />
        <Route path={navLinks[3].path} element={<Contacts />}/>
      </Routes>

      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
