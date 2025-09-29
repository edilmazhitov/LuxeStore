import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

const Root = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <Outlet />
    </>
  )
}

export default Root