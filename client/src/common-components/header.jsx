import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton, useAuth } from '@clerk/clerk-react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css";

const clerkEnabled = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.startsWith('pk_'));

function ClerkAuthButtons({ onLogout }) {
  const { isSignedIn, signOut } = useAuth();

  const handleLogout = async () => {
    localStorage.removeItem('user');

    if (isSignedIn) {
      await signOut();
    }

    onLogout();
  };

  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="header-btn header-login">Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <button className="header-btn header-login" onClick={handleLogout}>Logout</button>
      </SignedIn>
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  return (
    <header className="header-container">
      <Link to="/" className="header-logo">
        <img src="/png-jpg/logo/SeaGuardian Logo.png" alt="SeaGuardian Logo" />
      </Link>

      <nav className={`header-nav ${menuOpen ? 'header-nav-active' : ''}`}>
        <ul className="header-menu">
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/our-program">Our Program</Link></li>
          <li><Link to="/the-latest">The Latest</Link></li>
          <li><Link to="/analyze-img">Analyze Image</Link></li>
          <li><Link to="/EWaste">Waste tracker</Link></li>
       
        </ul>
        <div className="header-buttons">
          <Link to="/Locator">
          <button className="abc-btn abc-donate">Locator</button>
          </Link>

          
          <Link to="/donate">
            <button className="header-btn header-donate">Donate</button>
          </Link>

          {clerkEnabled ? <ClerkAuthButtons onLogout={handleLogout} /> : null}
        </div>
      </nav>

      <div className="header-hamburger" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
      </div>
    </header>
  );
}

export default Header;
