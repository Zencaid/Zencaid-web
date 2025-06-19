'use client';

import Link from 'next/link';
import {DoctorsName} from '@/lib/data/DoctorsName'; // Check that this matches the file & export

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  const doctor = DoctorsName[0]; // Assuming it's an array
  // const time = getDateTime(); // you can use this if you have a utility function

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white text-black p-4">
        <h2 className="text-xl font-bold mb-4">
          Welcome, {doctor?.name || 'Unknown'}
        </h2>
        <ul className="space-y-2">
          <li><Link href="/dashboard">Appointments</Link></li>
          <li><Link href="/dashboard/reports">My Patients</Link></li>
          <li><Link href="/dashboard/users">Chat</Link></li>
          <li><Link href="/dashboard/settings">Calls</Link></li>
          <li><Link href="/dashboard/messages">Setting</Link></li>
        </ul>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">
        {children}
      </main>
    </div>
  );
}
