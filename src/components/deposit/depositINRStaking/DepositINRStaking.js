// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";


const DepositINRStaking = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Deposit",
        title_2: "Deposit INR for Staking",
        path_2: ""
    };
    return (
        <>

            <div className="PageHeading">
                <h1>Deposit INR for Staking</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Deposit INR for Staking</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Company Bank Name  </label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Company Bank Name</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Debited A/c Holder Name  </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Debited A/c Holder Name "
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Amount($)  </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Amount($) "
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Amount to be Send(INR)   </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Amount to be Send(INR)  "
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">UTR/Reference No.   </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter UTR/Reference No.  "
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Mode   </label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Payment Mode </option>
                                        <option value={1}>IMPS</option>
                                        <option value={2}>NEFT</option>
                                        <option value={2}>Cash Deposit By Branch</option>
                                    </select>
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Deposit Date </label>
                                    <input
                                        type="date"
                                        className="form-control"

                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Browse Slip </label>
                                    <input
                                        type="file"
                                        className="form-control"

                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>

                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary">
                                        Submit Deposit Request
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default DepositINRStaking