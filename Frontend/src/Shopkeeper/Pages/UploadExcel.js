import React, { useState } from 'react'
import ShopkeeperHeader from '../Components/ShopkeeperHeader'
import AddExcelData from '../Components/AddExcelData'
import ReviewExcelData from '../Components/ReviewExcelData'

const UploadExcel = () => {
  const [data,setdata]=useState([])  
  return (
    <div>
      <ShopkeeperHeader/>
      {data && data.length!==0 ? <ReviewExcelData data={data}/>:<AddExcelData fun={setdata}/>}
    </div>
  )
}

export default UploadExcel