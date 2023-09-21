import './App.css';
import Chat from './components/Chat';
//import Message from './components/Message';


function App() {
  return (
    <div className="App">
      {/* Acá se agregan los encabezados, barras de navegación u otros componentes globales */}
      <header className="App-header">
        <h1>Chatbot App</h1>
      </header>
      
      {/* Renderiza el componente Chat */}
      <Chat />

      

      {/* Acá se agregan el pie de página y otros elementos globales */}
      <footer className="App-footer">
        <p>Copyright LOLOLOL & OMNOMNOM, todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

