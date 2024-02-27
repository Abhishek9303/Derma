"use client";
import React, { useState } from "react";
import "@/public/css/moduleNav.css";
import Link from "next/link";
import BookApp from "../modal/BookApp";
const Navbar = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    if(modal){
      return <BookApp/>
    }
  };

  return (
    <>
      <div className="nav">
        Derma
        <div className="navP1">
          <Link href="/home">Home</Link>
          <Link href="/">Contact Us</Link>
          <button className="btn-nav" onClick={()=>{
            openModal()
          }}>Book An Appointment</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
