import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import Product from "./Product";
import Search from "./Search";
import Contact from "./Contact";
import BuyNow from "./BuyNow";
import Login from "./Login";
import PaymentDone from "./PaymentDone";
import MyProduct from "./MyProduct";




const App=()=>{

  
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="buynow" element={<BuyNow/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="paymentdone" element={<PaymentDone/>}/>
        <Route path="myproduct" element={<MyProduct/>}/>
  
      </Route>
    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App;