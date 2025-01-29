import { Empty, Pagination } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function WithdrawalAmountINRList() {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0 p-2">Bank Details
                                    </h4>
                                    <Link to={"/aibot/finance/withdrawal-amount-INR-create"} className='btn btn-primary'>Add Bank Details</Link>
                                </div>
                                <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">

                                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>#</th>
                                                <th style={{ width: '150px' }}>Name</th>
                                                <th style={{ width: '150px' }}>Bank</th>
                                                <th style={{ width: '150px' }}>IFSC</th>
                                                <th style={{ width: '150px' }}>A/C Number</th>
                                                <th style={{ width: '150px' }}>Created</th>
                                                <th style={{ width: '150px' }}>Status</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td colSpan={7}>
                                                    <Empty />
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total {0} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WithdrawalAmountINRList
