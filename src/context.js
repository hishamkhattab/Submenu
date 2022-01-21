import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page:'', links:[]});
    const [coordinates, setCoordinates] = useState({})


    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openSubmenu = (text, coordinate) => {
        const page = sublinks.find(link => link.page === text);
        setPage(page);
        setCoordinates(coordinate);
        setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={
{                isSidebarOpen,
                setIsSidebarOpen,
                isSubmenuOpen,
                setIsSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                page,
                coordinates}
            }>
                {children}
            </AppContext.Provider>
        )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext }

