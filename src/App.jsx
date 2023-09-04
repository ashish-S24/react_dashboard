import SideBar from "./components/SideBar";
import Dashboard from "./page/Dashboard";
import Overlay from "./components/Overlay";
import { useEffect, useState } from "react";
import SignIn from "./page/SignIn";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingIndicator from "./components/LoadingIndicator";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  const [clicked, setClicked] = useState(false);
  const [childDone, setChildDone] = useState(false);
  const [validData , setValideData] = useState(false);
  // const [isWindowClosing, setIsWindowClosing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    igLink: "",
    ytLink: "",
  });
  const handleClick = (value) => {
    setClicked(value);
  };
  const handleChildDone = (value) => {
    setChildDone(value);
  };

  const handleFormData = (data) => {
    setFormData(data);
  };

  const handleValid = (value) => {
    setValideData(value);
  };

  // useEffect(() =>{
  //    const handleLogout =  (event) => {
  //     if(isAuthenticated && isWindowClosing)
  //     {
  //       logout();
  //     }
  //    };

  //    window.addEventListener("beforeunload" , handleLogout);

  //    return () => {
  //     window.removeEventListener("beforeunload" ,  handleLogout);
  //    }
  // },[isAuthenticated, isWindowClosing, logout]);

  if (isLoading) {
    return <LoadingIndicator></LoadingIndicator>;
  }

  return (
    <>
      {(isAuthenticated || validData) ? (
        <div className="flex sm:p-8 py-4 bg-primary lg:h-[130vh] h-[180vh] ">
          <SideBar></SideBar>
          <Dashboard
            onSubmit={handleFormData}
            formData={formData}
            childDone={childDone}
            handleChildDone={handleChildDone}
            handleClick={handleClick}
          />
        </div>
      ) : (
        <SignIn validData={handleValid}></SignIn>
      )}
      <Overlay
        clicked={clicked}
        childDone={childDone}
        handleChildDone={handleChildDone}
        handleClick={handleClick}
        onSubmit={handleFormData}
      ></Overlay>
    </>
  );
}

export default App;
