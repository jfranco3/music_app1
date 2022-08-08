import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import App from './App';



const Router = () => {
    return (

        { /* Then we use Routes and Route. Routes acts like a regular JS Switch* Statement */ }
        // <Routes>
        //      depending on the path in the URL, one of these Routes will be returned and their component rendered 
        //     <Route path="/*" element={<Home/>} />
        //     <Route path="/dash" element={<Dashboard/>} />
        // </Routes>
    );
}

//Don't forget to export your newly create Router component
export default Router;