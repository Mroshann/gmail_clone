import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessage } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";


function App() {
  const user = useSelector(selectUser);
  const sendMessage = useSelector(selectSendMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl : user.photoURL
        }))
      }
    })
  },[dispatch]);

  return (
    <Router>
      {!user ? <Login/> :
      <div className="App font-['Open_Sans] h-[100vh]">
        <Header/>
        <div className="flex h-[100vh] ">
          <Sidebar/>
          <Routes>
            <Route path="/" element={ <EmailList/>}/>
            <Route path="/mail" element={ <Mail/> }/>
          </Routes>
        </div>
        {sendMessage && <SendMail/>}
        
      </div>
      }
    </Router>
  );
}

export default App;
