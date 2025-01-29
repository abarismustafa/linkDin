import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import CardModuls from "./PlanCardModuls";
import { Link } from "react-router-dom";
import PlanModal from "./planModal/PlanModal";

export default function PlansCards({ planGet, planData, walletShowHeader, walletData }) {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = (item) => {
    setItem(item)
    setModalShow(true)
  }
  return (
    <>
      {planData && planData?.map((item) => {
        // console.log(item);
        return <div className="col-4" key={item?._id}>
          <div className="card text-center">
            <CardModuls show={show} handleClose={handleClose} />
            <div className="card-body">
              <h5 className="card-title fs-1 mb-4">{item?.name}</h5>
              <h6 className="card-subtitle mb-3 fw-normal text-muted">${item?.prices[0]?.BasePrice}USD</h6>
              <div className="border border-1 bordder-black mb-3"></div>
              <ul className="list-unstyled">
                <li className="mt-2 d-flex align-items-center justify-content-between">
                  <span><span className="text-success">✔</span> Matching Bonus: ${item?.MatchBonus} USD</span>
                  <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
                    <CiCircleQuestion />
                  </button>
                </li>
                <li className="mt-2 d-flex align-items-center justify-content-between">
                  <span><span className="text-success">✔</span> Referral Income: ${item?.ReferIncome} USD</span>
                  <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
                    <CiCircleQuestion />
                  </button>
                </li>
                <li className="mt-2 d-flex align-items-center justify-content-between ">
                  <span><span className="text-success">✔</span> level Income: ${item?.levelincome} USD</span>
                  <button type="button" className="btn btn-link  text-decoration-none" title="More info" onClick={handleShow}>
                    <CiCircleQuestion />
                  </button>
                </li>
                <li className="mt-2 d-flex align-items-center justify-content-between ">
                  <span><span className="text-success">✔</span>Earn upto {item?.earnUpto} USD $ Daily From Matching Bonus </span>
                  <button type="button" className="btn btn-link text-decoration-none" title="More info" onClick={handleShow}>
                    <CiCircleQuestion />
                  </button>
                </li>
              </ul>
              {/* <Link to="/depositmethod" className="btn btn-outline-primary w-100">Subscribe</Link> */}
              <button type="button" className="btn btn-outline-primary w-100" disabled={item?.isPurchase === true} onClick={() => openModal(item)}>
                {/* Subscribe */}
                {item?.isPurchase ? 'Purchased' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      })}
      <PlanModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        item={item}
        walletShowHeader={walletShowHeader}
        walletData={walletData}
        planGet={planGet}
      />
    </>
  )
}