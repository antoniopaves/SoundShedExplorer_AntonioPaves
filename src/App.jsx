
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

    const[seccion,setSeccion] = useState("inicio");

    return (
        <div className="app">
            <Header seccion={seccion} setSeccion={setSeccion} />
            <main className="ventana">
                {seccion === "inicio" && (
                    <Inicio abrirModal={() => setModalAbierto(true)} />
                )}
                {seccion === "presets" && <Presets/>}
                <DetalleShoegaze />
                <DetalleJrock />
                <DetalleClean />
                <Contacto />
            </main>
            <Footer />
            {modalAbierto && (
            <div className="modal-fondo" onClick={() => setModalAbierto(false)}>
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <h2>Más información</h2>
                    <p>
                        Este es el contenido del modal. Aquí puedes poner el detalle de
                        un producto, un formulario, una imagen más grande o lo que
                        necesite tu proyecto.
                    </p>
                    <p className="modal-pista">
                        Prueba a cerrarlo con el botón y también haciendo clic en el
                        fondo gris.
                    </p>
                    <button className="boton" onClick={() => setModalAbierto(false)}>
                    Cerrar
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}

export default App;
