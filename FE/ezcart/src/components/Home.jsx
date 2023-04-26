import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Categories from "../pages/Categories/Categories";

function Home() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    let ignore = false;
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    return () => {
      ignore = true;
    };
  }, []);

  if(currentUser == undefined && currentUser == null){
    navigate('/login');
    return (<></>);
  }

  return (
    <div>
      <Categories />
    </div>
  );
}

export default Home;
