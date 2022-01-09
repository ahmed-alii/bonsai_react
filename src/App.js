import SignInPage from "./pages/SignInPage";
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateAccount from "./pages/CreateAccount";
import CreateAccountDetails from "./pages/CreateAccountDetails";
import ScheduleDemo from "./pages/ScheduleDemo";
import Billing from "./pages/Billing";
import Dash from "./pages/Dash";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<CreateAccount/>}/>
                <Route path="/account-continue" element={<CreateAccountDetails/>}/>
                <Route path="/schedule-demo" element={<ScheduleDemo/>}/>

                <Route path="/billing" element={<Billing/>}/>
                <Route path="/dash" element={<Dash/>}/>


            </Routes>
        </BrowserRouter>
    );
}

export default App;
