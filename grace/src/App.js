import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Navigation from "components/navigation/navigation.component";
import Home from "routes/home/home.component";
import AboutUs from "routes/aboutus/aboutus.component";
import Articles from "routes/articles/index";
import Authentication from "routes/authentication/authentication.component";
import Signup from "components/authentication_components/signup/signup_section.component";
import Dashboard from "components/dashboard/dashboard_section.component";
import Questions from "components/questions/questions_section.component";
import "./App.css";
import Profile from "components/Profile/Profile";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ForgetPassword from "components/authentication_components/signin/ForgetPassword";
import ArticaleDetails from "routes/articles/articale_details/articale_details.component.jsx";

function App() {
  const [userData, setUserData] = useState(null);
  const saveUserInformation = () => {
    let decoded = jwt_decode(localStorage.getItem("token"));
    setUserData(decoded);
    return decoded;
  };

  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/questions");
      setQuestions(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getQuestions();
  }, []);

  const UserGurd = (props) => {
    if (
      jwt_decode(localStorage.getItem("token")) &&
      jwt_decode(localStorage.getItem("token")).isAdmin === false
    ) {
      return props.children;
    } else {
      return <Navigate to="/signin" />;
    }
  };

  const AdminGurd = (props) => {
    if (
      jwt_decode(localStorage.getItem("token")) &&
      jwt_decode(localStorage.getItem("token")).isAdmin === true
    ) {
      return props.children;
    } else {
      return <Navigate to="/signin" />;
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserInformation();
    }
  }, []);

  return (
    <>
      <Navigation userData={userData} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route
          path="articles"
          element={
            <UserGurd>
              <Articles userData={userData} />
            </UserGurd>
          }
        />
        <Route path="aboutus" element={<AboutUs />} />
        <Route
          path="signin"
          element={<Authentication saveUserInformation={saveUserInformation} />}
        />
        <Route path="signup" element={<Signup />} />
        <Route
          path="dashboard"
          element={
            <AdminGurd>
              <Dashboard />
            </AdminGurd>
          }
        />
        <Route
          path="questions"
          element={
            <UserGurd>
              <Questions questions={questions} />
            </UserGurd>
          }
        />
        <Route
          path="profile"
          element={
            <UserGurd>
              <Profile userData={userData} />
            </UserGurd>
          }
        />
        <Route
          path="articles/:id"
          element={
            <UserGurd>
              <ArticaleDetails />
            </UserGurd>
          }
        />
        <Route path="forgetPaswword" element={<ForgetPassword />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
