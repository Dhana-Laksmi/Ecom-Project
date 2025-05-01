import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import UserStore from "../store/UserStore";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
      <>
        {/* <Hero /> */}
        <UserStore.Provider value={{userName:"Kamal"}}>
          <Nav />
          <Outlet />
          <Footer /> 
        </UserStore.Provider>
      </>
    );
  };
  export default AppLayout;