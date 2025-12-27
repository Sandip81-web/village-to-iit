function showAbout() {
    const aboutSection = document.querySelector(".about");
    aboutSection.classList.remove("hidden");
    aboutSection.scrollIntoView({ behavior: "smooth" });
}
function toggleDark() {
    document.body.classList.toggle("dark");
}

fetch("PASTE_YOUR_SCRIPT_URL_HERE")
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

