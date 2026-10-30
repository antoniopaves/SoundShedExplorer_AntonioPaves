// Header recibe dos props desde App:
//   seccion    -> para saber qué botón marcar como activo
//   setSeccion -> para avisarle a App qué sección mostrar
function Header({ seccion, setSeccion }) {

    // "Presets" también queda activo cuando estás en el detalle de un preset.
    const enPresets =
        seccion === "presets" ||
        seccion === "detalle-shoegaze" ||
        seccion === "detalle-jrock" ||
        seccion === "detalle-clean";

    return (
        <header>
            <nav className="navbar navbar-expand-lg border-bottom">
                <div className="container">

                    <button
                        className="navbar-brand btn-soundshed border-0"
                        onClick={() => setSeccion("inicio")}
                    >
                        SOUNDSHED EXPLORER
                    </button>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Abrir navegación"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button
                                    className={seccion === "inicio" ? "nav-link active" : "nav-link"}
                                    onClick={() => setSeccion("inicio")}
                                >
                                    Inicio
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={enPresets ? "nav-link active" : "nav-link"}
                                    onClick={() => setSeccion("presets")}
                                >
                                    Presets
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={seccion === "contacto" ? "nav-link active" : "nav-link"}
                                    onClick={() => setSeccion("contacto")}
                                >
                                    Contacto
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;
