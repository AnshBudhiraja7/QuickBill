import React from 'react'
import Footer from '../../CommonComponents/Footer'
import Title from '../../CommonComponents/Title'
import { useNavigate } from 'react-router-dom'

const ReviewExcelData = ({data}) => {
    const navigate=useNavigate()
    const Submit=async()=>{
        try {
            const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
            if(!userinfo || !userinfo.Authorization){
                localStorage.clear();
                alert("Unauthorised user")
                window.history.replaceState(null,null,"/")
                return navigate("/",{replace:true})
            } 
            const response=await fetch("http://localhost:3010/api/addmultipleproducts",{
                method:"post",
                body:JSON.stringify({items:data}),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":userinfo.Authorization
                }
            })
            const result=await response.json()
            alert(result?.message)
            //if(response.status===201) console.log(result.data)
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Try again later.")
        }
    }
  return (
    <div className="main-content">
        <div className="page-content">
            <div className="container-fluid">
                <Title Name={"Product List"} />
                <div className="row pb-4 gy-3">
                    <div className="col-sm-4" onClick={Submit}>
                        <a href="#" className="btn btn-primary addtax-modal">Submit</a>
                    </div>
                    <div className="col-sm-auto ms-auto">
                        <div className="d-flex gap-3">
                            <div className="search-box">
                                <input type="text" className="form-control" id="searchMemberList" placeholder="Search for Result" />
                                <i className="las la-search search-icon" />
                            </div>
                            <div>
                                <button type="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false" className="btn btn-soft-info btn-icon fs-14"><i className="las la-ellipsis-v fs-18" /></button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                    <li><a className="dropdown-item" href="#">All</a></li>
                                    <li><a className="dropdown-item" href="#">Last Week</a></li>
                                    <li><a className="dropdown-item" href="#">Last Month</a></li>
                                    <li><a className="dropdown-item" href="#">Last Year</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive table-card">
                                    <table className="table table-nowrap align-middle mb-0">
                                        <thead>
                                            <tr className="text-muted text-uppercase">
                                                <th style={{ width: 50 }}>
                                                    <div className="form-check">
                                                        S.No
                                                    </div>
                                                </th>
                                                <th scope="col" style={{ width: "20%" }}>Product Name & Model</th>
                                                <th scope="col" style={{ width: '25%' }}>Description</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">In Stock</th>
                                                <th scope="col">Rate(₹)</th>
                                                <th scope="col" style={{ width: '8%' }}>Price(₹)</th>
                                                <th scope="col" style={{ width: '6%' }}>Discount(%)</th>
                                                <th scope="col" style={{ width: '6%' }}>Tax(%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((obj,index)=>{
                                                    return(<tr>
                                                        <td><div className="form-check">{index+1}</div></td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="flex-grow-1">
                                                                    <h6 className="fs-16 mb-1">{obj?.name +" & "+obj?.model}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{obj?.description}</td>
                                                        <td>{obj?.company}</td>
                                                        <td>{obj?.stock}</td>
                                                        <td>{"₹"+obj?.rate}</td>
                                                        <td>{"₹"+obj?.price}</td>
                                                        <td>{obj?.discount+"%"}</td>
                                                        <td>{obj?.tax+"%"}</td>
                                                    </tr>)
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mb-2 gy-3">
                            <div className="col-md-5">
                                <p className="mb-0 text-muted">Showing <b>1</b> to <b>5</b> of <b>10</b> results</p>
                            </div>
                            <div className="col-sm-auto ms-auto">
                                <nav aria-label="...">
                                    <ul className="pagination mb-0">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item" aria-current="page">
                                            <span className="page-link">2</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ReviewExcelData
