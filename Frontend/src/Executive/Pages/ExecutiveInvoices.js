import React from 'react'
import ExecutiveHeader from '../Components/ExecutiveHeader'
import CreateInvoice from '../Components/CreateInvoice'
import ReviewInvoices from '../Components/ReviewInvoices'

const ExecutiveInvoices = () => {
  return (
    <div>
      <ExecutiveHeader/>
      <CreateInvoice/>
      {/* <ReviewInvoices/> */}
    </div>
  )
}

export default ExecutiveInvoices
