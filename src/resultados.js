import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link, useParams, useHistory } from 'react-router-dom';
import './Resultados.css';
import Chart from 'chart.js';
import Grafica from './Grafica';
import DescripcionBuscador from './DescripcionBuscador.js';

function Resultados() {

    useEffect(function(){
        window.location="#titularPagina"
    },[])

    let history = useHistory();

    let listadoAfinidades = JSON.parse(localStorage.getItem('afinidades'));

    let listadoProvincias = JSON.parse(localStorage.getItem('provincias'));


    let [actividadesElegidas, setActividadesElegidas] = useState([]);
    let [numPagina, setNumPagina] = useState(0);
    let [cargando, setCargando] = useState(false);
    let [tematicasElegidasNombre, setTematicasElegidasNombre] = useState([]);
    let [tematicasElegidasLogo, setTematicasElegidasLogo] = useState([]);

    useEffect(function () {

        setNumPagina(0);

        let afinidadesEnviar = {
            afinidades: listadoAfinidades
        }
        setCargando(true)
        fetch('resultadosAfinidades', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(afinidadesEnviar)
        }).then(function (respuesta) {
            return respuesta.json()
        }).then(function (datos) {
            console.log(datos)

            let arrayElegidas = [];

            for (let i = 0; i < datos.length; i++) {
                for (let j = 0; j < listadoProvincias.length; j++) {

                    if (listadoProvincias[j] === datos[i].actividad.provincia) {
                        arrayElegidas.push(datos[i])
                    }
                }
            }

            setActividadesElegidas(arrayElegidas);
            setCargando(false)
        })

    }, [])

    useEffect(function () {

        let tematicasNombreNew = [];
        let tematicasLogoNew = [];
        
        for (let a = 0; a < actividadesElegidas.length; a++) {
            if (tematicasNombreNew.length === 0 && tematicasLogoNew.length === 0) {
            
                tematicasNombreNew.push(actividadesElegidas[a].tema[0]);
                tematicasLogoNew.push(actividadesElegidas[a].logotema[0]);
                
            } else {
                let tematicaExiste = false;
                for (let b = 0; b < tematicasNombreNew.length; b++) {
                    if (actividadesElegidas[a].tema[0] === tematicasNombreNew[b] && actividadesElegidas[a].logotema[0].alt === tematicasLogoNew[b].alt) {
                        tematicaExiste = true;
                    }
                }
                if (tematicaExiste === false) {

                    tematicasNombreNew.push(actividadesElegidas[a].tema[0]);
                    tematicasLogoNew.push(actividadesElegidas[a].logotema[0]);
                }
            }
        }
        setTematicasElegidasNombre(tematicasNombreNew);
        setTematicasElegidasLogo(tematicasLogoNew);
    }, [actividadesElegidas]);

    function irABuscador() {
        history.push("/buscador")
    }

    console.log(tematicasElegidasNombre);
    console.log(tematicasElegidasLogo);


    const tematicasLogosJSX = tematicasElegidasLogo.map(function (logo) {
        return (
            <>
                <img src={logo.url} className="logo-ods-round" />
            </>
        )
    })

    const tematicasNombresJSX = tematicasElegidasNombre.map(function (nombre, i) {
        if (i < tematicasElegidasNombre.length - 1) {
            return <>{nombre}, </>
        }
        return <>{nombre}</>
    })


    const actividadesElegidasJSX = actividadesElegidas.map(function (activity, indice) {

        console.log(activity)

        if (actividadesElegidas.length === 0) {
            return <p>No hay resultados que mostrar</p>

        } else {
            if (indice >= numPagina * 6 && indice < (numPagina * 6) + 6) {
                return (

                    <DescripcionBuscador activity={activity} />
                );
            }
        }
    })

    function paginaSiguiente() {
        if (actividadesElegidas.length > 6 && numPagina * 6 + 6 < actividadesElegidas.length) {
            setNumPagina(numPagina + 1)
        }
    }

    function paginaAnterior() {
        setNumPagina(numPagina - 1)
    }

    let numTotalPaginas;
    if (actividadesElegidas.length % 6 === 0) {
        numTotalPaginas = actividadesElegidas.length / 6
    } else if (actividadesElegidas.length % 6 !== 0) {
        numTotalPaginas = Math.floor((actividadesElegidas.length / 6 + 1))
    }


    const provinciasJSX = listadoProvincias.map(function (provincia, i) {

        if (i < listadoProvincias.length - 1) {
            return <>{provincia}, </>
        }
        return <>{provincia}</>
    });

    return (
        <main className="mainMapa">
            <h3 className="titularPagina">Resultados del test</h3>

            <div class="blobResultados">
                <svg viewBox="0 0 200 200" >
                    <path d="M65.2,-18.9C73.4,4.3,61.6,36.4,39.7,51.5C17.8,66.7,-14,65,-38.1,48.4C-62.3,31.9,-78.6,0.5,-70.9,-21.9C-63.3,-44.3,-31.6,-57.8,-1.6,-57.2C28.4,-56.7,56.9,-42.2,65.2,-18.9Z" transform="translate(100 100)" />
                </svg>
            </div>

            <Grafica />

            <div className="textos2">
                <p>En función de tus preferencias, creemos que puedes tener afinidad con las siguientes temáticas:</p>
            </div>
            <div>
                {tematicasNombresJSX}
            </div>
            <div>
                {tematicasLogosJSX}
            </div>

            {/* <div className="textos">
                <p>Si no te convencen las sugerencias, prueba nuestro buscador convencional.</p>
            </div>
            <div>
                <button class="botonLeerMas" onClick={irABuscador}>Ir a buscador</button>
            </div> */}
            {/* <div className="ofertasProvincia">
                <p>Ofertas en la(s) provincia(s) de: </p>
                {provinciasJSX}
            </div> */}

            <div>
                {cargando
                    ?
                    <div id="loading"></div>
                    :
                    !cargando && actividadesElegidas.length === 0
                        ?
                        <p>No hay resultados que mostrar</p>
                        :

                        <div>

                            <div className="textos">

                                <p>Si no te convencen las sugerencias, prueba nuestro buscador convencional.</p>
                            </div>
                            <div className="textoIrABuscador">
                                <button class="buscadorConvencionalLp2" onClick={irABuscador}>Ir a buscador</button>
                            </div>
                            <div className="ofertasProvincia">
                                <p>Ofertas en la(s) provincia(s) de: </p>
                                {provinciasJSX}
                            </div>

                            <p className="numResultados">Hay un total de {actividadesElegidas.length} resultado(s)</p>
                            <div className="totalActividades">{actividadesElegidasJSX}</div>
                        </div>
                }
            </div>
            <div className="botonesAtrasSiguiente">
                {

                    numPagina * 6 + 6 <= 6 ? null : <button className="botonPasarPagina" onClick={paginaAnterior}>Anterior </button>
                }
                {
                    numPagina * 6 + 6 < actividadesElegidas.length ? <button className="botonPasarPagina" onClick={paginaSiguiente}>Siguiente </button> : null

                }
            </div>
            {
                numTotalPaginas === 0 ? null : <p className="paginaActual">Página {numPagina + 1} de {numTotalPaginas}</p>
            }

        </main>
    )
};

export default Resultados;