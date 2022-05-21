import './App.css';
import Header from './Header/Header';
import { Routes, Route} from "react-router-dom";
import HomeMain from './Home/HomeMain';
import Blogs from './Blogs/Blogs';
import PurchasedMain from './PurchasedPage/PurchasedMain';
function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain/>} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/purchase" element={<PurchasedMain/>} />
      </Routes>
    </div>
  );
}

export default App;
