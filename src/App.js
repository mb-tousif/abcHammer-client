import './App.css';
import Header from "../src/components/Header/Header";
import { Routes, Route} from "react-router-dom";
import HomeMain from '../src/components/Home/HomeMain';
import Blogs from "../src/components/Blogs/Blogs";
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import Footer from './components/SharedPages/Footer/Footer';
import LogIn from './components/userAuthentication/LogIn';
import SignUp from './components/userAuthentication/SignUp';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './components/userAuthentication/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';
import MyOrder from './components/Dashboard/MyOrder';
import AddReview from './components/Dashboard/AddReview';
import PurchaseHome from './components/PurchasedPage/PurchaseHome';
import PurchaseItem from './components/PurchasedPage/PurchaseItem';
import MyPortFolioMain from './components/MyPortFolio/MyPortFolioMain';
import ManageOrder from './components/Dashboard/ManageOrder';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts';
import MakeAdmin from './components/Dashboard/MakeAdmin';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/purchase" element={<RequireAuth>
          <PurchaseHome/>
        </RequireAuth>}/>
        <Route path="/purchase/:id" element={<RequireAuth>
          <PurchaseItem/>
        </RequireAuth>}/>
        <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path="addReview" element={<AddReview />} />
          <Route path="myOrder" element={<MyOrder />} />
          <Route path="manageOrder" element={<ManageOrder/>} />
          <Route path="addProduct" element={<AddProduct/>} />
          <Route path="manageProduct" element={<ManageProducts/>} />
          <Route path="manageProduct" element={<ManageProducts/>} />
          <Route path="makeAdmin" element={<MakeAdmin/>} />
        </Route>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myPortfolio" element={<MyPortFolioMain/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
