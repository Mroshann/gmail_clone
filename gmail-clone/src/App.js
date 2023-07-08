import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { selectSendMessageIsOpen} from "./features/mailSlice";
import {useSelector} from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  
const SendMessageIsOpen = useSelector(selectSendMessageIsOpen); 
  const user = useSelector(selectUser);

return (
    <BrowserRouter>
      {!user?
      (<Login/>): (
      <div className="app">
       <Header/>
      <div className="app__body">
        <Sidebar/>
         <Routes>
         <Route path ="/" element ={<EmailList/>}/>
         <Route path ="/mail" element ={<Mail/>}/>
        </Routes>
       
      </div>
      {SendMessageIsOpen && <SendMail />}
       </div>
      )}
    </BrowserRouter>
      
      
    
  
  );
}

export default App;
