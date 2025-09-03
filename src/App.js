import React, { useEffect, useState } from "react";
import Landing from "./components/Landing/Landing";
import { fetchExercises } from "./utils/excercisesUtils";
import SplashScreen from "./components/SplashScreen/SplashScreen";


export default function App() {
  const [exercises, setExercises] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    fetchExercises().then(data => {
      setExercises(data)});
  }, []);
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }
  return <Landing exercises={exercises} />;
}