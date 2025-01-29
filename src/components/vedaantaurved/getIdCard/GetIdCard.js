import React, { useEffect, useState } from 'react'
import aibotlogo from "../../../asesets/logo/profile.jpg"
// import ExportPdf from '../../../common/exportPdf/ExportPdf'
import { baseUrlImage } from '../../../baseUrl'
import { authCertificate } from '../../../api/login/Login'
function GetIdCard() {
    const [state, setState] = useState(null)
    console.log(state);

    const userProfileData = async () => {
        try {
            const res = await authCertificate()
            setState(res?.data?.data)
        } catch (error) {
            alert(error?.message)
        }
    }
    useEffect(() => {
        userProfileData()
    }, [])
    return (
        <div className="m-4">
            <div className="card d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
                <div className="col-lg-5 m-auto bg-info rounded p-4 exppdf">
                    <div className="d-flex justify-content-center align-items-center">
                        {state?.sign ? (
                            <img
                                src={`${baseUrlImage}${state?.sign}`}
                                alt="profile image"
                                className="mb-3 rounded-circle img-fluid"
                                style={{ width: '125px', height: '125px', objectFit: 'cover' }}
                            />
                        ) : (
                            <img
                                src={aibotlogo}
                                alt="profile not found"
                                className="mb-3 rounded-circle img-fluid"
                                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                            />
                        )}
                    </div>
                    <p><strong>Distributer ID:</strong> {state?.refer_id}</p>
                    <p><strong>Name:</strong> {state?.name}</p>
                    {/* <p><strong>Gender:</strong> Male</p> */}
                    <p><strong>Mobile:</strong> {state?.mobile}</p>
                    <p><strong>On Board Date:</strong> {state?.onBoardDate}</p>
                </div>
                <div className=''>
                    {/* <ExportPdf /> */}
                </div>
            </div>
        </div>

    )
}

export default GetIdCard
