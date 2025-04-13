// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase configuration
const appSettings = {
  databaseURL:
    "https://realtime-database-9cefe-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase app and database
const app = initializeApp(appSettings);
const database = getDatabase(app);
const patientsRef = ref(database, "patients");

// DOM elements
const patientForm = document.getElementById("patientForm");
const patientList = document.getElementById("patientList");

// Add Patient
patientForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const symptoms = document.getElementById("symptoms").value;

  const newPatientRef = push(patientsRef);
  set(newPatientRef, {
    name,
    age,
    gender,
    symptoms,
  });

  patientForm.reset();
});

// Load Patient Records
onValue(patientsRef, (snapshot) => {
  patientList.innerHTML = "";
  snapshot.forEach((childSnapshot) => {
    const patient = childSnapshot.val();
    const li = document.createElement("li");
    li.textContent = `${patient.name}, Age: ${patient.age}, Gender: ${patient.gender}, Symptoms: ${patient.symptoms}`;
    patientList.appendChild(li);
  });
});
