import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Body from "./appLayout/body";
import Footer from "./appLayout/footer";
import FooterFinal from "./appLayout/footerFinal";
import Header from "./appLayout/header";

const AppLayout = () => (
    <>
        <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/footerfinal" element={<FooterFinal />} />
    </Routes>

    </>
);

function App() {
    return <>
    <BrowserRouter><AppLayout/></BrowserRouter>
    </>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
