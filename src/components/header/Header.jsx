
import { useRef, useEffect, useState } from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import Select from "react-select";

export default function PageHeader({
    showMobileMenu,
    // companyList,
}) {
    const handleCompanyChange = async (data) => {

    };
    const companyList = [
        { value: "value one", label: "BMW" },
        { value: "value two", label: "Benz" },
        { value: "value three", label: "Ford" },
        { value: "value four", label: "Scoda" },
        { value: "value five", label: "Bugatti" },
        { value: "value six", label: "Lamborghini" },
        { value: "value seven", label: "Ferrari" },
        { value: "value eight", label: "Pagani" },
        { value: "value nine", label: "Toyota" },
    ];
    const [openNotif, setOpenNotif] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [showMobTopbar, setshowMobTopbar] = useState(false);
    const [activeCompany, setActiveCompany] = useState(
        // companyList
        // ?.map((item) => ({ label: item?.name, value: item?.id }))
        // .find((item) => item.value == userProfile?.company?.id)
    )
    let toggleRef = useRef(null);
    let profileRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setOpenNotif(false);
            }
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setOpenProfile(false);
            }
            // Add an additional check to prevent closing when clicking inside the notification
            if (openNotif && profileRef.current?.contains(event.target)) {
                setOpenNotif(true);
            }
            // Add an additional check to prevent closing when clicking inside the notification
            if (openProfile && toggleRef.current?.contains(event.target)) {
                setOpenProfile(true);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openNotif, openProfile]);

    const [notifyList, setNotifyList] = useState([]);

    const fetchNotifications = async () => {
        
    };

    const notificationCount = notifyList?.length;

    return (
        <div className="header">
            <div className="top_bar_left">
                <div className={style.mobile_menu_btn} onClick={() => showMobileMenu()}>
                    <span className="icon-menu"></span>
                </div>
                <div className="logo_box">
                    logo
                </div>
            </div>
            <div className="top_bar_right">
                <ul
                    className={
                        showMobTopbar ? "top_bar_right_list show" : "top_bar_right_list"
                    }
                >
                    {companyList && (
                        <li className="header_select_company">
                            <Select
                                instanceId={"company-select"}
                                value={activeCompany}
                                onChange={(selected) => handleCompanyChange(selected)}
                                options={companyList}
                                placeholder={<div>Select Company</div>}
                            />
                        </li>
                    )}
                    <li className="quick_actions">
                        <div
                            className="alertt_icon"
                            onClick={() => {
                                setOpenNotif(!openNotif);
                                if (!openNotif) {
                                    fetchNotifications();
                                }
                            }}
                        >
                            <div
                                className={
                                    notificationCount > 0
                                        ? "notification_badge"
                                        : "notification_badge hide"
                                }
                            ></div>
                            <span className="icon-notification"></span>
                            <p>Notification</p>
                        </div>
                    </li>
                    <li
                        className="profile_top_details"
                        onClick={() => setOpenProfile(!openProfile)}
                    >
                        <div className="profile_avatar">
                            <img
                                src={"/images/default_avatar.jpg"
                                }
                                alt="image"
                                layout="fill"
                            />
                        </div>
                        <div className="profile_info">
                            <h5>{'name'}</h5>
                            <p>{'example@email.com'}</p>
                        </div>
                        <div className="profile_toggle_btn">
                            <span className="icon-drop_arrow"></span>
                        </div>
                    </li>
                </ul>
                <div
                    className={style.mobile_topbar_menu}
                    onClick={() => setshowMobTopbar(!showMobTopbar)}
                >
                    <span className="icon-three_dots"></span>
                </div>
            </div>
            {/* <Notification
                openNotif={openNotif}
                profileRef={profileRef}
                setOpenNotif={setOpenNotif}
                items={notifyList}
            /> */}
            <div
                className={openProfile ? "profile_top show" : "profile_top"}
                ref={toggleRef}
            >
                <button className="profile_close" onClick={() => setOpenProfile(false)}>
                    ×
                </button>
                <ul className="profile_popup">
                    <li>
                        <div className="profile_pic">
                            <img
                                src={`/images/default_avatar.jpg`}
                                alt="image"
                                layout="fill"
                            />
                        </div>
                        <h6>{'name'}</h6>
                        <p>{'example@email.com'}</p>
                    </li>
                    <li className="view_profile">
                        <Link to="/profile">View my profile</Link>
                    </li>
                    <li>
                        <button
                            className="main_button"
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
