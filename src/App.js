import './App.css';
import Chat from './components/Chat';
//import Message from './components/Message';


function App() {
  return (
    <div className="App">
      {/* Aquí puedes agregar encabezados, barras de navegación u otros componentes globales */}
      <header className="App-header">
        <h1>Chatbot App</h1>
      </header>
      
      {/* Renderiza el componente Chat */}
      <Chat />

      

      {/* Aquí puedes agregar pie de página u otros elementos globales */}
      <footer className="App-footer">
        <p>Copyright LOLOLOL & OMNOMNOM, todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

/*
{/* Renderiza un mensaje directamente en app.js }
<Message text="Hola, ¿en qué puedo ayudarte?" type="bot" />
*/