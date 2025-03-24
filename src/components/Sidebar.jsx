import React from "react";
import reactLogo from "../assets/images/logo.png";
import inboxLogo from "../assets/images/direct-inbox.png";
import folderLogo from "../assets/images/folder-open.png";
import homeLogo from "../assets/images/home.png";
import peopleLogo from "../assets/images/people.png";
import taskLogo from "../assets/images/task-square.png";
import mask from "../assets/images/maskgroup.png";
import settingsIcon from "../assets/images/settings.png";
import logOutIcon from "../assets/images/logout.png";

const Sidebar = () => {
  return (
    <div className="leftSidebar vh-100">
      <div className="leftSidebarInsideFirst">
        <div className="row mainLogo d-flex align-items-center">
          <div className="col">
            <img className="logoImg" src={reactLogo} alt="logo" />
            <label htmlFor="" className=" logoText">
              COURSUE
            </label>
          </div>
        </div>

        <div className="row sideBarListContent">
          <div className="col ">
            <label htmlFor="" className="overViewText">
              Overview
            </label>

            <ul className="nav flex-column mt-3">
              <li className="nav-item d-flex align-items-center allList">
                <img className="sideNavIcons" src={homeLogo} alt="" />
                <a href="" className="listNames activeText mt-1 ">
                  Dashboard
                </a>
              </li>

              <li className="nav-item d-flex align-items-center allList">
                <img className="sideNavIcons" src={inboxLogo} alt="" />
                <a href="" className="listNames unactiveText mt-1 ">
                  Inbox
                </a>
              </li>

              <li className="nav-item d-flex align-items-center allList">
                <img className="sideNavIcons" src={folderLogo} alt="" />
                <a href="" className="listNames unactiveText mt-1 ">
                  Lesson
                </a>
              </li>

              <li className="nav-item d-flex align-items-center allList">
                <img className="sideNavIcons" src={taskLogo} alt="" />
                <a href="" className="listNames unactiveText mt-1 ">
                  Task
                </a>
              </li>

              <li className="nav-item d-flex align-items-center allList">
                <img className="sideNavIcons" src={peopleLogo} alt="" />
                <a href="" className="listNames unactiveText mt-1 ">
                  Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row friendsBox">
          <div className="col mb-0">
            <label htmlFor="" className="friendsHeading">
              Friends
            </label>
          </div>

          <div className="col ">
            <div
              className="col-12 d-flex align-items-center mb-3"
              style={{ width: "146px", height: "31px", gap: "20px" }}
            >
              <span className="mt-1" style={{ width: "24px", height: "8px" }}>
                <img src={mask} alt="" style={{ width: "30px" }} />
              </span>

              <span
                className="mt-3"
                style={{ width: "114px", height: "31px", gap: "4px" }}
              >
                <label className="mb-0" htmlFor="">
                  Prashant
                </label>
                <br />

                <small className="designationTest ">Softwear Developer</small>
              </span>
            </div>

            <div
              className="col-12 d-flex align-items-center mb-3"
              style={{ width: "146px", height: "31px", gap: "20px" }}
            >
              <span className="mt-1" style={{ width: "24px", height: "8px" }}>
                <img src={mask} alt="" style={{ width: "30px" }} />
              </span>

              <span
                className="mt-3"
                style={{ width: "114px", height: "31px", gap: "4px" }}
              >
                <label className="mb-0" htmlFor="">
                  Prashant
                </label>
                <br />
                <small className="designationTest mt-0">
                  Softwear Developer
                </small>
              </span>
            </div>

            <div
              className="col-12 d-flex align-items-center mb-3"
              style={{ width: "146px", height: "31px", gap: "20px" }}
            >
              <span className="mt-1" style={{ width: "24px", height: "8px" }}>
                <img src={mask} alt="" style={{ width: "30px" }} />
              </span>

              <span
                className="mt-3"
                style={{ width: "114px", height: "31px", gap: "4px" }}
              >
                <label className="mb-0" htmlFor="">
                  Prashant
                </label>
                <br />
                <small className="designationTest mt-0">
                  Softwear Developer
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="row settingsDiv">
          <div className="col mb-1">
            <label htmlFor="" className="settingsHeading">
              Settings
            </label>
          </div>

          <div className="col  d-flex align-items-center  settingsDivStyling">
            <img
              src={settingsIcon}
              alt="settings"
              className="settingSectionsIcon me-2"
            />
            <label htmlFor="" className="settingsDivFontsStyle ">
              Settings
            </label>
          </div>

          <div className="col d-flex align-items-center settingsDivStyling">
            <img
              src={logOutIcon}
              alt="settings"
              className="settingSectionsIcon me-2"
            />
            <label htmlFor="" className="settingsDivFontsStyle ">
              Logout
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
