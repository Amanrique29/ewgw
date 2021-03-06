import React, { useEffect } from 'react';
import { useState} from 'react';

let arrayAfinidades=[
    {
        nombre: "trabajo físico",
    },
    {
        nombre: "sociabilidad",
    },
    {
        nombre: "pensamiento creativo",
    },
    {
        nombre: "capacidad de trabajar bajo presión",
    },
];

const valoresJSX=arrayAfinidades.map(function(afinidad)
{
    function Slider () {
    
        const [valor, setValor] = useState(1);
    
        let afinidades = JSON.parse(localStorage.getItem('afinidades'));
        
        if (afinidades === null) {
            afinidades = [{valor:1}];
        }
    
        useEffect (function () {
         
            let unaAfinidad = {
                nombre: 'Trabajo físico',
                valor: 1
            }
        
            afinidades.push(unaAfinidad);
        
            let afinidadenJson = JSON.stringify(afinidades);
    
            localStorage.setItem('afinidades', afinidadenJson);
        })
    
        function handleChange (event) {
          console.log(event.target.value);
          setValor(event.target.value);
          console.log('Lo que queremos ver es ' + valor)
          
          let unaAfinidad = {
            valor: valor
        }
    
        afinidades.push(unaAfinidad);
    
        let afinidadenJson = JSON.stringify(afinidades);
    
        localStorage.setItem('afinidades', afinidadenJson);
    
        }
    
      
        return (
          <div className="sliderContainer">
          <input
          className="sliderPrueba"
            type="range"
            id="sociabilidad"
            min={1}
            max={5}
            step={1}
            
            defaultValue={valor} 
            onChange={handleChange} 
            onMouseUp={handleChange} 
          />
          <p>{valor}</p>
          </div>
        )
      
      }

})

  export default Slider