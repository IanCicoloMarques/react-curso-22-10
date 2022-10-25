import "./App.css";

function App() {
  document.title = "Exercício - Café da manhã";
  document.documentElement.lang = "pt-br";
  return (
    <html>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        <div className="root">
          <div>
            <h1>Lista de Compras</h1>
            <ul>
              <li>Pão</li>
              <li>Banana</li>
              <li>Milk Shake de Doce de Leite</li>
              <li>Nutella</li>
              <li>Sorvete</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
