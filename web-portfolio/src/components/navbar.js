import { Link as ScrollLink } from 'react-scroll';
import logo from '../media/favicon-32x32.png';

const Header = () => (
    <header className='nav-header'>
        <nav>
            <div className="nav-content">
                <div className="nav-logo">
                    <a href="#">
                        <img src={logo} alt="Logo" />
                        Andrew Chanthakoun
                        </a>
                </div>
                <ul className="nav-links">
                    <li>
                        <ScrollLink to="home" smooth={true} duration={500}>
                            Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="about" smooth={true} duration={500}>
                            About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="skills" smooth={true} duration={500}>
                            Skills
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            Projects
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to="contact" smooth={true} duration={500}>
                            Contact
                        </ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  );

export default Header;