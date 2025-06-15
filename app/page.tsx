// import Image from "next/image";
// import Contents from './containerinfo';
import Seorg from './Sergoeons.jpeg'
import Serrr from './image/ser.jpeg'
import Conf from './image/confi.jpeg'
import Image from 'next/image'
import './globals.css'
import '@/lib/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faArrowRight, faBone, faCheck, faCircleExclamation, faDna, faEye, faGlassCheers, faHeartPulse, faPhone, faPills, faStethoscope, faSyringe, faTooth } from '@fortawesome/free-solid-svg-icons';
import {areasSection} from "../lib/data/areasSection"
import {containerinfo} from  "../lib/data/containerinfo"

export default function Home() {
  const Container = containerinfo[0];
  const Container1 = containerinfo[1];
  const Container2 = containerinfo[2];
  const Container3 = containerinfo[3];

  const areasSect = areasSection[0];
  const areasSect1 = areasSection[1];
  const areasSect2 = areasSection[2];
  const areasSect3= areasSection[3];
  const areasSect4= areasSection[4];
  const areasSect5= areasSection[5];
  const areasSect6= areasSection[6];
  const areasSect7= areasSection[7];

  // const AreaSec = areasSection[0]; 
  return (
    <div style={{overflowX:'hidden',margin:"10px"}}>

    <div className=' relative left-[60%] flex gap-[20px] m-[10px] ' >
      <nav>
        <li style={{fontWeight:"800"}}>Home</li>
        <li style={{fontWeight:"800"}}>About Us</li>
        <li style={{fontWeight:"800"}}>Contact Us</li>
        <li style={{fontWeight:"800"}}>Donate</li>
      </nav>
      <div>
        {/* <FontAwe */}
      </div>
      <div>
        <button>Emergency</button>
      </div>
    </div>

      <div className='my-[180px]'>
          <div>
      <h2 className='w-[60%] text-7xl my-[30px]' >Transforming Lives,Restoring Your Health</h2>
      <p className='w-[45%] my-[30px]' > Embrace a world of comprehensive heslth care where your welbeing takes a center stage.At Zenciad, we're dedicated to providing you withpersonalized  and compasionate medical services</p>
    </div>

    <div className=' my-[30px] flex  rounded-2xl bg-purple-300  ' style={{width:'12%',padding:'15px', textWrap:"nowrap",gap:"10px"
    ,borderRadius:"50px"}} >
         <FontAwesomeIcon icon={faArrowRight} style={{backgroundColor:"white", borderRadius:"50%", padding:'10px'}}/>
        <button>Learn More</button>
      </div>

          <div className='relative left-[40px] flex gap-[10px]' style={{top:"80px"}}>
          <div style={{position:"relative", top:"30px"}}>

                         <FontAwesomeIcon icon={faCircleExclamation} style={{fontSize:'40px'}}/>

          </div>

          <div className='' style={{position:"relative", left:"80px"}}>
            <h3 className='my-[10px]' style={{fontWeight:"800"}}>Find a location nearby </h3>
            <p className='w-[80%]'> Zenciad medical center operates more than 120 locations. Find the nearest...</p>
          </div>

          <div  style={{position:"relative", top:"30px"}}>
            
            <FontAwesomeIcon icon={faArrowRight}  style={{fontSize:'40px'}}/>
          </div>
      </div>

      </div>
      
    
      
   
      


      <div className='my-[90px] flex justify-between' style={{margin:'300px 0px', position:"relative", top:'50px'}}>
        <div className="bg-blue-300 rounded-4xl" style={{margin:'40px', padding:"30px",lineHeight:'40px'}}>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faCircleExclamation} style={{fontSize:"30px"}}/>
            </div>
            <div style={{fontWeight:"800"}}>
              {Container.title}
            </div>
          </div>
          <div>
            {Container.content}
          </div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Learn More
            </div>
          </div>
        </div>

        <div className="bg-green-300 rounded-4xl" style={{margin:'40px', padding:"30px",lineHeight:'40px'}}>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faStethoscope}  style={{fontSize:"30px"}}/>
            </div>
            <div style={{fontWeight:"800"}}>
              {Container1.title}
            </div>
          </div>
          <div>
            {Container1.content}
          </div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Learn More
            </div>
          </div>
        </div>

        <div className="bg-purple-300 rounded-4xl" style={{margin:'40px', padding:"30px",lineHeight:'40px'}}>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faAmbulance}  style={{fontSize:"30px"}}/>
            </div>
            <div style={{fontWeight:"800"}}>
              {Container2.title}
            </div>
          </div>
          <div>
            {Container2.content}
          </div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Learn More
            </div>
          </div>
        </div>

        <div className="bg-red-300 rounded-4xl" style={{margin:'40px', padding:"30px",lineHeight:'40px'}}>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faPhone}  style={{fontSize:"30px"}}/>
            </div>
            <div style={{fontWeight:"800"}}>
              {Container3.title}
            </div>
          </div>
          <div>
            {Container3.content}
          </div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Learn More
            </div>
          </div>
        </div>

      </div>

    <div className='flex justify-between' style={{margin:'120px 50px'}}>
      <div>
        <h3>About Zencaid</h3>
        <div style={{margin:"40px 0", fontWeight:'500'}} className='text-5xl' >
          <h3  style={{margin:"10px 0"}}>We Provide Finnest Patient's</h3>
          <h3 style={{fontWeight:'700'}} >Care & Amenities</h3>
        </div>

        <div className='w-[45%] my-8'>
          <p>Embrace a world of comprehensive health where your well being takes center stage. At Meca, we're dedicated to providing you with personalised and compasionate medical services</p>
        </div>

        <div className='grid grid-cols-2 MinLiboss my-14' style={{listStyle:"none"}}>
          <div>
            <div className='flex gap-4 '>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
                 <li>Seamless Care</li>
            </div>
           <div  className='flex  gap-4'>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
            <li>Warm and Welcoming Environment</li>

           </div>
           <div  className='flex  gap-4'>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
            <li>Comprehensive Care</li>
           </div>

           <div  className='flex gap-4 '>
               <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
            <li>Expert Doctors</li>
            
           </div>
          </div>
          <div>
            <div  className='flex  gap-4'>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
              
            <li>Patient-Centered Care</li>
            </div>
            <div  className='flex gap-4 '>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
              
            <li>Personalised Approach</li>
            </div>
            <div  className='flex  gap-4'>
             <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
              
            <li>Cutting-Edge Technology</li>
            </div>
            <div  className='flex gap-4'>
              <FontAwesomeIcon icon={faCheck} className=' relative top-1'/>
              
            <li>Positive Reviews</li>
            </div>
          </div>
        </div>

        <div className='w-[40%] my-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fuga aspernatur odit aut, aliquid saepe dolorem assumenda nostrum porro! Labore.</p>
        </div>

        <div className='my-10 rounded-4xl bg-purple-300 ' style={{width:'20%', height:'55px', }} >
         <FontAwesomeIcon icon={faArrowRight} style={{backgroundColor:"white", borderRadius:"50%", padding:'10px', position:'relative', top:'10px', left:'6px'   }}/>
          <button style={{position:'relative', left:'10px' }}>More About Us</button>
        </div>
      </div>

      <div className='relative' >
      <Image src={Seorg} alt='These Are Seorgeons at work' width={800} height={100} style={{top:"140px", position:"relative", height:"70%", borderRadius:"30px" }}  />

      </div>
    </div>



    <div>

      <div className='aligne-center text-center my-15'>

      <p>Our Services</p>
      <h3 style={{fontSize:"50px"}}>We Serve in Different <span style={{fontWeight:"700"}}>Areas For Our Patient</span> </h3>
      </div>

      <div className='grid grid-cols-4 gap-18 m-10  leading-[40px] ' >
        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faGlassCheers} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect.title}</div>
          </div>
           <div>{areasSect.content}</div>

           <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>

        </div>
        
        <div className=' rounded-4xl'>  
         {/* bg-orange-700 */}
          <div>
            <div>
              <FontAwesomeIcon icon={faEye} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect1.title}</div>
          </div>
          <div>{areasSect1.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faTooth} className='text-[50px]'/>
            </div>
           <div style={{fontWeight:"900"}}>{areasSect2.title}</div>
          </div>
          <div>{areasSect2.content}</div>
           <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faSyringe} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect3.title}</div>
          </div>
          <div>{areasSect3.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faBone} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect4.title}</div>
          </div>
         <div>{areasSect4.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faDna} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect5.title}</div>
          </div>
         <div>{areasSect5.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>
        
         <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faHeartPulse} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect6.title}</div>
          </div>
          <div>{areasSect6.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div>
              Read More
            </div>
          </div>

        </div>


         <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faPills} className='text-[50px]'/>
            </div>
            <div style={{fontWeight:"900"}}>{areasSect7.title}</div>
          </div>
          <div>{areasSect7.content}</div>
          <div className="flex gap-[20px]">
            <div>
              <FontAwesomeIcon icon={faArrowRight}/>
            </div>
            <div>
              Read More
            </div>
          </div>
        </div>

      </div>
    </div>
    
  <div  className='' style={{margin:'300px 0px'}} >
    <div className='' style={{overflow:'hidden', position:'relative', left:'160px'}} >
      <p style={{fontWeight:'800'}}>Your Health is our top priority</p>
      <div className='w-[60%] text-[50px]'>
        Our track record speaks for itself. Many individuals have chosen <span style={{opacity:"0.4"}} >our medical center and have had positive,transformative experience.</span> 
      </div>
    </div>

    <div className='flex justify-between themlastimgss' >
      <div>
        <div>
          <Image src={Conf} alt='Doctors Talking to thier patient' className='rounded-4xl'  style={{width:'35rem', height:'310px'}}/>
        </div>
        <div></div>
      </div>
      <div>
        <div></div>
        <div>

        </div>
        <div>
           <Image src={Serrr} alt='Doctors Talking to thier patient' height={400} width={500} className='rounded-4xl'  style={{width:'35rem', height:'350px'}} />
        </div>  
      </div>
    </div>
  
  </div>

    </div>
  );
}
