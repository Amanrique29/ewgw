import React, { useState } from 'react';

function Bizkaia({name, seleccionarProvincia}) {
    let [seleccionado, setSeleccionado]= useState(false);

    let style = {
        fill: "#d9d4ba"
    };
    if(seleccionado) {
        style.fill = "red";
    }
    function seleccionar() {
        seleccionarProvincia(name, !seleccionado);
        setSeleccionado(!seleccionado);
    }
    
    return (
        <svg onClick={seleccionar}>
            <g id="BIZKAIA"><g id="LWPOLYLINE-7" data-name="LWPOLYLINE"><polygon style={style} class="provinciaDibujo" points="334.8 24.03 334.05 23.75 333.72 23.55 333.33 23.45 333.05 23.22 332.68 22.98 332.39 22.7 332.01 22.51 331.68 22.31 331.25 22.17 330.5 21.89 330.11 21.84 329.7 21.7 329.31 21.6 328.94 21.5 328.46 21.45 328.04 21.32 327.61 21.26 327.23 21.08 326.86 20.84 326.43 20.64 326.1 20.45 325.76 20.27 325.49 20.02 325.15 19.84 324.82 20.01 324.82 20.4 324.96 20.88 324.95 21.25 325.01 21.64 324.62 21.58 324.44 21.21 324.3 20.83 324.11 20.44 323.88 20.11 323.68 19.73 323.49 19.3 323.41 18.93 323.26 18.55 322.98 18.22 322.69 17.98 322.22 17.83 321.84 17.98 321.47 18.12 321.13 18.31 320.8 18.49 320.43 18.54 320.04 18.58 319.66 18.68 319.29 18.72 318.9 18.82 318.52 18.87 318.05 18.81 317.68 18.71 317.29 18.62 316.92 18.67 316.54 18.81 316.07 19 315.68 19.14 315.4 19.43 315.16 19.71 314.97 20.08 314.59 20.37 314.2 20.65 313.93 20.88 313.69 21.17 313.55 21.55 313.59 22.02 313.82 22.41 314.11 22.78 314.35 23.06 314.53 23.39 314.62 23.78 314.76 24.16 314.91 24.59 314.99 24.96 314.72 25.24 314.38 24.91 314.19 24.53 314.01 24.2 313.78 23.92 313.49 23.59 313.25 23.29 313.02 23.02 312.74 22.72 312.41 22.49 312.12 22.25 311.7 22.11 311.31 22.07 310.98 21.91 310.61 21.91 310.61 22.15 310.46 22.4 310.23 22.71 309.94 23.05 309.93 23.44 310.23 23.77 310.26 24.14 310.4 24.52 310.32 24.89 310.17 25.23 309.83 25.56 309.51 25.79 309.12 25.85 308.65 25.94 308.27 25.98 307.89 26.02 307.42 26.02 307 25.94 306.61 25.84 306.24 25.74 305.81 25.74 305.39 25.84 305 26.02 304.67 26.17 304.19 26.4 303.86 26.64 303.53 26.82 303.21 27.11 302.78 27.34 302.4 27.57 302.01 27.71 301.64 27.81 301.21 27.9 300.83 27.94 300.3 28 299.79 28.14 299.5 28.37 299.17 28.61 298.93 28.94 299.02 29.37 299.36 29.55 299.73 29.74 300.12 29.94 300.45 30.12 300.82 30.27 301.1 30.55 301.29 30.98 301.43 31.36 301.49 31.73 301.43 32.12 301.39 32.5 301.15 32.77 301.34 33.05 301.6 33.26 302.07 33.32 302.5 33.23 302.91 33 303.21 32.71 303.48 32.48 303.78 32.2 304.11 31.97 304.43 31.78 304.82 31.55 305.57 31.36 305.95 31.32 306.37 31.27 307.13 31.28 307.56 31.38 307.97 31.53 308.4 31.54 308.83 31.62 309.1 31.91 309.39 32.15 309.67 32.43 309.95 32.67 310.28 32.96 310.46 33.3 310.75 33.53 311.12 33.67 311.55 33.58 311.92 33.49 312.35 33.35 312.73 33.22 313.06 33.03 313.44 32.75 313.73 32.46 313.97 32.19 314.25 31.9 314.64 31.67 315.05 31.44 315.34 31.68 315.53 32.01 315.71 32.4 315.94 32.77 316.33 32.96 316.5 33.29 316.74 33.62 317.06 33.82 317.39 34.15 317.53 34.53 317.58 34.9 317.62 35.29 317.71 35.66 318 35.96 318.18 36.28 318.47 36.57 318.84 36.61 319.21 36.81 319.54 37.01 319.91 37.09 320.34 37.19 321.2 37.2 321.53 37.35 321.85 37.54 322.23 37.59 322.65 37.64 323.07 37.74 323.45 37.78 323.83 37.84 324.21 37.85 324.58 37.93 325.11 37.99 325.54 37.9 325.91 37.57 326.25 37.39 326.58 37.15 326.91 36.97 326.96 36.58 327.19 36.27 327.39 35.88 327.81 35.65 328.29 35.52 328.71 35.42 329.1 35.48 329.47 34.92 329.75 34.53 330.05 34.3 330.32 34.07 330.62 33.79 330.95 33.56 331.19 33.27 331.52 32.9 331.8 32.67 332.09 32.38 332.28 32.05 332.51 31.77 332.61 31.4 332.67 31.02 332.62 30.64 332.62 30.27 332.72 29.88 332.86 29.47 333.02 29.14 333.2 28.75 333.68 28.2 333.91 27.87 334.07 27.54 334.25 27.21 334.35 26.74 334.49 26.36 334.65 25.94 334.83 25.61 334.79 25.23 334.74 24.85 334.7 24.58 334.71 24.23 334.8 24.03" /></g><g id="HATCH-7" data-name="HATCH"><polygon class="provinciaDibujo" style={style}  points="334.49 26.36 334.65 25.94 334.83 25.61 334.79 25.23 334.74 24.85 334.67 24.32 334.8 24.03 334.05 23.75 333.72 23.55 333.33 23.45 333.05 23.22 332.68 22.98 332.39 22.7 332.01 22.51 331.68 22.31 331.25 22.17 330.5 21.89 330.11 21.84 329.7 21.7 329.31 21.6 328.94 21.5 328.46 21.45 328.04 21.32 327.61 21.26 327.23 21.08 326.86 20.84 326.43 20.64 326.1 20.45 325.76 20.27 325.49 20.02 325.15 19.84 324.82 20.01 324.82 20.4 324.96 20.88 324.95 21.25 325.01 21.64 324.62 21.58 324.44 21.21 324.3 20.83 324.11 20.44 323.88 20.11 323.68 19.73 323.49 19.3 323.41 18.93 323.26 18.55 322.98 18.22 322.69 17.98 322.22 17.83 321.84 17.98 321.47 18.12 321.13 18.31 320.8 18.49 320.43 18.54 320.04 18.58 319.66 18.68 319.29 18.72 318.63 18.88 318.05 18.81 317.68 18.71 317.29 18.62 316.92 18.67 316.54 18.81 316.07 19 315.68 19.14 315.4 19.43 315.16 19.71 314.97 20.08 314.59 20.37 314.2 20.65 313.93 20.88 313.69 21.17 313.55 21.55 313.59 22.02 313.82 22.41 314.11 22.78 314.35 23.06 314.53 23.39 314.62 23.78 314.76 24.16 314.91 24.59 314.99 24.96 314.72 25.24 314.38 24.91 314.19 24.53 314.01 24.2 313.78 23.92 313.49 23.59 313.25 23.29 313.02 23.02 312.74 22.72 312.41 22.49 312.12 22.25 311.7 22.11 311.31 22.07 310.98 21.91 310.61 21.91 310.61 22.15 310.46 22.4 310.23 22.71 309.94 23.05 309.93 23.44 310.23 23.77 310.26 24.14 310.4 24.52 310.27 25.13 309.83 25.56 309.51 25.79 309.12 25.85 308.65 25.94 308.27 25.98 307.89 26.02 307.42 26.02 307 25.94 306.61 25.84 306.24 25.74 305.81 25.74 305.39 25.84 305 26.02 304.67 26.17 304.19 26.4 303.86 26.64 303.53 26.82 303.21 27.11 302.78 27.34 302.4 27.57 302.01 27.71 301.64 27.81 301.21 27.9 300.83 27.94 300.3 28 299.79 28.14 299.5 28.37 299.17 28.61 298.93 28.94 299.02 29.37 299.36 29.55 299.73 29.74 300.12 29.94 300.45 30.12 300.82 30.27 301.1 30.55 301.42 31.26 301.49 31.73 301.43 32.12 301.39 32.5 301.15 32.77 301.34 33.05 301.6 33.26 302.07 33.32 302.5 33.23 302.91 33 303.21 32.71 303.48 32.48 303.78 32.2 304.11 31.97 304.43 31.78 304.82 31.55 305.57 31.36 305.95 31.32 306.37 31.27 307.13 31.28 307.56 31.38 307.97 31.53 308.4 31.54 308.83 31.62 309.1 31.91 309.39 32.15 309.67 32.43 309.95 32.67 310.28 32.96 310.46 33.3 310.75 33.53 311.12 33.67 311.55 33.58 311.92 33.49 312.35 33.35 312.73 33.22 313.06 33.03 313.44 32.75 313.73 32.46 313.97 32.19 314.25 31.9 314.64 31.67 315.05 31.44 315.34 31.68 315.53 32.01 315.71 32.4 315.94 32.77 316.33 32.96 316.5 33.29 316.74 33.62 317.06 33.82 317.39 34.15 317.53 34.53 317.58 34.9 317.62 35.29 317.71 35.66 318 35.96 318.18 36.28 318.47 36.57 318.84 36.61 319.21 36.81 319.54 37.01 319.91 37.09 320.34 37.19 321.2 37.2 321.53 37.35 321.85 37.54 322.23 37.59 322.65 37.64 323.07 37.74 323.45 37.78 323.83 37.84 324.21 37.85 324.58 37.93 325.11 37.99 325.54 37.9 325.91 37.57 326.25 37.39 326.58 37.15 326.91 36.97 326.96 36.58 327.19 36.27 327.39 35.88 327.81 35.65 328.29 35.52 328.71 35.42 329.1 35.48 329.47 34.92 329.75 34.53 330.05 34.3 330.32 34.07 330.62 33.79 330.95 33.56 331.19 33.27 331.52 32.9 331.8 32.67 332.09 32.38 332.28 32.05 332.51 31.77 332.61 31.4 332.67 31.02 332.59 30.41 332.72 29.88 332.86 29.47 333.02 29.14 333.2 28.75 333.68 28.2 333.91 27.87 334.07 27.54 334.25 27.21 334.35 26.74 334.49 26.36" /></g></g>
        </svg>
    )
}

export default Bizkaia