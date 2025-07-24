
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
   <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black flex justify-around py-2 shadow-md border-t-2 border-gray-700 md:hidden">
  <Link to="/home" className="flex flex-col items-center text-gray-600 hover:text-purple-400">
    <i className="fa-solid fa-house text-lg"></i>
    <span className="text-xs">Home</span>
  </Link>
  <Link to="/about" className="flex flex-col items-center text-gray-600 hover:text-purple-400">
    <i className="fa-solid fa-user text-lg"></i>
    <span className="text-xs">About</span>
  </Link>
  <Link to="/project" className="flex flex-col items-center text-gray-600 hover:text-purple-400">
    <i className="fa-solid fa-code text-lg"></i>
    <span className="text-xs">Projects</span>
  </Link>
  <Link to="/acheive" className="flex flex-col items-center text-gray-600 hover:text-purple-400">
    <i className="fa-solid fa-trophy text-lg"></i>
    <span className="text-xs">Achievements</span>
  </Link>
  <Link to="/connect" className="flex flex-col items-center text-gray-600 hover:text-purple-400">
    <i className="fa-solid fa-envelope text-lg"></i>
    <span className="text-xs">Contact</span>
  </Link>
</nav>

      </>
  );
}


export default Nav;
