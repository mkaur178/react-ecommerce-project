import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import PublicIcon from '@mui/icons-material/Public';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';




const Home=()=>{
    const myNavigate=useNavigate();

    const donePayment=()=>{
        myNavigate("/products")
      }
    

    useEffect(()=>{
        AOS.init({duration: 1000});

    },[])
    return(
        <>
        <section className='section'> 

            <div className="img1">

            <div>
                <img src="./images/fil1.png" className='bg'  />


            </div>
            
           </div>

           <div id='support'> 

                <h4><LocalShippingIcon className='iconn1'/>Worldwide <span>Shipping</span></h4>
                <h4><QuestionAnswerIcon className='iconn' />24x7 Customer <span style={{marginLeft:"10px"}}>Support</span></h4>
                <h4><AssuredWorkloadIcon className='iconn2'/><span style={{marginLeft:"20px"}}>Secure</span> <span>Transactions</span></h4>


            </div>

            <hr style={{position:"relative" , top:"50px", color: "#0C356A"}}/>

    


            <div className="img4">

            <div className='imm1'>
                <img src="./images/pic3.jpg" width="650px" style={{marginLeft:"100px", marginTop:"100px"}} data-aos="zoom-in" />
            </div>
            <div className='im3'>

                <p>Marble Collectibles</p>
                <h2>Supreme Artistry In</h2>
                <h4>EVERY STROKE</h4>



            </div>

            </div>

            <div className="img2">
            <div className='im1'>

            <p > Handcrafted Rugs</p>
            <h3>THAT ADORN YOUR FLOOR WITH</h3>
            <h2>TIMELESS CHARM</h2>
          



          </div>

            <div>
                <img src="./images/pic2.jpg" width="650px" data-aos="zoom-in" />
            </div>
            

            </div>

            <div className="img3">
            

            <div className='imm'>
                <img src="./images/pic1.jpg" width="650px" style={{marginLeft:"90px", marginTop:"100px"}}  data-aos="zoom-in"/>
            </div>

            <div className='im2'>

            <h2 >Handcrafted shawls</h2>

            <p >INDULGE IN THE SPLENDOUR OF</p>
            </div>
            

            </div>



            <div className='master'>
                <img src='./images/bg2.jpg'/> 
                </div>
            <div className='master1'>
                <div className='mass'>
                      <h3 className='h3'>Timeless Masterpieces Created by India's<br/> Highly Acclaimed Master Artisans</h3>
                      <div className='class1'>

                        <div className='change' style={{display:"flex"}}>
                            <p>1.</p>

                            <PublicIcon style={{ padding:"10px" , position:"relative" , bottom:"8px"}} id="ico"/>
     
                            <p>Curated from across <br/>the country</p>

                        </div>
                        

                        <div style={{display:"flex"}} className='change1'>
                            <p>2.</p>

                            <StarOutlineIcon style={{ padding:"10px", position:"relative" , bottom:"8px"}} id="ico"/>
     
                            <p>Premium quality at <br/>affordable prices</p>

                        </div>

                        <div style={{display:"flex"}} className='change2' >
                            <p>3.</p>

                            <WorkspacePremiumIcon style={{ padding:"10px" , position:"relative" , bottom:"8px"}} id="ico"/>
     
                            <p>Guaranteed Authenticity</p>

                        </div>

                        <div style={{display:"flex"}} className='change3'>
                            <p>4.</p>

                            <PeopleOutlineIcon style={{ padding:"10px" , position:"relative" , bottom:"8px"}} id="ico"/>
     
                            <p>Each design a legacy<br/> for generations</p>

                        </div>
                        


                      </div>



                </div>

                <div className='mass1'> 

                    <h3 style={{marginTop:"40px"}}>Meet the Maestros</h3>

                    <div style={{display:"flex"}} className='mms'>
                        <img src='./images/pic5.png' height="200px"/>
                        <img src='./images/pic6.png' height="200px"/>
                        <img src='./images/pic7.png' height="200px"/>
                    </div>
                </div>
                
                
                </div>   

                <div className='about'>
                     <h3>60+ Maestros</h3>
                     <h3>5000+ Lives Impacted</h3>
                     <h3>30+ Crafts</h3>
                     </div> 

                     <hr style={{position:"relative" , color: "#C08261"}}/>

                     <div className='div1'>

                        <h2>It's All Here!</h2>
                        <p>Check out our complete range of craft works</p>
                     </div>

                 <div className='pic' data-aos="fade-up">
                    <div>

                    <img src="./images/pic8.png" />
                    <p>Aari Embroidery</p>


                    </div>

                    <div>
                    <img src="./images/pic9.png" />
                    <p style={{position:"relative", left:"45px"}}>Ajrakh</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic10.png" />
                    <p style={{position:"relative", left:"5px"}}>Aksi Embroidery</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic11.png" />
                    <p style={{position:"relative", left:"12px"}}>Applique Work</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic12.png" />
                    <p style={{position:"relative", left:"40px"}}>Banarsi</p>

                        
                    </div>
                    <div>
                    <img src="./images/pic13.png" />
                    <p>Beaded Jewellery</p>

                        
                    </div>
                </div>


                <div className='pic' data-aos="fade-up">
                    <div>

                    <img src="./images/pic14.png" />
                    <p style={{position:"relative", left:"9px"}}>Block Printing</p>


                    </div>

                    <div>
                    <img src="./images/pic15.png" />
                    <p style={{position:"relative", left:"20px"}}>Blue Pottery</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic16.png" />
                    <p style={{position:"relative", left:"20px"}}>Bone Carving</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic17.png" />
                    <p>Bone Inlay on Wood</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic18.png" />
                    <p style={{position:"relative", left:"20px"}}>Brass Casting</p>

                        
                    </div>
                    <div>
                    <img src="./images/pic19.png" />
                    <p style={{position:"relative", left:"35px"}}>Glass Art</p>

                        
                    </div>
                
                    </div>   

                    <div className='pic' data-aos="fade-up">
                    <div>

                    <img src="./images/pic20.png" />
                    <p style={{position:"relative", right:"15px"}}>Hand Painted Leather</p>


                    </div>

                    <div>
                    <img src="./images/pic21.png" />
                    <p style={{position:"relative", right:"13px"}}>Hand Painted Marble</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic22.png" />
                    <p>Jaali Work on Wood</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic23.png" />
                    <p style={{position:"relative", left:"30px"}}>Kilim Rugs</p>

                        
                    </div>

                    <div>
                    <img src="./images/pic24.png" />
                    <p style={{position:"relative", left:"30px"}}>Madhubani</p>

                        
                    </div>
                    <div>
                    <img src="./images/pic25.png" />
                    <p>Miniature Paintings</p>

                        
                    </div>
                </div>    



                    <div className='product'>
                           

                      

                        <div className='pro1'>
                        <img src='./images/img11.jpg' height="250px" style={{position:"relative", left:"122px"}} className='divv'/>
                         <p >Shawls & Wraps</p>
                         </div>
                         

                     

                        <div className='pro2'>

                        <img src='./images/img22.jpg' height="250px" className='im' />
                        <p >Jewellery</p>
                        </div>

                        <div className='pro3'>

                        <img src='./images/img33.jpg' height="250px" style={{position:"relative", right:"25px"}} className='divv'/>
                        <p >Apparels</p>
                        </div>

                        <div className='pro4'>

                        <img src='./images/img44.jpg' height="250px" style={{position:"relative", right:"100px"}} className='divv'/>
                        <p>Home Decor</p>
                        </div>









                    </div>

                    <p className='our'>Our Most Loved Categories</p>
                     
                     
                    <button className='btn' onClick={donePayment}>VIEW ALL</button>
                


                    <p className='happy'>A Word from Our Happy Customers</p>

             <div className='cust'>

                <div>

                    <img src='./images/c2.png'/>

                    <p id='cust2'>The Quality of the Lamp is Vary Nice.<br/>Even Though it was a glass Product <br/>It did't Break in Transit.</p>
                     <p id='cust3'>Sheeba</p>
                     <p id='cust4'>Ranchi</p>
                </div>



                <div>

                < img src='./images/c1.png'/>

           <p id='cust2'>Genuinely happy with the bedsheet it looks Exactly<br/> the same as website with soft febric and pleasing<br/>  colors size of pillow is vary nice.</p>
           <p id='cust3'> Kashma Sharma</p>
           <p id='cust4'>Surat</p>
             
           </div>


             </div>


             <div style={{display:"flex", justifyContent:"space-around"}}>

<div className='stay'>

    <div>
<EmailOutlinedIcon style={{fontSize:"90px" , marginRight:"20px", marginBottom:"10px" ,marginTop:"-8px" ,color:"#C08261"}}/>
</div>

<div className='stay2'>

    <h3 style={{color:"#C08261"}}>Stay Connected</h3>
    <p style={{fontSize:"12px" , color:"#C08261"}}>Receive email updates on matters of craft and craftsmanship plus new<br/> product launches, discounts, and events.</p>
</div>



    
</div>

<div className='f1'>

    <EmailOutlinedIcon className='email'/>
    <input type="text" placeholder="Your email address..."/>
    <button>SUBSCRIBE</button>

</div>

</div>
      
 </section>
        
        
        </>
    )
}

export default Home