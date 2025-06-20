import {DoctorAppointment} from '@/lib/data/DoctorsPinfo/DoctorAppointment'
import './DoctorsApp.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms,faMessage,faPhone } from '@fortawesome/free-solid-svg-icons';
import Woman from '../image/woman.jpeg'
export default function Doctors() {
    const DAppointment = DoctorAppointment[0]
    const DAppointment1 = DoctorAppointment[1]
    const DAppointment2 = DoctorAppointment[2]
    const DAppointment3 = DoctorAppointment[3]
    const DAppointment4 = DoctorAppointment[4]
    const DAppointment5 = DoctorAppointment[5]
    const DAppointment6 = DoctorAppointment[6]
    const DAppointment7 = DoctorAppointment[7]
    return (
        <div>
        <div className="flex items-start ">
            <div>
            <h1 className="text-2xl font-bold mb-5 " style={{opacity:"0.7"}}>APPOINTMENTS</h1>
            <p className="font-light">You have the following appointments today</p>

            </div>

            <div>
                {/* <div>icon</div> */}
                {/* <div>Time</div> */}
            </div>
        </div>

        <div className='CheifeAppint'>
            <div className='AppointmentConstainers flex justify-around text-nowrap'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment.Name}, {DAppointment.Age}</h3>
                    <p>{DAppointment.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                    <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                   
                </div>
                <div style={{position:"relative", left:"120px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'30%', borderRadius:"50%"}}/>
                </div>
            </div>

            <div className='AppointmentConstainers flex justify-around text-nowrap '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment1.Name}, {DAppointment1.Age}</h3>
                    <p>{DAppointment1.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                    <div>
                      <FontAwesomeIcon icon={faMessage} style={{margin:'0 5px'}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
               <div style={{position:"relative", left:"120px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'30%', borderRadius:"50%"}}/>
                </div>
            </div>

           <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment2.Name}, {DAppointment2.Age}</h3>
                    <p>{DAppointment2.Diagnosis}</p>
                     <div className='SubbabaDPP'>
                             <div>
                     <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"85px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'40%', borderRadius:"50%"}}/>
                </div>
            </div>

            <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment3.Name}, {DAppointment3.Age}</h3>
                    <p>{DAppointment3.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                        <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"85px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'40%', borderRadius:"50%"}}/>
                </div>
            </div>

           <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment4.Name}, {DAppointment4.Age}</h3>
                    <p>{DAppointment4.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                       <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"85px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'40%', borderRadius:"50%"}}/>
                </div>
            </div>

          <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment5.Name}, {DAppointment5.Age}</h3>
                    <p>{DAppointment5.Diagnosis}</p>
                 <div className='SubbabaDPP'>
                             <div>
                       <FontAwesomeIcon icon={faMessage}style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                  <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                 <div style={{position:"relative", left:"120px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'35%', borderRadius:"50%"}}/>
                </div>
            </div>

            <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment6.Name}, {DAppointment6.Age}</h3>
                    <p>{DAppointment6.Diagnosis}</p>
                   <div className='SubbabaDPP'>
                             <div>
                         <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"85px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'40%', borderRadius:"50%"}}/>
                </div>
            </div>

            <div className='AppointmentConstainers flex justify-around '>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3 style={{textWrap:'nowrap'}}>{DAppointment7.Name}, {DAppointment7.Age}</h3>
                    <p>{DAppointment7.Diagnosis}</p>
                     <div className='SubbabaDPP'>

                     <div>
                        <FontAwesomeIcon icon={faMessage} style={{margin:"0 5px"}}/>
                    <button>Chat</button>

                    </div>
                    <div>
                 <FontAwesomeIcon icon={faPhone} style={{margin:"0 5px"}}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
                <div style={{position:"relative", left:"120px", top:"30px"}}>
                    <Image src={Woman} alt="this is an image of a patient"  style={{maxWidth:'35%', borderRadius:"50%"}}/>
                </div>
            </div>


        </div>
        </div>
    );
}