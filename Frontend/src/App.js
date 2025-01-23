import React from 'react'
import SignIn from './CommonPages/SignIn'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import SuperAdminDashboard from './Superadmin/Pages/SuperAdminDashboard'
import Invoice from './Shopkeeper/Pages/Invoice'
import UploadExcel from './Shopkeeper/Pages/UploadExcel'
import UserDetails from './Shopkeeper/Pages/UserDetails'
import Executive from './Shopkeeper/Pages/Executive'
import Customers from './Shopkeeper/Pages/Customers'
import TransactionList from './Shopkeeper/Pages/TransactionList'
import AddTransaction from './Shopkeeper/Pages/AddTransaction'
import Dashboard from './Shopkeeper/Pages/Dashboard'
import ExecutiveCustomers from './Executive/Pages/ExecutiveCustomers'
import ExecutiveTransactionList from './Executive/Pages/ExecutiveTransactionList'
import ExecutiveAddTransaction from './Executive/Pages/ExecutiveAddTransaction'
import ExecutiveProducts from './Executive/Pages/ExecutiveProducts'
import ExecutiveInvoices from './Executive/Pages/ExecutiveInvoices'
import AllProducts from './Shopkeeper/Pages/AllProducts'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* superadmin */}
          <Route path='/SuperAdminDashboard' element={<SuperAdminDashboard/>}></Route>
          <Route path='/Superadmin' element={<Navigate to="/SuperAdminDashboard" replace/>}></Route>
          {/* shopkeeper */}
          <Route path='/Shopkeeper' element={<Navigate to="/Dashboard" replace/>}></Route>
          <Route path='/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/Invoice' element={<Invoice/>}></Route>
          <Route path='/Customers' element={<Customers/>}></Route>
          <Route path='/TransactionList' element={<TransactionList/>}></Route>
          <Route path='/AddTransaction' element={<AddTransaction/>}></Route>
          <Route path='/UploadExcel' element={<UploadExcel/>}></Route>
          <Route path='/AllProducts' element={<AllProducts/>}></Route>
          <Route path='/UserDetails' element={<UserDetails/>}></Route>
          <Route path='/ManageExecutive' element={<Executive/>}></Route>
          {/* login page */}
          <Route path='/' element={<SignIn/>}/>
          {/* executive */}
          <Route path='/Executive' element={<Navigate to="/ExecutiveInvoices" replace/>}></Route>
          <Route path='/ExecutiveInvoices' element={<ExecutiveInvoices/>}></Route>
          <Route path='/ExecutiveProducts' element={<ExecutiveProducts/>}></Route>
          <Route path='/ExecutiveCustomers' element={<ExecutiveCustomers/>}></Route>
          <Route path='/ExecutiveTransactionlist' element={<ExecutiveTransactionList/>}></Route>
          <Route path='/ExecutiveAddTransaction' element={<ExecutiveAddTransaction/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App