import React,{useState,useEffect} from 'react';
import Formulario from './components/Formulario';
import MainHeader from './components/MainHeader';
import Clima from './components/Clima';
import Error from './components/Error';
import axios from 'axios'

const App = () => {
      // state del formulario
      const [busqueda, setBusqueda] = useState({ 
        ciudad: '',
        pais: ''
    });
    const [consulta, setConsulta] = useState(false);
    const [resultado, setResultado] = useState({});
    const [error, setError] = useState(false);
  
    const { ciudad, pais } = busqueda;
    const apiKey = '144049dbdfd69c358d59c6004d181811';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`



    useEffect(() => {
      const consultarAPI = async () => { 
          if(consulta) {   
            const respuesta = await axios.get(url);
            const result =  respuesta.data;
            //console.log(respuesta)
    
            setResultado(result);
            setConsulta(false);
  
            if(respuesta.status === "404") {
                setError(true);
            } else {
                setError(false);
            }
          }
          
      }
      consultarAPI();
    },[consulta]);
  
    let componente;
    if(error) {
      componente = <Error mensaje="No hay resultados" />
    } else {
      componente = <Clima  resultado={resultado} />
    }
  return(
    <div className="container">
        <div className="cabezera">
            <MainHeader titulo='Clima React App' />
        </div>
        <div className="item1">
            <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsulta={setConsulta}
            />
        </div>
        <div className="item2">
          {componente}
        </div>
    </div>
  )
}

export default App;