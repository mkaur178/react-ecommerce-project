import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const About=()=>{
    return(
        <>
       <img src="./images/AboutBanner1.jpg" height="489.4px"/>

       <h3 style={{marginLeft:"300px",marginBottom:"50px", marginTop:"70px"}}>Homely Heaven was born out of a passion to honour India’s ageless tradition of </h3>
        <h3 style={{marginLeft:"290px", marginTop:"-45px"}}>crafts and craftsmanship and to ensure that their relevance is sustained in today’s</h3>
        <h3 style={{marginLeft:"610px", marginTop:"3px"}}>world.</h3>
        <div style={{marginTop:"50px"}}>

       <p style={{marginLeft:"235px"}}>The online platform – one of its kind in India – effectively provides India’s peerless artisans with a platform to</p>
       
       <p style={{marginLeft:"245px" , marginTop:"5px"}}>showcase their extraordinary talent and to connect with lovers of their craft while introducing a whole new </p>
       
       <p style={{marginLeft:"420px" , marginTop:"5px"}}>generation of people to our country’s beautiful legacy.</p>
       </div>

       <div className="about">

        <div>
        <img src="./images/about1.jpg"/>


        </div>

        <div>
            <p>
            Homely Heaven curates some of the finest handicrafts in India from<br/> the ateliers of master artisans across the length and breadth of <br/>the country. The eponymous ‘maestros’ of Homely Heaven are <br/>master craftspeople who have tirelessly and painstakingly<br/> mastered ancient techniques and skills over years to hone their <br/>talent. Of the 91 master crafts persons associated with us, three<br/> are Padmashree awardees, 11 are Shilp Guru, 66 National Award<br/> winners and 11 the most renowned artisans in their field. Each<br/> design that you buy from us represents a story – of craftsmanship<br/> perfected over centuries and preserved for generations to come.<br/> From Kutch weaves to Kilim rugs, from Thewa to Meenakari, from<br/>  papier-mâché to terracotta pottery, there are currently 31 <br/>handicraft forms that we nurture, with many more being added<br/> steadily to our list. We offer the guarantee of authenticity and<br/> premium quality on each product as we deal directly and only <br/>with master craftspeople rather than intermediaries; our products <br/>are therefore available at price points that work for our<br/> community of artisans and for you.
            </p>



        </div>

       </div>


       <div className="about1">

        

        <div>

            <h3>Our Philosophy</h3>
            <p>
            We believe in the values embedded in the timeless crafts of<br/> India and through our work, we aim to preserve these invaluable <br/>traditions which keep us rooted in our soil and connected to<br/> our past. At Homely Heaven we work tirelessly to give a platform<br/> to artisans, who through their passion and labour keep alive <br/>these centuries-old crafts. They are the true vessels of cultural <br/>knowledge and deserving of every applause they receive. It is<br/> our mission to give their products of love and labour the rightful<br/> place in our homes and hearts.
            </p>
</div>

        <div>
        <img src="./images/about2.jpg"/>


        </div>

       </div>


       <div className="about2">

        <div>
        <img src="./images/about3.jpg"/>


        </div>

        <div>

            <h3>Our Values</h3>
            <p>
            Homely Heaven as a team is built on values of preservation and <br/>reverence. Through our work, we preserve the cultural reservoir <br/>that our invaluable and diverse crafts form and our efforts are <br/>centred around spreading this joy to an audience who appreciates <br/>the stories captured in these exquisite artefacts. All our products <br/>come with a tag chronicling the history of the craft to share with <br/>our customers the legacy of our traditional crafts. At the same time,<br/> an art form becomes what it is only through the practised hand of its <br/>artist. At Homely Heaven, we believe in honouring the Heaven who<br/> with their time-tested wisdom and years of practice create these<br/> handicrafts which form our link to the larger society and act as a <br/>cultural heirloom passed onto us by our ancestors. To this end, we <br/>include a snippet about the artisan with each of our products to share<br/> with our customers, the hands that created these marvels and their tales.
            </p>



        </div>

       </div>


       <h2 style={{marginTop:"70px", marginBottom:"80px",marginLeft:"600px"}}>Our Founders</h2>


       <div className="founder">

        <div>
            <img src="./images/rec1.jpg"/>

            <h3>Ms. Akansha Saxena </h3>
            <p>With over 17 years of experience in the apparel<br/> industry, spanning sourcing, merchandising and <br/>quality, Akansha has a passion for curating the <br/>very best of Indian handicrafts. Having previously<br/> worked as the Business Head of a leading<br/>sourcing industry in India, she has honed the<br/> skills, experience and wisdom to provide India’s <br/>master craftsmen the platform and pedestal they <br/>rightly deserve. Through Craft Maestros, she is <br/>aiming to create a paradigm shift in this sector.</p>
         </div>

        <div>

        <img src="./images/rec2.png"/>


        <h3>Mr. Ajay Vir Singh </h3>
         <p>Ajay is an entrepreneur with over 20 years of <br/>experience. With many ‘firsts’ and awards to his <br/>name, he gained the reputation of being a<br/> ‘business multiplier’ with an unforgiving eye for <br/>detail. Ajay is an avid reader who dwells in the cosy<br/> corners of philosophy, poetry and literature. He <br/>believes that art is the vehicle of meditation and<br/> those who create it are carriers of divine forces.<br/> And for someone who considers it sacred, Homely<br/>Heaven is Ajay’s way of taking a holy dip in the <br/>glorious river of art and craft.</p>

</div>
       </div>




<div style={{display:"flex", justifyContent:"space-around"}}>

<div style={{display:"flex", justifyContent:"space-around"}}>

    <div>
<EmailOutlinedIcon style={{fontSize:"90px" , marginRight:"20px", marginBottom:"10px" ,marginTop:"-8px" ,color:"#C08261"}}/>
</div>

<div>

    <h3 style={{color:"#C08261"}}>Stay Connected</h3>
    <p style={{fontSize:"12px" , color:"#C08261"}}>Receive email updates on matters of craft and craftsmanship plus new<br/> product launches, discounts, and events.</p>
</div>



    
</div>

<div className='f1'>

    <EmailOutlinedIcon style={{fontSize:"40px" , position:"relative", right:"30px",top:"20px",color:"#C08261"}}/>
    <input type="text" placeholder="Your email address..."/>
    <button>SUBSCRIBE</button>





</div>







</div>
      



        
        
        </>
    )
}

export default About;