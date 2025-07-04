import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Package from './Package';
import Component from './Component';
import Home from './Home';
import DOM from './DOM';
import Hookes from './Hooks';
import NodeIntroduction from './NodeJS/Introduction';

function Result() {
    return (
        <div>
            <Routes>
                <Route path="/package" element={<Package />} />
                <Route path="/component" element={<Component />} />
                <Route path="/dom" element={<DOM />} />
                <Route path="/hooks" element={<Hookes />} />
                <Route path="/" element={<Home />} />
                <Route path="/nodejs/introduction" element={<NodeIntroduction />} />
            </Routes>
        </div>
    );
}

export default Result;
