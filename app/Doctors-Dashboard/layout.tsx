'use client';

import Link from 'next/link';
import './layoutstyle.css'
import {DoctorsName} from '@/lib/data/DoctorsName'; //
//  Check that this matches the file & export
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson,faMessage,faPhone,faBolt,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  const doctor = DoctorsName[0]; // Assuming it's an array
  // const time = getDateTime(); // you can use this if you have a utility function

  return (
    <div className="flex h-screen" style={{overflowX:"hidden"}}>
      <aside className="w-64 bg-white text-black p-4">
        <div className='text-center'>
            <h2 className="text-xl font-bold mb-1">
          Welcome, {doctor?.name || 'Unknown'}
        </h2>
        <p style={{fontSize:"20px", fontWeight:"600", opacity:"0.5"}}>{doctor.specialty}</p>
        </div>
      
        <ul className="space-y-2">
          {/* i Would add links to the icon so when the page is shrinked the icons would be showing instaed of the text and you can still click on it to naviage to the page */}
          <div >
            <div> 
             {/* <FontAwesomeIcon icon={faCalendar}/> */}

            </div>
          <li>
            <Link href="/dashboard">Appointments</Link></li>
          </div>
           

            {/* <FontAwesomeIcon icon={faPerson}/> */}
          <li>
            <Link href="/dashboard/reports">My Patients</Link>
            
            </li>

            {/* <FontAwesomeIcon icon={faMessage}/> */}
          <li>
            <Link href="/dashboard/users" >Chat</Link>
            
            </li>
            {/* <FontAwesomeIcon icon={faPhone}/> */}
          <li>
            <Link href="/dashboard/settings">Calls</Link></li>

            {/* <FontAwesomeIcon icon={faBolt}/> */}
          <li>
            <Link href="/dashboard/messages">Setting</Link>
            
            </li>
        </ul>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
