// import Image from "next/image";

import Profile from '../components/Profile';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <Profile/>
            <Projects/>
        </div>
    );
}
