import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Formulario from './Componentes/Formulario';
import Imagen from './Componentes/Imagen';
import Footer from './Componentes/Footer';
import './styles/footer.css'


function App() {
  return (
    <div className="row m-0">

      <div className='col-md-6'>

        <Formulario />
      </div>
      <div className='col-md-6 '>
        <Imagen />

      </div>
      <div className='col-md-12 F'>
        <Footer />
      </div>




    </div>
  );
}

export default App;
