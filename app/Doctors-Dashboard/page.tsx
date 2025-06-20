import {DoctorAppointment} from '@/lib/data/DoctorsPinfo/DoctorAppointment'
import './DoctorsApp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms,faMessage,faPhone } from '@fortawesome/free-solid-svg-icons';
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
            <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment.Name}, {DAppointment.Age}</h3>
                    <p>{DAppointment.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                    <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                   
                </div>
            </div>

            <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment1.Name}, {DAppointment1.Age}</h3>
                    <p>{DAppointment1.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                      <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

           <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment2.Name}, {DAppointment2.Age}</h3>
                    <p>{DAppointment2.Diagnosis}</p>
                     <div className='SubbabaDPP'>
                             <div>
                     <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

            <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment3.Name}, {DAppointment3.Age}</h3>
                    <p>{DAppointment3.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                        <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                    <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

           <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment4.Name}, {DAppointment4.Age}</h3>
                    <p>{DAppointment4.Diagnosis}</p>
                    <div className='SubbabaDPP'>
                             <div>
                       <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

          <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment5.Name}, {DAppointment5.Age}</h3>
                    <p>{DAppointment5.Diagnosis}</p>
                 <div className='SubbabaDPP'>
                             <div>
                       <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                  <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

            <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment6.Name}, {DAppointment6.Age}</h3>
                    <p>{DAppointment6.Diagnosis}</p>
                   <div className='SubbabaDPP'>
                             <div>
                         <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                   <div>
                   <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>

            <div className='AppointmentConstainers'>

                {/* <div>Time</div> */}
                <div>
                    
                    <h3>{DAppointment7.Name}, {DAppointment7.Age}</h3>
                    <p>{DAppointment7.Diagnosis}</p>
                     <div className='SubbabaDPP'>

                     <div>
                        <FontAwesomeIcon icon={faMessage}/>
                    <button>Chat</button>

                    </div>
                    <div>
                 <FontAwesomeIcon icon={faPhone}/>
                     <button>Call</button>
                   </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
}