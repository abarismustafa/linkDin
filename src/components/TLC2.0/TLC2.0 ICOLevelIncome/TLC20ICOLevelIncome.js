import { Pagination } from "antd";
// import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import TLC20ICOLevelIncomeFilter from "./TLC2.0 ICOLevelIncomeFilter/TLC2.0 ICOLevelIncomeFilter";



const TLC20ICOLevelIncome = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "AIBOT2.0",
        title_2: "AIBOT2.0 ICO Level Income",
        path_2: ""
    };
    return (
        <>
            <div className="PageHeading">
                <h1>AIBOT.0 ICO Level Income</h1>
            </div>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Fillter AIBOT.0 ICO Level Income</span>
                    </div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport">
                            <div className="form-row" >
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Start Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    // value={filterInitial?.start_date}
                                    // name="start_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">End Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    // value={filterInitial?.end_date}
                                    // name="end_date"
                                    // onChange={handleChange}
                                    />
                                </div>
                                <div className="col-xl-4 text-center mt-4">
                                    <button type="button" className="btn btn-primary mt-2">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card mt-2" style={{ overflow: 'auto' }}>
                    <div className="card-body">
                        <div className="GridUi no-header-footer-grid mt-3" id="all_transaction">
                            <div id="rechargehistorytbl_wrapper" className="dataTables_wrapper">

                                <table id="rechargehistorytbl" className="table table-striped table-bordered table-hover display fixed_headers dataTable" style={{ width: 1250 }} role="grid" aria-describedby="rechargehistorytbl_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>S.NO</th>
                                            <th style={{ width: '150px' }}>User ID</th>
                                            <th style={{ width: '150px' }}>Name</th>
                                            <th style={{ width: '150px' }}>Token</th>
                                            <th style={{ width: '200px' }}>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dataTables_info_page">
                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                        Total {''}  entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                        <Pagination
                        // showSizeChanger
                        // onShowSizeChange={''}

                        // defaultCurrent={1}
                        // onChange={onChangeVal}
                        // total={totalCount}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}

export default TLC20ICOLevelIncome