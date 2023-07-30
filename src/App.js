import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import ResCard from "./component/ResCard";
import Body from "./component/Body";
const App = () =>
(
    <div>
        <Header/>
        <Body/>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);