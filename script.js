body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  padding: 20px;
  margin: 0;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

#malla {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.semestre {
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
}

.semestre h2 {
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 10px;
}

.ramo {
  background: #fbd3e0; /* rosado */
  padding: 8px;
  border-radius: 6px;
  margin: 5px 0;
  position: relative;
  cursor: pointer;
}

.ramo.bloqueado {
  background: #ccc;
  color: #666;
  cursor: not-allowed;
}

.ramo.aprobado {
  background: #d3bce0; /* morado */
  text-decoration: line-through;
}

.ramo input.nota {
  width: 100%;
  margin-top: 5px;
}

.resumen-semestre {
  border-top: 1px solid #ddd;
  margin-top: 10px;
  padding-top: 10px;
  font-weight: bold;
  text-align: center;
}

@media (max-width: 768px) {
  .semestre {
    width: 90%;
  }
}
