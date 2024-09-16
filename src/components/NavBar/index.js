import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/Logo-J.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUserCircle,  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


const NavBar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
    <img src={LogoJ} alt="logo"/>
    </Link>
    <nav>
    <NavLink exact="true" activeclassname="active" className="home-link" to='/'>
    <FontAwesomeIcon icon={faHome} color='#white'/> 
    </NavLink>
    <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
    <FontAwesomeIcon icon={faUserCircle} color='#white'/>
</NavLink>
<NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
    <FontAwesomeIcon icon={faEnvelope} color='#white'/>
</NavLink>
    </nav>
    <ul>
        <li>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/jonathon-toppert-129347216/'>
                <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
            </a>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://github.com/jonathontoppert'>
                <FontAwesomeIcon icon={faGithub} color="#ffffff" />
            </a>
            <a target='_blank' 
            rel='noreferrer' 
            href='https://www.linkedin.com/in/jonathon-toppert-129347216/'>
                <FontAwesomeIcon icon={faYoutube} color="#ffffff" />
            </a>
        </li>
    </ul>
</div>
)
export default NavBar