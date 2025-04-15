import { db } from "../firebaseConfig.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const appointmentList = document.getElementById("appointmentList");

async function loadAppointments() {
  appointmentList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "appointments"));
  querySnapshot.forEach((doc) => {
    const li = document.createElement("li");
    const data = doc.data();
    li.textContent = `${data.name} - ${data.date}`;
    appointmentList.appendChild(li);
  });
}

document
  .getElementById("addAppointment")
  .addEventListener("click", async () => {
    const name = document.getElementById("patientName").value;
    const date = document.getElementById("appointmentDate").value;
    if (!name || !date) return alert("Fill all fields");
    await addDoc(collection(db, "appointments"), { name, date });
    alert("Appointment added");
    loadAppointments();
  });

loadAppointments();
