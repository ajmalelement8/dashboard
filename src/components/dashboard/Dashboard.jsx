import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";
import style from "./page.module.css";

export default function Dashboard() {
  const searchPage = false;

  return (
    <div className={style.dashboard_outer}>
      <div className={style.dashboard_wrapper}>
        <div className={style.dashboard_top}>
          <div className={style.dash_top_left}>
            <h6> Welcome, {'Name'} !</h6>
            <p className="bread-crumps">
              <span className="current-page">Dashboard</span>
            </p>
          </div>
        </div>
        <div className={style.req_wrapper}>
          <div className={style.request}>
            <DashboardCard
              title={"Connection Requests"}
              value={10}
              subvalue={"+5%"}
              color="blue"
              image="/images/link-square.png"
            />
            <DashboardCard
              title={"Permission Requests"}
              value={10}
              color="green"
              image="/images/key.png"
            />
            <DashboardCard
              title={"Credit Requests"}
              value={"00"}
              color="lightblue"
              image="/images/valett.png"
            />
          </div>
          <div className={style.request}>
            <div
              className={`${style.req_card} ${style.light_violet} ${style.shedule}`}
            >
              <div className={style.request_inside}>
                <div className={style.members_num}>
                  <h4>
                    {0}
                  </h4>
                  <h5>Members</h5>
                </div>
                <p className={style.req_content}>
                  Please invite other team members to join us.
                </p>
              </div>
              <div className={style.req_button_block}>
                <button type="button" className="main_button">
                  Invite Now
                </button>
              </div>
              <div className={style.adding_member}>
                <div className={style.member_image_holdr}>
                  <button type="button" className={style.add_member_btn}>
                    <span className="icon-add_icon"></span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${style.req_card} ${style.light_pink} ${style.shedule}`}
            >
              <div className={style.request_inside}>
                <div className={`${style.members_num} ${style.flex_col}`}>
                  <h3>You have an interview scheduled on</h3>
                  <div className={style.date_tile}>
                    <p className={style.month}>August</p>
                    <h2 className={style.date}>12</h2>
                    <p className={style.year}>2023</p>
                  </div>
                </div>
              </div>
              <div className={style.req_button_block}>
                {/* <div className="white-gradient-btn">
                                    <button type="button" className="gradient-text-button"> View Schedule</button>
                                </div> */}
                <button type="button" className="main_button">
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.dash_notification} card_block mt-15`}>
          <div className="card_top">
            <div className="section_title">
              <h2>Notifications</h2>
            </div>
            <div className="card_top_right">
              <Link to='#'>
                <button type="button" className="grey_btn">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <ul className={style.notifi_lists}>
            {/* {notifyList?.map((data) => (
              <NotificationItem
                image={data?.avatar ? data?.avatar : placeholder}
                title={data?.message}
                createdAt={data?.created_at}
              />
            ))} */}
            <li>
              <div className={style.notif_profile}>
                <img src="/images/company_profile_logo.png" width={26} height={26} alt="logo" /></div>
              <div className={style.notif_details}>
                <h6>Al Ghurair Food Stuff LLC Requested <span>2,000,000</span> DHS for Credit</h6>
                <p> 15min ago</p>
              </div>
            </li>
            <li>
              <div className={style.notif_profile}>
                <img src="/images/company_profile_logo.png" width={26} height={26} alt="logo" /></div>
              <div className={style.notif_details}>
                <h6>Al Ghurair Food Stuff LLC Requested <span>2,000,000</span> DHS for Credit</h6>
                <p> 15min ago</p>
              </div>
            </li>
            <li>
              <div className={style.notif_profile}>
                <img src="/images/company_profile_logo.png" width={26} height={26} alt="logo" /></div>
              <div className={style.notif_details}>
                <h6>Al Ghurair Food Stuff LLC Requested <span>2,000,000</span> DHS for Credit</h6>
                <p> 15min ago</p>
              </div>
            </li>
            <li>
              <div className={style.notif_profile}>
                <img src="/images/company_profile_logo.png" width={26} height={26} alt="logo" /></div>
              <div className={style.notif_details}>
                <h6>Al Ghurair Food Stuff LLC Requested <span>2,000,000</span> DHS for Credit</h6>
                <p> 15min ago</p>
              </div>
            </li>
            <li>
              <div className={style.notif_profile}>
                <img src="/images/company_profile_logo.png" width={26} height={26} alt="logo" /></div>
              <div className={style.notif_details}>
                <h6>Al Ghurair Food Stuff LLC Requested <span>2,000,000</span> DHS for Credit</h6>
                <p> 15min ago</p>
              </div>
            </li>
          </ul>
        </div>
        {/* -----------------------user documents verify----------------------- */}
        {/* <USerDocs /> */}
        {/* -----------------------user documents verify end ----------------------- */}
        {/* -----------------------company documents verify----------------------- */}
        {/* <CompanyDocs /> */}
        {/* -----------------------company documents verify end ----------------------- */}
      </div>
      {/*-----------------------user profile completetion-----------------------  */}
      {/* <Completeprofile /> */}
      {/*----------------------- end ofuser profile completetion-----------------------  */}
    </div>
  );
}
