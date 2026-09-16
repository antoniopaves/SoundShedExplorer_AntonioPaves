import Header from './components/Header';
import Inicio from './components/Inicio';
import Presets from './components/Presets';
import DetalleShoegaze from './components/DetalleShoegaze';
import DetalleJrock from './components/DetalleJrock';
import DetalleClean from './components/DetalleClean';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Inicio />
                <Presets />
                <DetalleShoegaze />
                <DetalleJrock />
                <DetalleClean />
                <Contacto />
            </main>
            <Footer />
        </>
    );
}

export default App;
