
import Loader from "../../common/loader/Loader"
import { dashboardPublic } from "../../api/login/Login"
import { Link } from "react-router-dom"
import '../dashboardPalyNif/dashboardPalyNif.css'
import Left from "./left/Left"
import Right from "./right/Right"
import Middle from "./middle/Middle"


function DashboardPalyNif() {
    return (
        <>
            {/* <div className="ContentArea">
                <div className="card ContentArea-card">
                    <div className="card-body"> */}
            <div class="container py-4">
                <div class="row">
                    <Left />
                    {/* <Middle />
                    <Right /> */}
                </div>
            </div>
            {/* </div >
                </div >
            </div > */}
        </>
    )
}
export default DashboardPalyNif