import { Navigate, Outlet } from "react-router-dom"
import DasRightSectionPage from "../../components/admin/dasboardRightSection/DasBoardRightSection"



function PrivateRoute({ component: component, tokenNoti, walletData, services }) {
    const token = window.localStorage.getItem('userIdToken')
    return token ?
        <DasRightSectionPage tokenNoti={tokenNoti} walletData={walletData} PrivateRoute={PrivateRoute} services={services} />

        : <Navigate to='/login-area' />
}
export default PrivateRoute