import { useState } from "react";

import Header from './components/Header';
import Inicio from './components/secciones/Inicio';
import Presets from './components/secciones/Presets';
import DetalleShoegaze from './components/secciones/DetalleShoegaze';
import DetalleJrock from './components/secciones/DetalleJrock';
import DetalleClean from './components/secciones/DetalleClean';
import Contacto from './components/secciones/Contacto';
import Footer from './components/Footer';

function App() {

    const [modalAbierto, setModalAbierto] = useState(false);

    const [seccion, setSeccion] = useState("inicio");

    return (
        <>
            <Header seccion={seccion} setSeccion={setSeccion} />

            <main>
                {seccion === "inicio" && (
                    <Inicio
                        abrirModal={() => setModalAbierto(true)}
                        setSeccion={setSeccion}
                    />
                )}
                {seccion === "presets" && <Presets setSeccion={setSeccion} />}
                {seccion === "detalle-shoegaze" && <DetalleShoegaze setSeccion={setSeccion} />}
                {seccion === "detalle-jrock" && <DetalleJrock setSeccion={setSeccion} />}
                {seccion === "detalle-clean" && <DetalleClean setSeccion={setSeccion} />}
                {seccion === "contacto" && <Contacto />}
            </main>

            <Footer />

            {modalAbierto && (
                <div className="modal-fondo" onClick={() => setModalAbierto(false)}>
                    <div className="modal-caja" onClick={(e) => e.stopPropagation()}>
                        <h2 className="h4">¿Cómo leer una cadena de efectos?</h2>

                        <p>
                            Una cadena es el recorrido que hace la señal de tu guitarra:
                            sale de la guitarra, pasa por los pedales en orden y termina
                            en el amplificador. El orden importa: si cambias un pedal de
                            lugar, cambia el sonido.
                        </p>

                        <p className="modal-pista">
                            Entra a «Ver Detalle» en cualquier preset para ver el orden
                            exacto y el valor de cada bloque.
                        </p>

                        <button
                            className="btn btn-soundshed button"
                            onClick={() => setModalAbierto(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
