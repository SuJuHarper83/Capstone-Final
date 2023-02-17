// General Imports
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoLibraryPage from "./pages/VideoLibraryPage/VideoLibraryPage";
import ExerciseLibraryPage from "./pages/ExerciseLibraryPage/ExerciseLibraryPage";
import JournalEntryPage from "./pages/JournalEntryPage/JournalEntryPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ExerciseList from "./components/ExerciseList/ExerciseList";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

// const ExerciseList = (props) => {
//   let { exerciseId } = useParams();
//   return <div>{exerciseId}</div>;
// };

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="main">
      <button onClick={() => setShowNavBar(true)}>Menu</button>
      {showNavBar && <Navbar setShowNavBar={setShowNavBar} />}
      <ExerciseLibraryPage />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/exercise_library"
          element={
            <PrivateRoute>
              <ExerciseLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/exercise_library/:exerciseId"
          element={
            <PrivateRoute>
              <ExerciseLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/video_library"
          element={
            <PrivateRoute>
              <VideoLibraryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/video_library/:videoId"
          element={
            <PrivateRoute>
              <VideoLibraryPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/:id"
          element={
            <PrivateRoute>
              <JournalEntryPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
