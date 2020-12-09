import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Nav';
import Title from './Title';
import Features from './Features';
import Form from './Form';
import Footer from './Footer';
import 'bootswatch/dist/lux/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Title />
      <Features />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
