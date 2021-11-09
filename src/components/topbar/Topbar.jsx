

import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material/';
import ListIcon from '@mui/icons-material/List';

export default function Topbar({toggleMenuDisplay}){

  
  const handleMenuIconClick = () => {
    toggleMenuDisplay()
  }
  

  return (
    <div className='top-bar'>
      <div className='top-bar-wrapper'>
        <div className='top-left'>
          <ListIcon className='list-icon' onClick={handleMenuIconClick}/>
          <span className='logo'>Dashboard</span>
        </div>
        <div className='top-right'>
          <div className="top-bar-icon-container">
            <NotificationsNone className='top-bar__icon' />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Language className='top-bar__icon' />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Settings className='top-bar__icon' />
          </div>
          <div className="top-avatar"></div>
        </div>
      </div>
    </div>
  )
}
