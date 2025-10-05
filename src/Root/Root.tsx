import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Footer, { navList } from "../components/Footer"

const Root = () => {



  return (
    <>
      <Header />
      <NavigationBar navList={navList}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root