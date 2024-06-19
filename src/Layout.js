import { Link,Outlet } from "react-router-dom";
import "./Style.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {useSelector } from "react-redux";
import { useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';


const Layout=()=>{

    const [menuopen , setMenuopen] = useState(false);
   
    const mycartData= useSelector((state)=>state.addtocart.cart);
    const proCount=mycartData.length;
    return(
        <>

        <div className="nav1"> 
            <p>Sign up & get 10% Off on your first purchase</p>
        </div>

        <nav className="h1">
            <div>
                <img src="./images/home.png" className="bg2"/> 
                </div>



         <div id="main">
    
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="shop">Shop</Link>
        <Link to="products">Products</Link>
        <Link to="search">Search</Link>
        <Link to="contact">Contact</Link>

        

        </div>


        <Link to='/search'>
        <h1 className="icon1">
            <SearchIcon/>
            </h1>

            </Link>

            <Link to='/login'>

        <h1 className="icon">
            
            <PersonOutlineOutlinedIcon style={{color:"black"}} />
            
            </h1>
            </Link>


        <h1 className="icon2">
            {proCount===0?"":
            <span className="cartcount">{proCount}</span>
            }



            
            <Link to="shop">
            <ShoppingBagOutlinedIcon style={{color:"black"}} className="shoop"/>
            </Link>
            </h1>

            
        

        </nav>


    
        <Outlet/>


        

        

        <footer >

            

            <div className="foot" >

                    <div>
                        <p style={{color:"wheat", fontSize:"13px"}}><b>Quick Links</b></p>
                        
                        <p>Home</p>
                        <p>About</p>
                        <p>Shop</p>
                        <p>Products</p>
                        <p>Search</p>
                        <p>Contact</p>
                     </div>
                    <div>
                        <p style={{color:"wheat",fontSize:"13px"}}>Browse Products By</p>
                        <p>Recommendations</p>
                        <p>Gift Items</p>
                        <p>New Arrivals</p>
                        <p>Popular Products</p>
                        <p>Best Sellers</p>
                        <p>Most Wishlisted</p>


                    </div>
                    <div>
                        <p style={{color:"wheat" ,fontSize:"13px"}}>Customer Service</p>
                        <p>Track Order</p>
                        <p>Shipping & Payments</p>
                        <p>Return & Exchanges</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookies Policy</p>


                    </div>
                    <div>
                    <p style={{color:"wheat" ,fontSize:"13px"}}>Craft Maestros</p>
                        <p>About U</p>
                        <p>Meet the Founders</p>
                        <p>Our Maestros</p>
                        <p>Contact Us</p>

                    </div>
                    <div>
                    <p style={{color:"wheat" ,fontSize:"13px"}}>Contact Us</p>
                    <p>Ankush Square, Block D, Sector 44, <br/>Gurugram, Haryana - 122010</p>
                    <p>+91-124 4675447</p>
                    <p>care@homelyheaven.com</p>
                    </div>
                    

            </div>

            <hr style={{position:"relative" , bottom:"30px" , color:"wheat"}}/>

            
            <div className="foott">
                <div style={{position:"relative" , right:"130px"}}> 
                    <p style={{color:"white"}}>@2024 Homely Heaven.All Rights <span className="sp"> Reserved.</span></p>

                </div>
                <div className="facebook"> 
                    <FacebookIcon style={{padding:"10px" ,color:"white"}}/>
                    <InstagramIcon style={{padding:"10px" , color:"white"}}/>
                    <PinterestIcon style={{padding:"10px" , color:"white"}}/>
                    <WhatsAppIcon style={{padding:"10px" , color:"white"}}/>


                </div>
            </div>


            

            </footer>
            </>
    )
}

export default Layout