import React,{useState} from 'react'
import classes from './Home.module.css'
import image1 from './desktop-image-hero-1.jpg'
import image2 from './desktop-image-hero-2.jpg'
import image3 from './desktop-image-hero-3.jpg'
import arrow from './icon-arrow.svg'
import right from './icon-angle-right.svg'
import left from './icon-angle-left.svg'
import dark from './image-about-dark.jpg'
import light from './image-about-light.jpg'
import logo from './logo.svg'
import close from './icon-close.svg'
import ham from './icon-hamburger.svg'
const Home=()=>{
    const [val,setVal]= useState(0)
    const arr=[image1, image2, image3]
    const [show, setShow]= useState(false)

    const obj=[
        {
            'id':1,
            'heading':'Discover innovative ways to decorate',
            'paragraph':'We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you have. '
        },
        {
            'id':2,
            'heading':'We are available all across the globe',
            'paragraph':"With shares all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question? Don’t hesitate to contact us today."
        },
        {
            'id':3,
            'heading':'Manufactured with the best materials',
            'paragraph':"Our modern furniture store provide a high level of quality. our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible, With three decades of experience in this industry, we understand what customers want for their home and office."
        }
          
    ]
    const Right=()=>{
   if(val>=2){
    return val
   }
   else if(val<2){
  setVal((val)=>{return val+1})
   }
    }
    const Left=()=>{
        if(val===0){
            return val
           }
           else if(val>0){
          setVal((val)=>{return val-1})
           }
    }
    const Close=()=>{
         setShow((val)=>{
            return !val
         })
    }
    
    return  <React.Fragment>
        
<div className={classes.flex}>
<div className={classes.div}>
<div className={classes.block1} style={{backgroundImage:`url(${arr[val]})`, backgroundSize:'cover'}}>
    <ul className={classes.ul}>
        <li>
        <img src={ham} alt='hamburger' onClick={Close} className={classes.ham}/>
        </li>
        <li><img src={logo} alt='logo'/></li>
        <li className={classes.li}>home</li>
        <li className={classes.li}>shop</li>
        <li className={classes.li}>about</li>
        <li className={classes.li}>contact</li>
    </ul>
    <div className={classes.controll}>
            <div className={classes.case} onClick={Left}>
            <img src={left} className={classes.lr} alt='left arrow'/>

            </div>
            <div className={classes.case} onClick={Right}>
            <img src={right} className={classes.lr} alt='right arrow'/>
            </div>
        </div>
</div>
<div className={classes.block2}>
    <p className={classes.p1}>{obj[val]['heading']}</p>
    <p className={classes.p2}>{obj[val]['paragraph']}</p>
        <div className={classes.div3}>
            <p className={classes.p3}>shop now </p>
            <img src={arrow} alt='arrow' className={classes.img}/>
        </div>
        <div className={classes.control}>
            <div className={classes.case} onClick={Left}>
            <img src={left} className={classes.lr} alt='left arrow'/>

            </div>
            <div className={classes.case} onClick={Right}>
            <img src={right} className={classes.lr} alt='right arrow'/>
            </div>
        </div>

</div>
</div>

<div className={classes.div1}>
<div className={classes.block3}  style={{backgroundImage:`url(${dark})`, backgroundSize:'cover'}}></div>
<div className={classes.block4}>
<p className={classes.p5}>about our furniture </p>
    <p className={classes.p2}>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that be express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p></div>
<div className={classes.block5}  style={{backgroundImage:`url(${light})`, backgroundSize:'cover'}}></div>

</div>

</div>
<div className={show?`${classes.overlay}`:`${classes.none}`}>
            <img src={close} alt='close'onClick={Close} className={classes.img3}/>
            <p className={classes.ov}>home</p>
            <p className={classes.ov}>shop</p>
            <p className={classes.ov}>about</p>
            <p className={classes.ov}>contact</p>
        </div>
        <div onClick={Close} className={show?`${classes.backdrop}`:`${classes.none}`}></div>
    </React.Fragment>
}
export default Home