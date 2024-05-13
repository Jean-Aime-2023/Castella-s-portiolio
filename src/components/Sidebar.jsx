import React, { useState, useEffect } from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FaBagShopping, FaPhone, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [shouldHideSidebar, setShouldHideSidebar] = useState(false);

  const secIds = ["hero", "about", "workEx", "work", "examples"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 0;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const determineActiveSection = () => {
    for (let i = secIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(secIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(secIds[i]);
          break;
        }
      }
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 300);
    determineActiveSection();

    // Check if the footer is reached and hide the sidebar
    const footer = document.getElementById("footer");
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      if (footerRect.top <= window.innerHeight) {
        setShouldHideSidebar(true);
      } else {
        setShouldHideSidebar(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`h-full w-20 fixed top-0 flex items-center z-30 ${shouldHideSidebar ? 'hidden' : ''}`}>
      <div className='h-[700px] w-full bg-gray-400 flex items-center justify-center rounded-tr-full rounded-br-full'>
        <ul className='flex flex-col gap-20 [&_li]:cursor-pointer'>
          <li className={activeLink === secIds[0] ? "active" : "link"} onClick={() => scrollToSection(secIds[0])}>
            <Link to="/"><FaHome size={26} /></Link>
          </li>
          <li className={activeLink === secIds[1] ? "active" : "link"} onClick={() => scrollToSection(secIds[1])}>
            <Link to="/"><FaUser size={24} /></Link>
          </li>
          <li className={activeLink === secIds[2] ? "active" : "link"} onClick={() => scrollToSection(secIds[2])}>
            <Link to="/"><FaBagShopping size={24} /></Link>
          </li>
          <li className={activeLink === secIds[3] ? "active" : "link"} onClick={() => scrollToSection(secIds[3])}>
            <Link to="/"><FaPhone size={24} /></Link>
          </li>
          <li className={activeLink === secIds[4] ? "active" : "link"} onClick={() => scrollToSection(secIds[4])}>
            <Link to="/"><FaSearch size={24} /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
