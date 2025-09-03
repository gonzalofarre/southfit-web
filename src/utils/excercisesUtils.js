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
      transformHeader: (header) => header.trim(), // :key: normaliza los headers
    });
    const cleanData = parsed.data
      .map((e) => {
        console.log("Fila cruda:", e); // :eyes: para debug
        return {
          Reps: e.Reps ? String(e.Reps).trim() : "",
          Ejercicio: e.Ejercicio ? String(e.Ejercicio).trim() : "",
          Zona: e.Zona ? String(e.Zona).trim() : "",
        };
      })
      .filter((e) => e.Ejercicio);
    
    return cleanData;
  } catch (err) {
    console.error("Error leyendo CSV:", err);
    return [];
  }
};