import SignInPage from "./pages/SignInPage";
import './App.css';


import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/*" element={<SignInPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
