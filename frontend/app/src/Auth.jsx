import axios from "axios";

const login = async() =>{
 const res = await axios.post(
  "http://localhost:5000/login",
  {
   email:"TANISH25@gmail.com",
   pass:"TK_23@45"
  }
 );

 localStorage.setItem("token", res.data.token);
 alert("Login Succesfull");
}

const token = localStorage.getItem("token");
if (token){
 config.headers.Authorization = `Bearer ${token}`;

 return config;
}

const getProfile = async () => {
 const res = await axios.get("/profile");
 console.log(res.data);
}

