import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from "../../CommonComponents/Title"
import Footer from "../../CommonComponents/Footer"
import EditProductModal from './EditProductModal'
import AddProductModal from './AddProductModal'
const AllProductsComponent = () => {
   const[EditProductToggle,setEditProductToggle]=useState(false)
   const[AddProductToggle,setAddProductToggle]=useState(false)
   const[data,setdata]=useState([])
   const[editproductid,seteditproductid]=useState(null)
   const[editobj,seteditobj]=useState({})
   const[editloading,seteditloading]=useState(false)
   const[products,setproducts]=useState([])
   const[currentpage,setcurrentpage]=useState(1)
   const[totalpages,settotalpages]=useState(0)
   const productsperpage=5
   const navigate=useNavigate()
   useEffect(()=>{
        const getdata=async()=>{
        const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
        if(userinfo && userinfo.Authorization) return await getallproducts(userinfo.Authorization)
        localStorage.clear()
        return navigate("/")
        }
        getdata()
   },[])
   useEffect(()=>{
        if(data.length!==0){
            const indexoflastproduct = currentpage * productsperpage;
            const indexoffirstproduct = indexoflastproduct - productsperpage;
            const currentproducts = data.slice(indexoffirstproduct, indexoflastproduct);
            const totalpage = Math.ceil(data.length / productsperpage);
            setproducts(currentproducts)
            settotalpages(totalpage)
        }
    },[data,currentpage])
   const getallproducts=async(token)=>{
    try {
        const response=await fetch("http://localhost:3010/api/getproducts",{
            headers:{
                "Content-Type":"application/json",
                "Authorization":token
            }
        })
        const result=await response.json()
        if(response.status===202) setdata(result.data)
        else alert(result?.message)
    } catch (error) {
        console.log(error);
        alert("Something went wrong. Try again later")
    }
   }
   const deleteproduct=async(id)=>{
    try {
        const userinfo=JSON.parse(localStorage.getItem("Userinfo"))
        if(!userinfo || !userinfo.Authorization){
            localStorage.clear();
            alert("Unauthorised user")
            window.history.replaceState(null,null,"/")
            return navigate("/",{replace:true})
        }
        const response=await fetch("http://localhost:3010/api/deleteproduct/"+id,{
            method:"delete",
            headers:{
                "Content-Type":"application/json",
                "Authorization":userinfo.Authorization
            }
        })
        const result=await response.json()
        alert(result?.message)
        if(response.status===202){await getallproducts(userinfo.Authorization)}
    } catch (error) {
        console.log(error);
        alert("Something went wrong. Try again later.")
    }
   }
   const editproduct=(id)=>{
    const editproductitem=data?.filter(obj=>obj._id===id)
    const {name,model,description,company,rate,tax,discount,price,stock,_id}=editproductitem[0]    
    seteditobj({name,model,description,company,rate,tax,discount,price,stock})
    seteditproductid(_id)
    setEditProductToggle(true)
   }
   return (
        <div>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <Title Name="All Products"/>
                        <div className="row pb-4 gy-3">
                            <div className="col-sm-4">
                                <button className="btn btn-primary addPayment-modal" onClick={()=>setAddProductToggle(!AddProductToggle)} ><i className="las la-plus me-1" /> Add Products</button>
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
                                        <ul className="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" href="#nav-border-top-all" role="tab" aria-selected="true">
                                                    Your Products
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content text-muted pt-2">
                                            <div className="tab-pane active" id="nav-border-top-all" role="tabpanel">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="table-responsive table-card">
                                                            <table className="table table-hover table-nowrap align-middle mb-0">
                                                                <thead className="table-light">
                                                                    <tr className="text-muted text-uppercase">
                                                                        <th scope='col' style={{ width: '1%' }}>S.No</th>
                                                                        <th scope="col" style={{ width: '16%' }}>Product Name-Model</th>
                                                                        <th scope="col" style={{ width: '16%' }}>Product Description</th>
                                                                        <th scope="col" style={{ width: '8%' }}>Company</th>
                                                                        <th scope="col" style={{ width: '3%' }}>Stock</th>
                                                                        <th scope="col" style={{ width: '5%' }}>Rate(₹)</th>
                                                                        <th scope="col" style={{ width: '3%' }}>Dis.(%)</th>
                                                                        <th scope="col" style={{ width: '3%' }}>Tax(%)</th>
                                                                        <th scope="col" style={{ width: '5%' }}>Price(₹)</th>
                                                                        <th scope="col" style={{ width: '5%' }}>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    { products && products.length!==0?products?.map((obj,index)=>{
                                                                        return(<tr key={index}>
                                                                            <td>{index+1}</td>
                                                                            <td>{obj?.name+" - "+obj?.model}</td>
                                                                            <td>{obj?.description}</td>
                                                                            <td><span className="badge bg-success-subtle text-success p-2">{obj?.company}</span></td>
                                                                            <td>{obj?.stock}</td>
                                                                            <td>₹{obj?.rate}</td>
                                                                            <td>{obj?.discount}%</td>
                                                                            <td>{obj?.tax}%</td>
                                                                            <td>₹{obj?.price}</td>
                                                                            <td>
                                                                                <div className="dropdown">
                                                                                    <button className="btn btn-soft-secondary btn-sm dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                        <i className="las la-ellipsis-h align-middle fs-18" />
                                                                                    </button>
                                                                                    <ul className="dropdown-menu dropdown-menu-end">
                                                                                        <li><button onClick={()=>editproduct(obj._id)} className="dropdown-item"><i className="las la-pen fs-18 align-middle me-2 text-muted" />Edit</button></li>
                                                                                        <li onClick={()=>deleteproduct(obj._id)}><a className="dropdown-item remove-item-btn" href="#"><i className="las la-trash-alt fs-18 align-middle me-2 text-muted" />Delete</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </td>
                                                                        </tr>)}):<tr className='text-center'><td colSpan={10}>No Product Found</td></tr>}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center mb-2 gy-3">
                                            <div className="col-md-5">
                                                <p className="mb-0 text-muted">Showing <b>{(currentpage - 1) * productsperpage + 1}</b> to {" "}<b>{Math.min(currentpage * productsperpage, data.length)}</b>{" "} of <b>{data.length}</b> results</p>
                                            </div>
                                            <div className="col-sm-auto ms-auto">
                                            <nav aria-label="...">
                                                <ul className="pagination mb-0">
                                                    {currentpage!==1 ? <li style={{cursor:"pointer"}} className="page-item" onClick={()=>setcurrentpage(currentpage-1)}><span className="page-link">Previous</span></li>:<li className="page-item disabled"><span className="page-link">Previous</span></li>}
                                                    {Array.from({ length: totalpages }, (_, index)=><li key={index} onClick={() => setcurrentpage(index + 1)} className={currentpage===index+1?'page-item active':'page-item'}><a className="page-link">{index+1}</a></li>)}
                                                    {currentpage!==totalpages ? <li className="page-item" onClick={() => setcurrentpage(currentpage + 1)}><a className="page-link" href="#">Next</a></li>:<li className="page-item disabled"><a className="page-link" href="#">Next</a></li>}
                                                </ul>
                                            </nav>
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
            {AddProductToggle && <AddProductModal getallproducts={getallproducts} setToggle={setAddProductToggle}/>}
            {EditProductToggle && <EditProductModal getallproducts={getallproducts} setobj={seteditobj} setloading={seteditloading} setid={seteditproductid} loading={editloading} obj={editobj} id={editproductid} setToggle={setEditProductToggle}/>}
        </div>
)}

export default AllProductsComponent