
const problemaSelect = document.getElementById("problema");
const formularioDiv = document.getElementById("formulario");
const contactForm = document.getElementById("contactForm");
const alerta = document.getElementById("alerta");

const correos = {
  "Académico": "j.abarca@cumbressanjavier.edu.mx",
  "Disciplina/Formación": "j.misael.abarca@gmail.com",
  "Academias Deportivas": "j.abarca@edu.cumbressanjavier.com",
  "Tutoría": "toxictwistedtown@gmail.com",
  "Administración/Caja": "joset.abarca23b@udgvirtual.udg.mx",
  "Psicopedagogía": "psicopedagogia@cumbres.edu.mx"
};

problemaSelect.addEventListener("change", () => {
  formularioDiv.style.display = problemaSelect.value ? "block" : "none";
});

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;
  const area = problemaSelect.value;
  const destinatario = correos[area];

  try {
    await db.collection("consultas").add({
      nombre,
      correo,
      mensaje,
      area,
      destinatario,
      fecha: new Date()
    });

    contactForm.reset();
    formularioDiv.style.display = "none";
    problemaSelect.value = "";
    alerta.style.display = "block";
    setTimeout(() => alerta.style.display = "none", 4000);
  } catch (error) {
    console.error("Error al guardar:", error);
  }
});
