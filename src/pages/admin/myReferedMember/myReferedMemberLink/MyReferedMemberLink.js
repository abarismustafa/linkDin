import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Getprofile } from "../../../../api/login/Login";
import { Link } from "react-router-dom";

const MyReferedMemberLink = () => {

    const [data, setData] = useState(null)
    const getDataProfile = async () => {
        try {
            const res = await Getprofile()
            setData(res?.data?.data)
        } catch (error) {

        }
    }


    const leftLink = `https://partners.aibotworld.in/signup/${data?.refer_id}=left`;
    const rightLink = `https://partners.aibotworld.in/signup/${data?.refer_id}=right`;

    const handleCopy = (link, title) => {
        navigator.clipboard.writeText(link)
            .then(() => {
                alert(`${title} link copied Success !`);
            })
            .catch((err) => {
                console.error("Failed to copy link: ", err);
            });
    };

    useEffect(() => {
        getDataProfile()
    }, [])

    return (

        <div className="card shadow">
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Referral Link</h5>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <input
                        type="text"
                        value={leftLink}
                        readOnly
                        className="form-control me-2"
                    />
                    <Link className="btn btn-primary" style={{ width: '200px', marginRight: '5px' }} to={`https://partners.aibotworld.in/signup/${data?.refer_id}=left`} target="_blank">
                        Invitation Link
                    </Link>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleCopy(leftLink, "Left")}
                    >
                        Copy
                    </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <input
                        type="text"
                        value={rightLink}
                        readOnly
                        className="form-control me-2"
                    />
                    <Link className="btn btn-primary" style={{ width: '200px', marginRight: '5px' }} to={`https://partners.aibotworld.in/signup/${data?.refer_id}=right`} target="_blank">
                        Invitation Link
                    </Link>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleCopy(rightLink, "Right")}
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>

    );
};

export default MyReferedMemberLink;
