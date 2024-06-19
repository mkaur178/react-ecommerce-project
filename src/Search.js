import product from "./database/data";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { addData } from "./ProductSlice";

const Search=()=>{
    const [myproduct , setMyproduct] = useState("");
    var myStatus = false;
    const mycart=useSelector((state)=>state.addtocart.cart);
    console.log(mycart);
    const dispatch= useDispatch();
    const mydataAdd=(id,name,image,price)=>{
     let productobj={id:id, name:name, image:image, price:price,quantity:1};
     dispatch(addData(productobj));
    }

    const displayProduct=(e)=>{
        setMyproduct(e.target.value)
    }

    const proAns=product.map((key)=>{
        
        let mystr = key.name;
        let status = mystr.toLocaleLowerCase().includes(myproduct.toLocaleLowerCase());
        if(status)
        {
            myStatus=true;
            return(
                <>
                <div style={{marginTop:"60px"}}>
                <div className="card">
                    <div className="face front">
                        <img src={"images/"+key.image}/>
                    </div>
                    <div className="face back">
                        <h3>{key.name}</h3>
                        <p>₹ {key.price}</p>
                        <div className="link">
                            <button onClick={()=>mydataAdd(key.id,key.name,key.image,key.price)}>ADD TO CART</button>
                        </div>
                    </div>
        
                    
        
                </div>
        
                <div className="name">
                    {key.name}
                    </div>    
                  <div className="price">
        
                  ₹ {key.price}
                    </div>
                
                </div>
        
                 </>
                 )
           }
        
           
           
});
return(
            <>

<hr style={{color:"gray"}}/>
        <div className="search">

        <input type="text" placeholder="Search Your Item Here" value={myproduct} onChange={displayProduct}/>
        <br/>
        

        </div>
        
          <div id="cartitem">

             {proAns}
            </div>

            {myStatus? "" : <h2>No data Found for this product</h2>}
            </>
        )
    }
    

export default Search;