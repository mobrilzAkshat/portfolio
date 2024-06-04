import { LuSearchCode } from "react-icons/lu";
import './PortfolioLoader.css'; 

export default function Loader() {
  return (
    <div className="loader">
      <div className="logo-container">
        <LuSearchCode className="rocket-icon" />
      </div>
      <div className="loading-text">
        <div className="dot-flashing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
