import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom';
import Slider from './Slider';
import './Test.css';
import Mapa from './Mapa.js';

function Test() {

    let mapaJSX = <main>
        <h3>Elige tu área geográfica</h3>
        <img className="test-img" src="españa.jpg" alt=""></img>
        <Mapa/>
        <button onClick={registrarProvincia} value="Madrid" className="botonContinuar" >Madrid</button>
        <button onClick={registrarProvincia} value="Valencia" className="botonContinuar" >Valencia</button>
        <button onClick={siguiente} className="botonContinuar" >Continuar</button>
    </main>;

    let provincias = [];

    let slidersJSX = <main>
        <h3>Define tus preferencias</h3>
        <Slider provincias={provincias}/>

        <button onClick={siguiente} className="botonContinuar" >Continuar</button>
    </main>;

    let temasJSX = <main>
        <h3>Elige entre las temáticas</h3>
        <img className="test-img" src="temas.png" alt=""></img>
        <Link to="/resultados" className="botonContinuar">Resultados</Link>
    </main>;

    let [test, setTest] = useState(mapaJSX);
    let [num, setNum] = useState(1);
    
    //Cogemos el valor de la provincia para guardarlo en el array provincias[] si no existe el valor dentro
    function registrarProvincia(event) {
        console.log(event.target.value);
        if (provincias.indexOf(event.target.value) === -1) {
            provincias.push(event.target.value);
        }
        console.log(provincias)

        //Meter en el local storage el array provincias
        let listadoProvinciasEnJson = JSON.stringify(provincias);
        localStorage.setItem('provincias', listadoProvinciasEnJson);
    }

    function siguiente() {
        console.log(num);
        switch (num) {

            case 1:
                setTest(slidersJSX);
                setNum(num++);
                break;
            case 2:
                setTest(temasJSX);
                break;
            default:
                console.log("Ha habido un error.");
        }
    };

    return (
        <>
            {test}
        </>
    )
}

export default Test;