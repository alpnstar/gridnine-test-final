import "./scss/base.scss";
import React, {FC} from "react";
import {AviaSearch} from "./components/AviaSearch/AviaSearch";


const App: FC = () => {
    return (
        <div className="app">
            <main className="main">
                <AviaSearch/>
            </main>
        </div>
    );
};

export default App;
