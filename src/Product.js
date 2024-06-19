import product from "./database/data";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "./ProductSlice";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./Style.css";
import { useState } from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { proQtyInc,proQtyDec } from "./ProductSlice";
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';



const Product=()=>{
    const [detail, setDetail]= useState([])

    const [close, setClose]= useState(false)
    const detailPage = (product)=>{
        setDetail([{...product}])
        setClose(true)
    }

    const mydetail=useSelector((state)=>state.addtocart.cart);
    const productQntInc=(myid)=>{
        dispatch(proQtyInc(myid));

    }
    const productQntDec=(myid)=>{
        dispatch(proQtyDec(myid));

    }



    const mycart=useSelector((state)=>state.addtocart.cart);
    console.log(mycart);
    const dispatch= useDispatch();
    const mydataAdd=(id,name,image,price)=>{
     let productobj={id:id, name:name, image:image, price:price,quantity:1};
     dispatch(addData(productobj));

    
    }
    
    

   const proAns=product.map((key)=>{
    
    
      const g=key.id;
    if(g<=8)
    {

     for(let i=0; i<=4; i++)
     {
       
        return(
            <>
            <div style={{marginTop:"60px"}}>
                
            <div className="card">
            
                <div className="face front">
                    <img src={"images/"+key.image}/>
                </div>
                
                <div className="face back">
                

                    <h3>{key.name}</h3>
            
                    <p style={{textDecoration:"none"}}>₹ {key.price}</p>

        
                    <div className="link">
                        <button onClick={()=>mydataAdd(key.id,key.name,key.image,key.price)}>ADD TO CART</button>
                        <button onClick={()=> detailPage(key)}>View</button>
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
    
     }
    })

    const proAns1=product.map((key)=>{
        const g=key.id;
      if(g>8  && g<=16)
      {
  
       for(let i=8; i<=16; i++)
       {
         
          return(
              <>
              <div style={{marginTop:"60px"}}>
              <div className="card">
                  <div className="face front">
                      <img src={"images/"+key.image}/>
                  </div>
                  <div className="face back">
                      <h3 style={{marginLeft:"20px"}}>{key.name}</h3>
                      
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
      
       }
      })

      const proAns2=product.map((key)=>{
        const g=key.id;
      if(g>16  && g<=24)
      {
  
       for(let i=16; i<=24; i++)
       {
         
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
      
       }
      })
    

      const proAns3=product.map((key)=>{
        const g=key.id;
      if(g>24  && g<=32)
      {
  
       for(let i=24; i<=32; i++)
       {
         
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
      
       }
      })
    
     
     
    




    return(
        <>
        {
            close ? 
            <div className="detail_container">
            <div className="detail_contant">
                <button className="close" onClick={()=>{setClose(false)}}><HighlightOffIcon/></button>
                {
                    detail.map((x)=>{
                        return(
                            <>
                            <div className="detail_info">
                                <div className="img_box">
                                <img src={"images/"+x.image}/>

                                </div>

                                <div className="product_detail">
                                    <h2>{x.name}</h2>
                                    <h3>₹ {x.price}</h3>

                                    <div style={{display:"flex", justifyContent:"space-around"}}>
                                        <div style={{position:"relative", right:"120px"}}>

                                        <p style={{position:"relative", bottom:"30px", right:"90px"}}>Available Color</p>
                                        <div style={{display:"flex", justifyContent:"space-around" ,position:"relative", right:"98px"}}>
                                        <div style={{height:"20px" , width:"20px" , backgroundColor:"rgb(44, 44, 63)", borderRadius:"50%", border:"1px solid black",cursor:"pointer"}}></div>
                                        <div style={{height:"20px" , width:"20px" , backgroundColor:"black", borderRadius:"50%", border:"1px solid black",cursor:"pointer"}}></div>
                                        <div style={{height:"20px" , width:"20px" , backgroundColor:"#C08261", borderRadius:"50%", border:"1px solid black",cursor:"pointer"}}></div>
                                        <div style={{height:"20px" , width:"20px" , backgroundColor:"#976459", borderRadius:"50%", border:"1px solid black",cursor:"pointer"}}></div>

                                        </div>
                            
                                        </div>
                                       




                                        

                                    </div>

                                    <button onClick={()=>mydataAdd(x.id,x.name,x.image,x.price)}>ADD TO CART</button>

                                    <p>{x.dis}</p>
                                    

                                </div>

                            </div>
                            
                            
                            
                            </>
                        )

                    })
                }

            </div>



        </div>: null



        }







        
      <img src="./images/ban1.jpg" className="ban1"/>
        <div style={{display:"flex" , justifyContent:"space-between" ,position:"relative" , top:"50px"}}>
            <div >
                  <h2 style={{position:"relative", left:"105px" }}>Aksi Embroidery</h2>
            </div>
            <div>
                <h2 style={{position:"relative", right:"110px" }}>8 itmes</h2>

            </div>
        </div>
        
        
       
      <div id="cartitem">
        
        {proAns}
        </div>

        <img src="./images/ban2.jpg" className="ban2"/>

        <div style={{display:"flex" , justifyContent:"space-between" ,position:"relative" , top:"50px"}}>
            <div >
                  <h2 style={{position:"relative", left:"105px" }}>Metal Engraving</h2>
            </div>
            <div>
                <h2 style={{position:"relative", right:"110px" }}>8 itmes</h2>

            </div>
        </div>
      <div id="cartitem">
      {proAns1}

    
        </div>



        <img src="./images/ban3.jpg" className="ban3"/>

        <div style={{display:"flex" , justifyContent:"space-between" ,position:"relative" , top:"50px"}}>
            <div >
                  <h2 style={{position:"relative", left:"105px" }}>Tarakashi</h2>
            </div>
            <div>
                <h2 style={{position:"relative", right:"110px" }}>8 itmes</h2>

            </div>
        </div>
      <div id="cartitem">
      {proAns2}

    
        </div>


        <img src="./images/ban4.jpg" className="ban4"/>

        <div style={{display:"flex" , justifyContent:"space-between" ,position:"relative" , top:"50px"}}>
            <div >
                  <h2 style={{position:"relative", left:"105px" }}>Tarakashi</h2>
            </div>
            <div>
                <h2 style={{position:"relative", right:"110px" }}>8 itmes</h2>

            </div>
        </div>
      <div id="cartitem">
      {proAns3}

    
        </div>


       





        


        
        
        </>
    )
}

export default Product;