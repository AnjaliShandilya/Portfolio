
import {Link} from 'react-router-dom'

function Section() {
  return (
    <>
      <nav className="bg-black text-white lg:w-5/12 w-8/12 m-auto py-4 justify-evenly flex   rounded-full drop-shadow-[0_1px_3px_rgba(168,85,247,0.7)]  shadow-xl text-base">
        <Link to="/home" className="hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 font-medium focus:border-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 font-medium">About</Link>
        <Link to="/project" className="hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 font-medium">Project</Link>
        <Link to="/acheive" className="hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 font-medium">Achievements</Link>
        <Link to="/connect" className="hover:text-purple-600 border-b-2 border-transparent hover:border-purple-600 font-medium">Connect</Link>
      </nav>
      </>
  );
}


export default Section;
