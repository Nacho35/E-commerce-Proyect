import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import Parent from "../components/Parent";
import Parent2 from "../components/Parent2";
import Parent3 from "../components/Parent3";
import Parent4 from "../components/Parent4";
import Parent5 from "../components/Parent5";
import Parent6 from "../components/Parent6";
import Parent7 from "../components/Parent7";

const Main = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} exact />
				<Route path="/home" element={<Parent />} exact />
				<Route path="/about" element={<Parent2 />} exact />
				<Route path="/chef" element={<Parent3 />} exact />
				<Route path="/menu" element={<Parent4 />} exact />
				<Route path="/gallery" element={<Parent5 />} exact />
				<Route path="/contact" element={<Parent6 />} exact />
				<Route path="/form" element={<Parent7 />} exact />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Main;
