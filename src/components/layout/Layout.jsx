import React, { useEffect, useState } from 'react'
import SideMenuBar from '../sidebar/SideMenuBar'
import PageHeader from '../header/Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [quickPage, setQuickPage] = useState('');
    const [mobileSideMenu, setmobileSideMenu] = useState(false);

    const menus = [
        { title: "Dashboard", path: "/", icon: 'icon-dashboard', children: null },
        { title: "Services", path: "/services", icon: 'icon-dashboard', children: null },
        { title: "Account", path: "/account", icon: 'icon-dashboard', children: null },
        { title: "Profile", path: "/profile", icon: 'icon-profile', children: null }
    ]
    const showQuickPage = (page) => {
        // Function to show the quick modals
        setQuickPage(page);
        console.log(page);
    }
    const closeQuickModals = () => {
        // Function to close the quick modals
        setQuickPage('');
    };
    useEffect(() => {
        let sidebar = document.querySelector('.side_bar');
        let header = document.querySelector('.header');
        let contentInner = document.querySelector('.content_inner');
        const handleResize = () => {
            if (window.innerWidth < 1200) {
                if (sidebar && sidebar.classList.contains('collapsed')) {
                    sidebar.classList.remove('collapsed')
                }
                if (header && header.classList.contains('expand')) {
                    header.classList.remove('expand')
                }
                if (contentInner && contentInner.classList.contains('expand')) {
                    contentInner.classList.remove('expand')
                }
            }
        };

        // Add event listener to window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize initially
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    function toggleMenu() {
        if (collapsed == false) {
            setCollapsed(true);
        }
        else if (collapsed == true) {
            setCollapsed(false);
        }
    }
    function showMobileMenu() {
        if (mobileSideMenu == false) {
            setmobileSideMenu(true);
        }
        else if (mobileSideMenu == true) {
            setmobileSideMenu(false);
        }
    }
    function closeMenu() {
        setmobileSideMenu(false);

    }
    return (
        <>
            <SideMenuBar collapsed={collapsed} toggleMenu={toggleMenu} menus={menus} overlay={mobileSideMenu} closeMenu={closeMenu} />
            <div className={(collapsed === false ? 'main_panel' : 'main_panel expand')}>
                <PageHeader showMobileMenu={showMobileMenu} />
                <div className="content">
                    <div className={(collapsed === false ? 'content_inner' : 'content_inner expand')}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout