import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavigationLinks from "./NavigationLinks";
import Akshat_logo from "../../assets/CompanyLogo/Akshat_logo.png";
import { Typewriter } from 'react-simple-typewriter'
export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setTimeout(() => {
        setIsMounted(true);
      }, 100);
    } else {
      setIsMounted(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="text-textHeaderColor">
      <div className="flex items-center justify-between ">
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden block focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden lg:block"
        } lg:flex items-center justify-between`}
      >
        <div className="lg:flex items-center hidden">
          <div className="logo w-24 h-24 h-12 flex justify-center cursor-pointer">
            <img
              src={Akshat_logo}
              alt="Profile logo"
              className="rounded-full w-20 bg-transparent"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
          {(isHovered)?<Typewriter loop={false} words={['AKSHAT CHAWLA']}/>:""}
        </div>
        <NavigationLinks
          closeMobileMenu={closeMobileMenu}
          isMobileMenuOpen={isMobileMenuOpen}
          isMounted={isMounted}
        />
      </div>
    </header>
  );
}
