function showAbout() {
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.remove("hidden");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
function toggleDark() {
    document.body.classList.toggle("dark");
}
const API_URL = "https://script.google.com/macros/s/AKfycbxADJDK2HBiYSf5PqYJn9P-aCV3bK1Epqvt6bvvOl02CCCy5t7q99NPMAj9AkgH8qcLvg/exec

";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log("DATA FROM SHEET:", data);
  })
  .catch(err => {
    console.error("FETCH ERROR:", err);
  });

fetch("API_URL")
  .then(res => res.json())
  .then(data => {
    data.forEach(row => {
      const cls = row[1];
      const sub = row[2];
      const text = row[3];
      const pdf = row[4];

      if (cls === "Class 10" && sub === "Physics") {
        document.getElementById("c10-physics-text").innerText = text;
        document.getElementById("c10-physics-pdf").href = pdf;
      }
    });
  });




