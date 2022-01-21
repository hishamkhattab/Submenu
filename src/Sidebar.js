import { FaRegWindowClose } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {

    const { closeSidebar, isSidebarOpen } = useGlobalContext();
    
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-container show' : 'sidebar-container'}`}>
            <div className="sidebar">
                <button className="close-tag" onClick={closeSidebar}>
                    <FaRegWindowClose/>
                </button>
                <div className="section">
                {sublinks.map((el,idx) => {
                    const { page, links } = el;
                    return (
                        <div key={idx}>
                                <h1 className='section-title'>{page}</h1>
                                <div className="section-item col-2">
                                {
                                links.map((link, idx) => {
                                    const { label, icon, url } = link;
                                    return (
                                        <a  href={url} key={idx} className="item">
                                            <div className="item-icon">
                                            {icon}
                                            </div>
                                            <p className="item-title">
                                            {label}
                                            </p>
                                        </a>
                                    )
                                })}
                                </div>
                                </div>   
                                )
                            })}
                            </div>
            </div>
        </aside>
    );
}
 
export default Sidebar;