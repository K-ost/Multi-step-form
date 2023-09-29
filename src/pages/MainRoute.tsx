import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../store/hooks"

const MainRoute = () => {
  const { name, email, phone } = useAppSelector(state => state.app)

  return (
    <div>
      {!name.length || !email.length || !phone.length ? <Navigate to="/" /> : <Outlet />}
    </div>
  )
}

export default MainRoute
