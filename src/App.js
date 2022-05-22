import './App.css';
import Header from "../src/components/Header/Header";
import { Routes, Route} from "react-router-dom";
import HomeMain from '../src/components/Home/HomeMain';
import Blogs from "../src/components/Blogs/Blogs";
import PurchasedMain from "../src/components/PurchasedPage/PurchasedMain";
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import Footer from './components/SharedPages/Footer/Footer';
import LogIn from './components/userAuthentication/LogIn';
import SignUp from './components/userAuthentication/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain/>} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/purchase" element={<PurchasedMain/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
