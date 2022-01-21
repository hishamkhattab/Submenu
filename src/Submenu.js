
import { useState,useEffect, useRef } from 'react';
import { useGlobalContext } from './context'

const Submenu = () => {

    const { isSubmenuOpen, coordinates, page:{page,links} } = useGlobalContext();
    const container = useRef(null);
    const [columns, setColumns] = useState()

    useEffect(() => {
        setColumns('col-2');

        const submenu = container.current;
        const { center, bottom } = coordinates;
        submenu.style.top = `${bottom}px`;
        submenu.style.left = `${center}px`;

        if (links.length === 3) {
            setColumns('col-3');
        };

        if (links.length > 3) {
            setColumns('col-4');
        }
        
    }, [coordinates, isSubmenuOpen])
    
    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <h3 className="section-title">{page}</h3>
            <div className={`${columns} section-item`}>
                {links.map((link, idx) => {
                    const {label, icon, url} = link;
                    return (
                        <li key={idx} className="section">
                            <a href={url} className="item">
                                <div className="item-icon">{icon}</div>
                                <p className="item-title">{label}</p>
                            </a>
                        </li>
                    )
            })}
            </div>
        </aside>
    );
}
 
export default Submenu;

/**
 <h3 className="section-title">Product</h3>
            
            <div className="section">
                <a  href='#' className="item">
                    <div className="item-icon"><FaBriefcase/></div>
                    <p className="item-title">payment</p>
                </a>
        </div>
        <div className="section">
                <a  href='#' className="item">
                    <div className="item-icon"><FaBriefcase/></div>
                    <p className="item-title">payment</p>
                </a>
        </div>
        <div className="section">
                <a  href='#' className="item">
                    <div className="item-icon"><FaBriefcase/></div>
                    <p className="item-title">payment</p>
                </a>
        </div>
            </div>
 */