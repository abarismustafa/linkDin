import React, { useEffect, useState } from "react";
import Tree from "./Tree";
import "./Tree.css"
import { binerytreeGet } from "../../../../api/login/Login";
import { Badge } from "react-bootstrap";
import defualt from "../../../../asesets/logo/profile.jpg"
import { Link } from "react-router-dom";
import TreeModuls from "./TreeModules";
// import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

export default function AiTree() {
    const [modalShow, setModalShow] = useState(false);
    const breadCrumbsTitle = {
        id: "2323",
        title_1: "Geneology View"
    }
    const [bineryData, setBineryData] = useState(null)
    console.log(bineryData);

    const getByNeryData = async () => {
        try {
            const res = await binerytreeGet()
            // console.log(res?.data);
            setBineryData(res?.data?.data)
        } catch (error) {

        }
    }

    const modalOpen = () => {
        console.log('fs');

        setModalShow(true)
    }


    useEffect(() => {
        getByNeryData()
    }, [])



    // const data = [
    //     {
    //         "name": "Aibot313",
    //         "children": [
    //             {
    //                 "name": "VA1001",
    //                 "children": [
    //                     {
    //                         "name": "Left ka User",
    //                         "children": [
    //                             { "name": "Left ka Left user", "children": [] },
    //                             { "name": "Left ka Left user", "children": [] }
    //                         ]
    //                     },
    //                     {
    //                         "name": "Left ka User",
    //                         "children": [
    //                             { "name": "Left ka Left user", "children": [] },
    //                             { "name": "Left ka Left user", "children": [] }
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "VA1097",
    //                 "children": [
    //                     {
    //                         "name": "Right ka User",
    //                         "children": [
    //                             { "name": "Right ka Right user", "children": [] },
    //                             { "name": "Right ka Right user", "children": [] }
    //                         ]
    //                     },
    //                     {
    //                         "name": "Right ka User",
    //                         "children": [
    //                             { "name": "Right ka Right user", "children": [] },
    //                             { "name": "Right ka Right user", "children": [] }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //     // {
    //     //     _id: "67923aebf8de4fa102652ae8",
    //     //     name: "test1",
    //     //     refer_id: "LE10130370",
    //     //     right: {
    //     //         _id: "67923cde59c17b91855ad1cc",
    //     //         name: "test2",
    //     //         refer_id: "LE10770220",
    //     //         left: {
    //     //             _id: "67923dff9b6dee8736f7d454",
    //     //             name: "test4",
    //     //             refer_id: "LE10219550",
    //     //             left: {
    //     //                 _id: "67923e4d9b6dee8736f7d46d",
    //     //                 name: "test4",
    //     //                 refer_id: "LE10652579",
    //     //             },
    //     //             right: {
    //     //                 _id: "67923e8b9b6dee8736f7d47a",
    //     //                 name: "test9",
    //     //                 refer_id: "LE10801784",
    //     //             },
    //     //         },
    //     //         right: {
    //     //             _id: "67923e239b6dee8736f7d460",
    //     //             name: "test4",
    //     //             refer_id: "LE10417779",
    //     //             left: {
    //     //                 _id: "67923ea49b6dee8736f7d487",
    //     //                 name: "test4",
    //     //                 refer_id: "LE10637381",
    //     //             },
    //     //         },
    //     //     },
    //     //     left: {
    //     //         _id: "67923cde59c17b91855ad1cc",
    //     //         name: "test2",
    //     //         refer_id: "LE10770220",
    //     //         left: {
    //     //             _id: "67923dff9b6dee8736f7d454",
    //     //             name: "test4",
    //     //             refer_id: "LE10219550",
    //     //             left: {
    //     //                 _id: "67923e4d9b6dee8736f7d46d",
    //     //                 name: "test4",
    //     //                 refer_id: "LE10652579",
    //     //             },
    //     //             right: {
    //     //                 _id: "67923e8b9b6dee8736f7d47a",
    //     //                 name: "test9",
    //     //                 refer_id: "LE10801784",
    //     //             },
    //     //         },
    //     //         right: {
    //     //             _id: "67923e239b6dee8736f7d460",
    //     //             name: "test4",
    //     //             refer_id: "LE10417779",
    //     //             left: {
    //     //                 _id: "67923ea49b6dee8736f7d487",
    //     //                 name: "test4",
    //     //                 refer_id: "LE10637381",
    //     //             },
    //     //         },
    //     //     },
    //     // },
    // ];



    return (

        <>

            <div className="m-4">
                {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
                <div className="ContentArea">
                    <div className="card">
                        <div className="card-header">
                            <input className="form-control" type="search" placeholder="Search Here" /></div>
                        <div className="card-body p-1">

                            <div className="tree-container">
                                <div className="row justify-content-center">
                                    <div className="col-4 text-center mt-5">
                                        <h5 style={{ color: 'blue', fontWeight: '700' }}>Left Users</h5>
                                        <p>0</p>
                                    </div>
                                    <div className="col-4 text-center position-relativee">
                                        <div className="circle-tree overflow-hidden " onClick={() => modalOpen()}>
                                            <img src={defualt} className="w-100 h-100" />

                                        </div>
                                        <div className='box-hover'>
                                            <p> <strong>Mr Ashraf</strong></p>
                                            <p>
                                                <span><strong>Spnsor:</strong>5645</span>
                                            </p>
                                            <p>
                                                <span><strong>Left Active Member:</strong>5645</span>
                                            </p>
                                            <p>
                                                <span><strong>Right Active Member:</strong>5645</span>
                                            </p>
                                            <p>
                                                <span><strong>Activation PV:</strong>5645</span>
                                            </p>
                                            <p>
                                                <span><strong>Left PV:</strong>5645</span>
                                            </p>
                                            <p>
                                                <span><strong>Right PV:</strong>5645</span>
                                            </p>
                                            <div style={{ width: '100%', borderTop: '1px solid black', }}>
                                                <div style={{ padding: '5px', backgroundColor: 'yellowgreen', width: '80px', borderRadius: '5px', margin: '4px auto', fontWeight: '700' }}>
                                                    Paid
                                                </div>
                                            </div>

                                        </div>
                                        <Badge className="fs-5 ">{bineryData?.refer_id}</Badge>
                                    </div>
                                    <div className="col-4 text-center mt-5">
                                        <h5 style={{ color: 'blue', fontWeight: '700' }}>Right Users</h5>
                                        <p>0</p>
                                    </div>
                                </div>


                                <div className="row">
                                    {bineryData && bineryData?.left == null ? (
                                        <div className="col-6 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">Dummy</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-6 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.left?.refer_id}</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}

                                    {bineryData && bineryData?.right == null ? (
                                        <div className="col-6 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">dummy
                                                </Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-6 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.right?.refer_id}
                                                </Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}
                                </div>


                                <div className="row">





                                    {bineryData && bineryData?.left?.left == null ? (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">Dummy Users</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.left?.left?.refer_id
                                                }</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}

                                    {bineryData && bineryData?.left?.right == null ? (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">Dummy Users</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.left?.right?.refer_id}</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}



                                    {/* <div className="col-3 justify-content-center position-relative">
                                    <div className="text-center">
                                        <div className="circle-tree overflow-hidden">
                                            <img src={defualt} className="w-100 h-100" />
                                        </div>
                                        <Badge className="fs-5 ">No User</Badge>
                                    </div>
                                    <div className="line">
                                        <span className="left-arow"></span>
                                        <span className="right-arow"></span>
                                    </div>
                                </div>
                                <div className="col-3 justify-content-center position-relative">
                                    <div className="text-center">
                                        <div className="circle-tree overflow-hidden">
                                            <img src={defualt} className="w-100 h-100" />
                                        </div>
                                        <Badge className="fs-5 ">No User</Badge>
                                    </div>
                                    <div className="line">
                                        <span className="left-arow"></span>
                                        <span className="right-arow"></span>
                                    </div>
                                </div> */}





                                    {bineryData && bineryData?.right?.left == null ? (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">Dummy</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.right?.left?.refer_id
                                                }</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}


                                    {bineryData && bineryData?.right?.right == null ? (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">Dummy</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="col-3 justify-content-center position-relative">
                                            <div className="text-center">
                                                <div className="circle-tree overflow-hidden">
                                                    <img src={defualt} className="w-100 h-100" />
                                                </div>
                                                <Badge className="fs-5 ">{bineryData?.right?.right?.refer_id}</Badge>
                                            </div>
                                            <div className="line">
                                                <span className="left-arow"></span>
                                                <span className="right-arow"></span>
                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div className="row m-0">
                                    <div className="col-6">
                                        <div className="row">
                                            {bineryData && bineryData?.left?.left?.left == null ? (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.left?.left?.left?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.left?.left?.right?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {bineryData && bineryData?.left?.left?.right == null ? (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.left?.right?.left?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.left?.right?.right?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="row">
                                            {bineryData && bineryData?.right?.left?.left == null ? (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.right?.left?.left?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.right?.left?.right?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                            {bineryData && bineryData?.right?.right?.left == null ? (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">No User</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                <img src={defualt} className="w-100 h-100" />
                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.right?.right?.left?.refer_id}</Badge>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="text-center">
                                                            <div className="circle-tree overflow-hidden">
                                                                {bineryData?.right?.right?.right?.refer_id ? <img src={defualt} className="w-100 h-100" /> : <img src="https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-28.png" className="w-100 h-100" />}

                                                            </div>
                                                            <Badge className="fs-5 ">{bineryData?.right?.right?.right?.refer_id ? bineryData?.right?.right?.right?.refer_id : <Link to={'#'} style={{ color: 'white', textDecoration: 'none', background: 'gray', padding: '0px 5px', borderRadius: '5px' }}>Sign Up</Link>}</Badge>
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png */}
                        </div>
                    </div>
                </div>
            </div>
            <TreeModuls show={modalShow}
                onHide={() => setModalShow(false)} />
        </>
        // <div className="m-4">
        //     {/* <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} /> */}
        //     <div className="ContentArea">
        //         <div className="card">
        //             <div className="card-header">
        //                 <input className="form-control" type="search" placeholder="Search Here" /></div>
        //             <div className="card-body p-1">
        //                 <Tree bineryData={bineryData} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}