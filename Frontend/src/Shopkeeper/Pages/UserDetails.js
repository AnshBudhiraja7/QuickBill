import React from 'react'
import Title from '../../CommonComponents/Title'

const UserDetails = () => {
  return (
    <div className="main-content">
 <div style={{marginTop:"30px"}} className="container-fluid">
      <Title Name={"New Product"} />
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="p-2">
                <form>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="productname">Product Name</label>
                      <input id="productname" name="productname" placeholder="Enter Product Name" type="text" className="form-control" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="brand">Product Brand</label>
                          <input id="brand" name="brand" placeholder="Enter Product Brand" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="price">Product Price</label>
                          <input id="price" name="price" placeholder="Enter Price" type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="choices-single-default" className="form-label">Category</label>
                          <select className="form-select" data-trigger name="choices-single-category" id="choices-single-category">
                            <option >Select</option>
                            <option >Electronic</option>
                            <option >Fashion</option>
                            <option >Fitness</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="choices-single-specifications" className="form-label">Specifications</label>
                          <select className="form-select" data-trigger name="choices-single-category" id="choices-single-specifications">
                            <option  >High Quality</option>
                            <option  >Leather</option>
                            <option >Notifications</option>
                            <option >Sizes</option>
                            <option >Different Color</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="productdesc">Product Description</label>
                      <textarea className="form-control" id="productdesc" placeholder="Enter Description" rows={4} defaultValue={""} />
                    </div>
                </form>
                <div className="hstack gap-2 mt-4">
                  <button type="submit" className="btn btn-primary">Save</button>
                  <button type="button" className="btn btn-light">Discard</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>  
)}

export default UserDetails