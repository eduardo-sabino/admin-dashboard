import {useContext} from 'react'
import { MenuContext } from '../../App'

import './sidebar.css'
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report
} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Sidebar({toggleMenuDisplay}){
  const isMenuDisplayed = useContext(MenuContext)

  console.log(isMenuDisplayed);
  const menuStyle = {
    transform: isMenuDisplayed ? "translateX(0)" : "translateX(-15rem)"
  }
  const handleResize = () => {
    if (window.innerWidth > "1104" && !isMenuDisplayed) toggleMenuDisplay();
    
  }
  window.addEventListener('resize', handleResize)

  return (
    <div className="sidebar" style={window.innerWidth <= "1104" ? menuStyle : {transform: "translateX(0)"}}>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">    
              <li className="sidebar-list-item active">
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <hr />
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-item">
                <PermIdentity className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-list-item">
                <Storefront className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <hr />
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <hr />
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
