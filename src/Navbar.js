import logo from './images/logo.svg'
import { FaBars,FaCaretRight } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'
const Navbar = () => {

    const { openSidebar, openSubmenu,closeSubmenu } = useGlobalContext();
    

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const coordinate = e.target.getBoundingClientRect();
        const center = (coordinate.left + coordinate.right) / 2;
        const bottom = coordinate.bottom - 3;

        openSubmenu(page, { center, bottom });
    }


    const handleSubmenu = (e) => {
        e.target.classList.forEach(el => {
          if (!el.includes('link') && !el.includes('btn') ) {
              closeSubmenu();
          }
        } )
      }
    

    return (
        <nav className='navbar' onMouseOver={handleSubmenu}>
        <a href="#" className="header">
            <img src={logo} alt="logo" />
        </a>
        <button className='navbar-toggle' onClick={openSidebar}>
            <FaBars/>
        </button>
            <ul className="navbar-links">
                <li>
                    <button className='btn link' onMouseOver={displaySubmenu}>
                    products
                    </button>
                </li>
                <li>
                    <button className='btn link' onMouseOver={displaySubmenu}>
                    developers
                    </button>
                </li>
                <li>
                    <button className='btn link' onMouseOver={displaySubmenu}>
                    company
                    </button>
                </li>
        </ul>
        <button className='btn sign-btn'>Sign in</button>
</nav>
    );
}
 
export default Navbar;

/*

*/

/**
        <nav className="navbar" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="strip" className='nav-logo' />
            <button className='navbar-toggle' onClick={openSidebar}>
              <FaBars/>
            </button>
          </div>
          <ul className="navbar-links">
            <li>
              <button
                className='links'
                onMouseOver={handleSubmenu}
              >
                products
              </button>
            </li>
            <li>
              <button
              className='link-btn'
              onMouseOver={handleSubmenu}
            >
                developers
              </button>
            </li>
            <li>
              <button
              className='link-btn'
              onMouseOver={handleSubmenu}
            >
                company
              </button>
            </li>
          </ul>
          <button className='btn signin-btn'>Sign-in</button>
        </div>
      </nav>
 */