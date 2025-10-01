// utils/exercisesUtils.js
import Papa from "papaparse";
import { GOOGLE_API_KEY } from "./googleUtils";

export const fetchExercises = async () => {
  try {
    const res = await fetch(GOOGLE_API_KEY);
    const csvText = await res.text();
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(), // normaliza los headers
    });
    const cleanData = parsed.data
      .map((e) => {
        console.log("Fila cruda:", e); // debug
        // Tomamos Reps, Reps2 y Reps3
        const repsOptions = [e.Reps, e.Reps2, e.Reps3]
          .filter(Boolean)                 // quitar vacíos/undefined
          .map(r => String(r).trim());    // normalizar a string
        // Elegir una al azar
        const randomReps = repsOptions.length > 0
          ? repsOptions[Math.floor(Math.random() * repsOptions.length)]
          : "";
        return {
          Ejercicio: e.Ejercicio ? String(e.Ejercicio).trim() : "",
          Zona: e.Zona ? String(e.Zona).trim() : "",
          Reps: randomReps
        };
      })
      .filter(e => e.Ejercicio); // filtrar filas sin ejercicio
    return cleanData;
  } catch (err) {
    console.error("Error leyendo CSV:", err);
    return [];
  }
};