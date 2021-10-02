import "./topbar.css"
import { NotificationsNoneIcon } from '@mui/icons-material';

export default function Topbar(){
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='topleft'>
          <span className='logo'>Dashboard</span>
        </div>
        <div className='topright'>
          <div className="topbar-icons">
            <NotificationsNoneIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
