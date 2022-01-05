import SignInPage from "./pages/SignInPage";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from "./pages/CreateAccount";
import CreateAccountDetails from "./pages/CreateAccountDetails";
import ScheduleDemo from "./pages/ScheduleDemo";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<CreateAccount/>}/>
                <Route path="/account-continue" element={<CreateAccountDetails/>}/>
                <Route path="/schedule-demo" element={<ScheduleDemo/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
