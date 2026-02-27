import React from 'react'
import Card from './card'
import DashboardCards from './card'
import DashboardRightPanel from './card'
import FraudAlert from './fraudalert'
import KYCExceptionDashboard from './centre'
import ActionCenter from './fraudalert'
import CoolingProgressBar from './cp'




const Rightcont = () => {
  return (
    <div className='h-full w-9/10 bg-gray-100'>
      <ActionCenter/><CoolingProgressBar/>
    <KYCExceptionDashboard/>
    
   
    
  
    </div>
   
  )
}

export default Rightcont