

const RequestEpinAdd = () => {
    return (
        <>
            <div className="PageHeading">
                <h1>Request E-Pin</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Deposit INR (Package)</span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row" >

                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Kit Code <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this Kit Code</option>
                                        <option value={1}>Active Package</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Kit Contains <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='Enter Kit Contains'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">No. of E-Pins <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter No. of E-Pins '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Kit Price <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Kit Price '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Mode <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-control" aria-label="Default select example">
                                        <option selected>Open this Payment Mode</option>
                                        <option value={1}>Draft</option>
                                        <option value={1}>Cheque</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Payment Date <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder='Enter Kit Price '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Reference No. <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Reference No.'
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-6 mb-3 mt-2">
                                    <label for="exampleFormControlInput1" class="form-label">Bank Name <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='Enter Kit Price '
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>

                                <div className="col-xl-12 text-align-center">
                                    <button type="button" className="btn btn-primary ">
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

export default RequestEpinAdd