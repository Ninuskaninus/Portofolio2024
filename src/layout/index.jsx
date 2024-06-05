import React from "react";
import Index from "../pages/index";
import Nav from "../components/nav";
import Footer from "../components/footer";


export default function Layout() {
  return (
    <div className="App">
      <Nav/>
      <Index />
      <Footer />
    </div>
  )
}