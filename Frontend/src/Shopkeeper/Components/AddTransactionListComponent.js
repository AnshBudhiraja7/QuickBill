import React from 'react'
import Title from "../../CommonComponents/Title"
import Footer from "../../CommonComponents/Footer"
const AddTransactionListComponent = () => {
return(
<div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <Title Name="New Transaction"/>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="desc">Description</label>
                  <textarea className="form-control" id="desc" placeholder="Enter Description" rows={3} defaultValue={""} />
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="debit" className="form-label">Debit</label>
                      <input id="Debit" name="Debit" placeholder="Debit" type="text" value={"Debit"} readOnly className="form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="price">Amount</label>
                      <input id="price" name="price" placeholder="Enter Amount" type="number" className="form-control" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="hstack gap-2 mt-4">
                <button type="submit" className="btn btn-primary">Pay Now</button>
                <button type="button" className="btn btn-light">Discard</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</div>
)}

export default AddTransactionListComponent