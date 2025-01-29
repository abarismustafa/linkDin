


export const TransferAIBOTGiftNewAdd = () => {
    return (

        <>
            <div className="PageHeading">
                <h1>Transfer AIBOTGift New</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Transfe AIBOTGift New</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-md-6">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Gift AIBOT New Wallet</div>
                                        <div className="wallet-balance">AIBOT 0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="wallet-card">
                                        <div className="wallet-title">Package Wallet Balance</div>
                                        <div className="wallet-balance">$0</div>
                                        <div className="bar-chart">
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                            <div className="bar" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Select Wallet <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this select Wallet</option>
                                        <option value={1}>Package</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">AIBOT</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter AIBOT'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-2 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">One Time Password  </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter One Time Password'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-2 mb-3 mt-4">
                                    <div className="form-check mt-4">
                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Check me out
                                        </label>
                                    </div>
                                </div>
                                <div className="col-xl-2 text-center mt-4">
                                    <button type="button" className="btn btn-primary mt-4">
                                        Send OTP
                                    </button>
                                </div>
                                <div className="col-xl-12 text-center">
                                    <button type="button" className="btn btn-primary">
                                        Submit
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
