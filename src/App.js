import './App.css';
import CryptoButton from './crypto-button/crypto-button';
import Footer from './footer/footer';
import Header from './header/header';

function App() {
  const username = 'Usuario 1';
  const avatarUrl = 'duck.png'; // Reemplaza con la ruta de tu imagen de avatar

  return (
    <div className="App">
      <Header username={username} avatarUrl={avatarUrl} />
      <CryptoButton />
      <Footer />
    </div>
  );
}

export default App;