import React from 'react'
import Card from './card'
import DashboardCards from './card'
import DashboardRightPanel from './card'
import FraudAlert from './fraudalert'
import KYCExceptionDashboard from './centre'




const Rightcont = () => {
  return (
    <div className='h-full w-9/10 bg-gray-100'><DashboardRightPanel/>
    <KYCExceptionDashboard/>
   
    
  
    </div>
   
  )
}

export default Rightcont