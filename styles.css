// === Datos de la Malla ===
const semestres = [
  {
    nombre: "1° Semestre",
    ramos: [
      { codigo: "BIOL034", nombre: "Biología Celular", creditos: 8 },
      { codigo: "BIOL035", nombre: "Lab. Biocelular", creditos: 2 },
      { codigo: "DEBD221", nombre: "Zoología", creditos: 6 },
      { codigo: "FMMP003", nombre: "Matemática", creditos: 8 },
      { codigo: "MVET611", nombre: "Intro. a la Medicina Veterinaria", creditos: 6 },
      { codigo: "QUI002", nombre: "Química", creditos: 8 }
    ]
  },
  {
    nombre: "2° Semestre",
    ramos: [
      { codigo: "BIOL166", nombre: "Bioquímica", creditos: 8, prereq: ["BIOL034", "BIOL035", "QUI002"] },
      { codigo: "CEGHC11", nombre: "Habilidades Comunicativas", creditos: 8 },
      { codigo: "ING119", nombre: "Inglés I", creditos: 12 },
      { codigo: "MVET621", nombre: "Agresión y Defensa Orgánica I", creditos: 18, prereq: ["BIOL034", "BIOL035"] },
      { codigo: "MVET622", nombre: "Cuerpo Animal I", creditos: 19, prereq: ["BIOL034", "BIOL035", "DEBD221"] }
    ]
  },
  {
    nombre: "3° Semestre",
    ramos: [
      { codigo: "DEBD130", nombre: "Métodos Cuant. RRNN", creditos: 9, prereq: ["FMMP003"] },
      { codigo: "ING129", nombre: "Inglés II", creditos: 12, prereq: ["ING119"] },
      { codigo: "MVET631", nombre: "Agresión y Defensa Orgánica II", creditos: 15, prereq: ["BIOL166", "MVET621"] },
      { codigo: "MVET632", nombre: "Cuerpo Animal II", creditos: 14, prereq: ["MVET622"] },
      { codigo: "MVET633", nombre: "Función y Disfunción Orgánica I", creditos: 15, prereq: ["MVET622"] }
    ]
  }
  // Aquí puedes seguir agregando los semestres restantes si lo necesitas
];

// === Funciones de la App ===
function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  semestres.forEach((semestre, index) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.id = "sem-" + (index + 1);

    const titulo = document.createElement("h2");
    titulo.textContent = semestre.nombre;
    div.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const box = document.createElement("div");
      box.className = "ramo";
      box.dataset.codigo = ramo.codigo;
      box.dataset.creditos = ramo.creditos;
      if (ramo.prereq) box.dataset.prereq = JSON.stringify(ramo.prereq);

      const label = document.createElement("label");
      label.innerText = `${ramo.nombre} (${ramo.creditos} créditos)`;
      box.appendChild(label);

      const input = document.createElement("input");
      input.type = "number";
      input.className = "nota";
      input.placeholder = "Nota";
      input.addEventListener("input", calcularPPA);
      box.appendChild(input);

      box.addEventListener("click", (e) => {
        if (box.classList.contains("bloqueado")) return;
        box.classList.toggle("aprobado");
        guardarEstado();
        desbloquearRamos();
        calcularPPA();
      });

      div.appendChild(box);
    });

    const resumen = document.createElement("div");
    resumen.className = "resumen-semestre";
    resumen.innerHTML = `PPA: <span class="ppa">-</span>`;
    div.appendChild(resumen);

    contenedor.appendChild(div);
  });

  restaurarEstado();
  desbloquearRamos();
  calcularPPA();
}

function desbloquearRamos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const prereq = JSON.parse(ramo.dataset.prereq || "[]");
    const aprobados = Array.from(document.querySelectorAll(".ramo.aprobado"))
      .map(el => el.dataset.codigo);

    const cumplidos = prereq.every(r => aprobados.includes(r));
    ramo.classList.toggle("bloqueado", !cumplidos && prereq.length > 0);
  });
}

function calcularPPA() {
  document.querySelectorAll(".semestre").forEach(sem => {
    let sumaNotas = 0;
    let sumaCreditos = 0;

    sem.querySelectorAll(".ramo.aprobado").forEach(ramo => {
      const nota = parseFloat(ramo.querySelector("input").value);
      const creditos = parseInt(ramo.dataset.creditos);
      if (!isNaN(nota)) {
        sumaNotas += nota * creditos;
        sumaCreditos += creditos;
      }
    });

    const ppa = sumaCreditos > 0 ? (sumaNotas / sumaCreditos).toFixed(2) : "-";
    sem.querySelector(".ppa").textContent = ppa;
  });
}

function guardarEstado() {
  const estado = Array.from(document.querySelectorAll(".ramo")).map(ramo => ({
    codigo: ramo.dataset.codigo,
    aprobado: ramo.classList.contains("aprobado"),
    nota: ramo.querySelector("input").value
  }));
  localStorage.setItem("mallaVeterinaria", JSON.stringify(estado));
}

function restaurarEstado() {
  const data = JSON.parse(localStorage.getItem("mallaVeterinaria") || "[]");
  data.forEach(estado => {
    const ramo = document.querySelector(`.ramo[data-codigo='${estado.codigo}']`);
    if (ramo) {
      if (estado.aprobado) ramo.classList.add("aprobado");
      ramo.querySelector("input").value = estado.nota || "";
    }
  });
}

// === Inicialización ===
document.addEventListener("DOMContentLoaded", crearMalla);
