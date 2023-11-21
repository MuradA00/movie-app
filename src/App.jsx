import Home from "./components/screens/Home/Home";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


const App = () => {
  return (
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
          </Routes>
      </Router>  
  )
}

export default App;