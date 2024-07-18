import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/News_Header";
import Business from "../components/News_Business";
import Community from "../components/News_Community.js";
import Employment from "../components/News_Employment";
import "../css/App.css";
import Navbar from "../components/Navbar.js";
function News() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Business />
        <Community />
        <Employment />
      </div>
    </div>
  );
}

export default News;
