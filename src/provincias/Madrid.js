import React, { useState } from 'react';

function Madrid({name, seleccionarProvincia}) {
    let [seleccionado, setSeleccionado]= useState(false);

    let style = {
        fill: "white"
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

            <g id="MADRID"><g id="LWPOLYLINE-35" data-name="LWPOLYLINE"><polyline style={style}  class="provinciaDibujo" points="309.22 171.63 308.99 172.11 308.61 172.19 308.28 172.44 307.9 172.44 307.52 172.52 307.18 172.68 306.81 172.76 306.48 172.91 306.14 173.09 305.77 173.19 305.49 172.95 305.1 172.85 304.77 172.57 304.39 172.44 303.96 172.28 303.59 172.28 303.22 172.38 303.02 172.71 302.79 173.04 302.51 173.28 302.12 173.38 301.74 173.32 301.27 173.18 300.84 173.08 300.33 173.08 299.94 173.18 299.61 173.41 299.27 173.61 298.9 173.7 298.47 173.8 298.1 173.8 297.72 173.88 297.39 174.07 297.01 174.27 296.68 174.45 296.35 174.74 296.01 175.07 295.68 175.25 295.35 175.44 294.97 175.68 294.73 175.97 294.5 176.29 294.26 176.62 294.02 176.91 293.64 177.09 293.3 177.29 292.93 177.48 292.65 177.72 292.32 177.9 291.98 178.05 291.61 178.09 291.22 178.09 290.79 178.28 290.47 178.56 290.23 178.85 289.94 179.18 289.67 179.46 289.33 179.75 289.04 180.03 288.71 180.22 288.29 180.32 287.9 180.45 287.49 180.4 287 180.35 286.63 180.4 286.25 180.31 285.78 180.21 285.45 179.98 285.31 179.59 285.31 179.22 285.49 178.84 285.78 178.6 286.12 178.45 286.53 178.37 286.92 178.27 287.3 178.08 287.57 177.84 287.91 177.47 288.24 177.18 288.43 176.76 288.71 176.47 289.05 176.2 289.67 175.57 289.99 175.3 290.28 175.01 290.66 174.77 291.05 174.63 291.37 174.4 291.7 174.11 291.99 173.83 292.23 173.54 292.8 172.97 293.27 172.42 293.51 172.13 293.74 171.85 293.94 171.52 294.03 171.13 294.21 170.79 294.27 170.42 294.27 169.99 294.08 169.67 293.7 169.75 293.27 169.71 292.8 169.67 292.43 169.67 292.04 169.57 291.62 169.57 291.19 169.61 290.81 169.57 290.39 169.47 290.06 169.24 289.68 169.09 289.39 168.86 288.96 168.8 288.55 168.86 288.25 168.61 287.92 168.43 287.45 168.29 287.07 168.29 286.7 168.19 286.27 168.19 285.88 168.13 285.61 167.9 285.23 167.71 284.9 167.56 284.47 167.48 284.1 167.28 283.71 167.09 283.29 166.95 282.96 166.75 282.63 166.57 282.2 166.34 281.82 166.1 281.45 166.04 281.29 166 280.89 165.42 280.78 164.96 280.45 164.76 280.08 164.63 279.65 164.57 279.41 164.24 279.08 164.06 278.88 163.72 278.51 163.58 278.14 163.58 277.75 163.49 276.94 163.48 276.57 163.43 276.19 163.38 275.86 163.11 275.63 162.77 275.29 162.54 274.86 162.44 274.43 162.54 274.02 162.53 273.78 162.81 273.63 163.19 273.25 163.34 272.82 163.34 272.45 163.24 272.07 163.24 271.78 163.47 271.6 163.81 271.37 164.14 271.13 164.46 270.84 164.71 270.5 164.89 270.13 164.98 269.7 164.98 269.56 164.55 269.46 164.04 269.33 163.65 269.19 163.28 269.04 162.9 268.76 162.61 268.57 162.28 268.19 162.14 267.82 162.04 267.48 162.19 267.1 162.37 266.78 162.61 266.39 162.8 266.29 163.17 266.25 163.6 266.01 163.9 265.34 164.37 265.07 164.6 264.64 164.64 264.21 164.64 263.83 164.83 263.54 165.07 263.26 165.31 262.97 165.54 262.69 165.82 262.36 166.01 261.98 166.11 261.69 165.87 261.28 166.01 260.94 166.2 260.51 166.3 260.22 166.06 260.14 165.63 260.08 165.26 259.85 165.2 260.04 164.93 260.18 164.87 260.32 164.5 260.52 164.12 260.71 163.73 260.95 163.46 261.13 163.08 261.37 162.79 261.6 162.42 261.94 162.03 262.32 161.71 262.66 161.42 262.98 161.14 263.27 160.85 263.55 160.62 263.88 160.38 264.17 160.15 264.45 159.81 264.64 159.48 264.78 159.11 265.02 158.72 265.26 158.4 265.49 158.01 265.69 157.68 265.97 157.31 266.26 157.07 266.59 156.88 266.83 156.54 267.06 156.27 267.4 155.93 267.73 155.66 268.2 155.46 268.58 155.33 268.97 155.17 269.15 154.8 269.11 154.37 269.25 153.95 269.38 153.52 269.58 153.15 269.82 152.76 269.91 152.39 269.96 152.01 270.01 151.63 270.01 151.25 270.19 150.92 270.43 150.5 270.43 150.11 270.53 149.7 270.72 149.31 270.86 148.89 271.1 148.5 271.24 148.13 271.39 147.76 271.48 147.37 271.63 147.04 271.96 146.8 272.34 146.76 272.71 146.9 273.14 146.96 273.52 147 273.9 147.14 274.28 146.96 274.46 146.62 274.56 146.24 274.56 145.49 274.42 145.01 274.28 144.63 274.42 144.25 274.76 144.02 275.09 143.82 275.37 143.49 275.6 143.12 275.99 142.45 276.17 142.03 276.65 141.37 276.9 141.08 277.18 140.8 277.37 140.47 277.55 140.14 277.84 139.86 278.12 139.61 278.45 139.38 278.83 139.29 279.22 139.24 279.59 139.24 280.02 139.14 280.49 139.1 280.97 138.96 281.3 138.77 281.54 138.4 281.63 138.01 281.83 137.63 282.01 137.26 282.2 136.93 282.25 136.55 282.3 136.12 282.44 135.69 282.58 135.32 282.64 134.94 282.64 134.56 282.78 134.18 282.96 133.71 283.15 133.34 283.39 132.95 283.63 132.62 283.92 132.28 284.25 132 284.53 131.71 284.82 131.44 285.2 131.06 285.57 130.87 285.86 130.59 286.33 130.34 286.71 130.16 287.08 130.03 287.47 129.83 287.81 129.64 288.18 129.54 288.61 129.31 288.89 129.07 289.22 128.66 289.5 128.37 289.75 127.99 289.99 127.66 290.17 127.33 290.5 127.05 290.93 126.9 291.31 126.8 291.7 126.57 292.07 126.33 292.31 126.05 292.45 125.68 292.74 125.43 293.06 125.19 293.25 124.88 293.45 124.54 293.63 124.21 294.02 123.55 294.25 123.25 294.53 122.98 294.82 122.7 295.16 122.55 295.53 122.51 295.91 122.37 296.14 122.08 296.43 121.84 296.81 122.18 296.77 122.55 296.76 122.94 296.94 123.26 297.24 123.51 297.51 123.75 297.75 124.02 298.08 124.26 298.41 124.45 298.84 124.59 299.12 124.83 299.27 125.16 299.41 125.59 299.51 125.97 299.69 126.34 299.84 126.68 300.07 126.97 300.25 127.3 300.49 127.64 300.54 128.01 300.58 128.38 300.68 128.76 300.68 129.56 300.54 129.99 300.44 130.47 300.4 130.85 300.34 131.23 300.2 131.6 300.15 131.99 300.11 132.37 299.97 132.74 299.87 133.11 299.77 133.5 299.73 133.88 299.73 134.25 299.63 134.74 299.49 135.15 299.34 135.54 299.16 135.96 299.02 136.43 298.96 136.82 298.92 137.19 298.92 137.62 298.96 138 299.06 138.37 299.15 138.76 299.29 139.13 299.48 139.47 299.66 139.84 300 140.08 300.13 140.47 300.13 140.84 300.05 141.22 299.66 141.88 299.71 142.31 299.81 142.69 300.09 143.02 300.32 143.3 300.62 143.63 300.99 143.82 301.22 144.16 301.6 144.34 301.79 144.67 302.07 144.96 302.46 145.2 302.64 145.53 302.93 145.81 303.26 146.05 303.5 146.34 303.63 146.72 303.87 147.01 304.1 147.33 304.49 147.99 304.63 148.38 304.81 148.76 305.05 149.09 305.29 149.37 305.61 149.7 305.9 149.94 306.1 150.27 306.47 150.41 306.85 150.37 307.08 150.65 307.41 150.94 307.65 151.27 307.65 151.65 307.61 152.08 307.47 152.51 307.47 152.88 307.55 153.31 307.88 153.49 308.31 153.63 308.69 153.59 309.07 153.73 309.35 154.16 309.54 154.49 310.01 155.16 310.15 155.58 310.35 155.91 310.48 156.34 310.52 156.72 310.52 157.1 310.44 157.48 310.2 157.81 310.11 158.18 309.91 158.52 309.87 158.89 309.81 159.32 309.67 159.7 309.54 160.17 309.39 160.56 309.2 160.97 309 161.54 308.82 161.93 308.63 162.26 308.57 162.63 308.96 162.83 309.34 162.78 309.71 162.78 310.14 162.64 310.52 162.44 310.9 162.35 311.28 162.44 311.61 162.68 311.75 163.07 311.89 163.44 312.04 163.82 312.18 164.25 312.27 164.63 312.31 165.01 312.37 165.43 312.45 165.86 312.51 166.29 312.55 166.76 312.64 167.14 312.74 167.61 312.84 168 312.88 168.37 313.07 168.75 313.25 169.13 313.25 169.51 313.11 169.88 312.83 170.22 312.44 170.27 312.11 170.45 311.93 170.78 311.64 171.02 310.89 171.21 310.46 171.35 310.03 171.39 309.65 171.63 309.28 171.58" /></g><g id="HATCH-35" data-name="HATCH"><polygon style={style}  class="provinciaDibujo" points="300.32 143.3 300.09 143.02 299.81 142.69 299.71 142.31 299.66 141.88 300.05 141.22 300.13 140.84 300.13 140.47 300 140.08 299.66 139.84 299.48 139.47 299.29 139.13 299.15 138.76 299.06 138.37 298.96 138 298.92 137.62 298.92 137.19 298.96 136.82 299.02 136.43 299.16 135.96 299.34 135.54 299.49 135.15 299.63 134.74 299.73 134.25 299.73 133.88 299.77 133.5 299.87 133.11 299.97 132.74 300.11 132.37 300.15 131.99 300.2 131.6 300.34 131.23 300.4 130.85 300.44 130.47 300.54 129.99 300.68 129.56 300.68 128.76 300.58 128.38 300.54 128.01 300.49 127.64 300.25 127.3 300.07 126.97 299.84 126.68 299.69 126.34 299.51 125.97 299.41 125.59 299.27 125.16 299.12 124.83 298.84 124.59 298.41 124.45 298.08 124.26 297.75 124.02 297.51 123.75 297.24 123.51 296.94 123.26 296.76 122.94 296.77 122.55 296.81 122.18 296.43 121.84 296.14 122.08 295.91 122.37 295.53 122.51 295.16 122.55 294.82 122.7 294.53 122.98 294.25 123.25 294.02 123.55 293.63 124.21 293.45 124.54 293.25 124.88 293.06 125.19 292.74 125.43 292.45 125.68 292.31 126.05 292.07 126.33 291.7 126.57 291.31 126.8 290.93 126.9 290.5 127.05 290.17 127.33 289.99 127.66 289.75 127.99 289.5 128.37 289.22 128.66 288.89 129.07 288.61 129.31 288.18 129.54 287.81 129.64 287.47 129.83 287.08 130.03 286.71 130.16 286.33 130.34 285.86 130.59 285.57 130.87 285.2 131.06 284.82 131.44 284.53 131.71 284.25 132 283.92 132.28 283.63 132.62 283.39 132.95 283.15 133.34 282.96 133.71 282.78 134.18 282.64 134.56 282.64 134.94 282.58 135.32 282.44 135.69 282.3 136.12 282.25 136.55 282.2 136.93 282.01 137.26 281.83 137.63 281.63 138.01 281.54 138.4 281.3 138.77 280.97 138.96 280.49 139.1 280.02 139.14 279.59 139.24 279.22 139.24 278.83 139.29 278.45 139.38 278.12 139.61 277.84 139.86 277.55 140.14 277.37 140.47 277.18 140.8 276.9 141.08 276.65 141.37 276.17 142.03 275.99 142.45 275.6 143.12 275.37 143.49 275.09 143.82 274.76 144.02 274.42 144.25 274.28 144.63 274.42 145.01 274.56 145.49 274.56 146.24 274.39 146.9 273.9 147.14 273.52 147 273.14 146.96 272.71 146.9 272.34 146.76 271.96 146.8 271.63 147.04 271.48 147.37 271.39 147.76 271.24 148.13 271.1 148.5 270.86 148.89 270.72 149.31 270.53 149.7 270.43 150.11 270.43 150.5 270.19 150.92 270.01 151.25 270.01 151.63 269.96 152.01 269.88 152.65 269.58 153.15 269.38 153.52 269.25 153.95 269.11 154.37 269.15 154.8 268.97 155.17 268.58 155.33 268.2 155.46 267.73 155.66 267.4 155.93 267.06 156.27 266.83 156.54 266.59 156.88 266.26 157.07 265.97 157.31 265.69 157.68 265.49 158.01 265.26 158.4 265.02 158.72 264.78 159.11 264.64 159.48 264.45 159.81 264.17 160.15 263.88 160.38 263.55 160.62 263.27 160.85 262.98 161.14 262.66 161.42 262.32 161.71 261.94 162.03 261.6 162.42 261.37 162.79 261.13 163.08 260.95 163.46 260.71 163.73 260.52 164.12 260.32 164.5 260.18 164.87 260.04 164.93 259.85 165.2 260.08 165.26 260.14 165.63 260.22 166.06 260.51 166.3 260.94 166.2 261.28 166.01 261.69 165.87 261.98 166.11 262.36 166.01 262.69 165.82 262.97 165.54 263.26 165.31 263.54 165.07 263.83 164.83 264.21 164.64 264.64 164.64 265.07 164.6 265.34 164.37 266.01 163.9 266.25 163.6 266.29 163.17 266.39 162.8 266.78 162.61 267.1 162.37 267.48 162.19 267.82 162.04 268.19 162.14 268.57 162.28 268.76 162.61 269.04 162.9 269.19 163.28 269.33 163.65 269.46 164.04 269.56 164.55 269.7 164.98 270.13 164.98 270.5 164.89 270.84 164.71 271.13 164.46 271.37 164.14 271.6 163.81 271.78 163.47 272.07 163.24 272.45 163.24 272.82 163.34 273.25 163.34 273.63 163.19 273.78 162.81 274.02 162.53 274.43 162.54 274.86 162.44 275.29 162.54 275.63 162.77 275.86 163.11 276.19 163.38 276.57 163.43 276.94 163.48 277.75 163.49 278.14 163.58 278.51 163.58 278.88 163.72 279.08 164.06 279.41 164.24 279.65 164.57 280.08 164.63 280.45 164.76 280.78 164.96 280.89 165.42 281.29 166 281.45 166.04 281.82 166.1 282.2 166.34 282.63 166.57 282.96 166.75 283.29 166.95 283.71 167.09 284.1 167.28 284.47 167.48 284.9 167.56 285.23 167.71 285.61 167.9 285.88 168.13 286.27 168.19 286.7 168.19 287.07 168.29 287.45 168.29 287.92 168.43 288.25 168.61 288.55 168.86 288.96 168.8 289.39 168.86 289.68 169.09 290.06 169.24 290.39 169.47 290.81 169.57 291.19 169.61 291.62 169.57 292.04 169.57 292.43 169.67 292.8 169.67 293.27 169.71 293.7 169.75 294.08 169.67 294.27 169.99 294.27 170.69 294.03 171.13 293.94 171.52 293.74 171.85 293.51 172.13 293.27 172.42 292.8 172.97 292.23 173.54 291.99 173.83 291.7 174.11 291.37 174.4 291.05 174.63 290.66 174.77 290.28 175.01 289.99 175.3 289.67 175.57 289.05 176.2 288.71 176.47 288.43 176.76 288.24 177.18 287.91 177.47 287.42 178.02 286.92 178.27 286.53 178.37 286.12 178.45 285.78 178.6 285.49 178.84 285.31 179.22 285.31 179.59 285.45 179.98 285.78 180.21 286.25 180.31 286.63 180.4 287 180.35 287.49 180.4 287.9 180.45 288.29 180.32 288.71 180.22 289.04 180.03 289.33 179.75 289.67 179.46 289.94 179.18 290.23 178.85 290.47 178.56 290.79 178.28 291.22 178.09 291.61 178.09 291.98 178.05 292.32 177.9 292.65 177.72 292.93 177.48 293.3 177.29 293.64 177.09 294.02 176.91 294.26 176.62 294.65 176.07 294.97 175.68 295.35 175.44 295.68 175.25 296.01 175.07 296.35 174.74 296.68 174.45 297.01 174.27 297.39 174.07 297.72 173.88 298.1 173.8 298.47 173.8 298.9 173.7 299.27 173.61 299.61 173.41 299.94 173.18 300.33 173.08 300.84 173.08 301.27 173.18 301.74 173.32 302.12 173.38 302.51 173.28 302.79 173.04 303.02 172.71 303.22 172.38 303.59 172.28 303.96 172.28 304.39 172.44 304.77 172.57 305.1 172.85 305.49 172.95 305.77 173.19 306.14 173.09 306.72 172.78 307.18 172.68 307.52 172.52 307.9 172.44 308.28 172.44 308.61 172.19 308.99 172.11 309.25 171.58 309.65 171.63 310.03 171.39 310.46 171.35 310.89 171.21 311.64 171.02 311.93 170.78 312.11 170.45 312.44 170.27 312.83 170.22 313.11 169.88 313.25 169.51 313.25 169.13 313.07 168.75 312.88 168.37 312.84 168 312.74 167.61 312.64 167.14 312.55 166.76 312.51 166.29 312.45 165.86 312.37 165.43 312.31 165.01 312.27 164.63 312.18 164.25 312.04 163.82 311.89 163.44 311.75 163.07 311.61 162.68 311.28 162.44 310.9 162.35 310.52 162.44 310.14 162.64 309.71 162.78 309.34 162.78 308.96 162.83 308.57 162.63 308.63 162.26 308.82 161.93 309 161.54 309.2 160.97 309.39 160.56 309.54 160.17 309.67 159.7 309.81 159.32 309.87 158.89 309.91 158.52 310.11 158.18 310.2 157.81 310.44 157.48 310.52 157.1 310.52 156.72 310.48 156.34 310.35 155.91 310.15 155.58 310.01 155.16 309.54 154.49 309.35 154.16 309.07 153.73 308.69 153.59 308.31 153.63 307.88 153.49 307.55 153.31 307.42 152.65 307.61 152.08 307.65 151.65 307.65 151.27 307.41 150.94 307.08 150.65 306.85 150.37 306.47 150.41 306.1 150.27 305.9 149.94 305.61 149.7 305.09 149.15 304.81 148.76 304.63 148.38 304.49 147.99 304.1 147.33 303.87 147.01 303.63 146.72 303.5 146.34 303.26 146.05 302.7 145.65 302.46 145.2 302.07 144.96 301.79 144.67 301.6 144.34 301.22 144.16 300.99 143.82 300.62 143.63 300.32 143.3" /></g><g id="LWPOLYLINE-36" data-name="LWPOLYLINE"><line class="provinciaDibujo" x1="0.41" y1="207.43" x2="0.35" y2="207.56" /></g></g>
        </svg>
    )
}

export default Madrid