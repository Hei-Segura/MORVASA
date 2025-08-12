import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

export default function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
        </Routes>
      </main>
      <QuoteForm />
      <Footer />
    </Router>
  );
}
