// CircularButtons.jsx
import { NavHashLink } from "react-router-hash-link";

const CircularButtons = () => {
  return (
    <div className="flex justify-center items-center pt-20 space-x-4">
      <div className="relative group">
        <NavHashLink to="/#homeAbout" smooth>
          <div className="w-40 h-40 bg-red-300 rounded-full flex items-center justify-center text-white text-center text-lg font-semibold transition-transform transform group-hover:scale-110">
            learn more about me
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 text-white">
            &darr;
          </div>
        </NavHashLink>
      </div>
      <div className="relative group">
        <NavHashLink to="/#experience" smooth>
          <div className="w-40 h-40 bg-yellow-300 rounded-full flex items-center justify-center text-white text-center text-lg font-semibold transition-transform transform group-hover:scale-110">
            Experience
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 text-white">
            &darr;
          </div>
        </NavHashLink>
      </div>
      <div className="relative group">
        <NavHashLink to="/#skills" smooth>
          <div className="w-40 h-40 bg-green-300 rounded-full flex items-center justify-center text-white text-center text-lg font-semibold transition-transform transform group-hover:scale-110">
            Skills
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 text-white">
            &darr;
          </div>
        </NavHashLink>
      </div>
    </div>
  );
};

export default CircularButtons;
