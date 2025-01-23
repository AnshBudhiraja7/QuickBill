import React from 'react'
import Title from '../../CommonComponents/Title'
import Footer from '../../CommonComponents/Footer'

const AddExcelData = () => {
  return (
    <div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      <Title Name={"New Product"} />
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="p-2">
                <form>
                    <div className="dropzone mb-3">
                      <div className="fallback">
                        <input name="file" type="file" multiple="multiple" hidden />
                      </div>
                      <div style={{textAlign:"center"}} className="dz-message needsclick">
                        <div className="mb-3">
                          <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                        </div>
                        <h4>Drop files here or click to upload.</h4>
                      </div>
                    </div>
                    <ul className="list-unstyled" id="dropzone-preview">
                      <li className="mt-2" id="dropzone-preview-list">
                        <div className="border rounded">
                          <div className="d-flex p-2">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar-sm bg-light rounded">
                                <img data-dz-thumbnail className="img-fluid rounded d-block" src="assets/images/new-document.png"  />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <div className="pt-1">
                                <h5 className="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                <p className="fs-13 text-muted mb-0" data-dz-size />
                                <strong className="error text-danger" data-dz-errormessage />
                              </div>
                            </div>
                            <div className="flex-shrink-0 ms-3">
                              <button data-dz-remove className="btn btn-sm btn-danger">Delete</button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
  <Footer/>
</div>  
)}

export default AddExcelData