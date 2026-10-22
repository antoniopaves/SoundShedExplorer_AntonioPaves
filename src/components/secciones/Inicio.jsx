function Inicio({ abrirModal, setSeccion }) {
    return (
        <div id="inicio">
            <section className="container text-center py-5">
                <h1>
                    Guía visual de presets y cadenas
                    <br />
                    para guitarra digital
                </h1>

                <p className="mt-3">
                    SoundShed Explorer reúne cadenas de pedales y efectos ya armadas
                    para que cualquier guitarrista, sin importar su nivel, encuentre
                    el tono que busca sin perderse en foros ni tutoriales sueltos.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                    <button
                        className="btn btn-soundshed button"
                        onClick={() => setSeccion("presets")}
                    >
                        Ver Catálogo
                    </button>

                    <button
                        className="btn btn-outline-light button"
                        onClick={abrirModal}
                    >
                        ¿Cómo leer una cadena?
                    </button>
                </div>

                <img
                    src="/img/hero-pedalboard.jpg"
                    alt="Pedalera de efectos para guitarra"
                    className="hero-image"
                />
            </section>

            <section className="container border-top border-bottom py-4">
                <div className="row g-4">

                    <div className="col-12 col-md-4">
                        <article className="card h-100">
                            <img
                                src="/img/preset-shoegaze.jpg"
                                className="card-img-top"
                                alt="Guitarrista tocando entre niebla y luces, estilo shoegaze"
                            />
                            <div className="card-body text-center">
                                <h2 className="h5">SHOEGAZE FUZZ</h2>

                                <div className="d-flex flex-column gap-2 align-items-center my-4">
                                    <span className="pedal-box badge text-bg-dark">OVERDRIVE</span>
                                    <span className="pedal-box badge text-bg-dark">FUZZ → DELAY</span>
                                </div>

                                <button
                                    className="btn btn-outline-light button"
                                    onClick={() => setSeccion("detalle-shoegaze")}
                                >
                                    Ver Detalle
                                </button>
                            </div>
                        </article>
                    </div>

                    <div className="col-12 col-md-4">
                        <article className="card h-100">
                            <img
                                src="/img/preset-jrock.jpg"
                                className="card-img-top"
                                alt="Guitarristas tocando en escenario oscuro"
                            />
                            <div className="card-body text-center">
                                <h2 className="h5">J-ROCK CRUNCH</h2>

                                <div className="d-flex flex-column gap-2 align-items-center my-4">
                                    <span className="pedal-box badge text-bg-dark">COMPRESSOR</span>
                                    <span className="pedal-box badge text-bg-dark">AMP → CAB</span>
                                </div>

                                <button
                                    className="btn btn-outline-light button"
                                    onClick={() => setSeccion("detalle-jrock")}
                                >
                                    Ver Detalle
                                </button>
                            </div>
                        </article>
                    </div>

                    <div className="col-12 col-md-4">
                        <article className="card h-100">
                            <img
                                src="/img/preset-clean.jpg"
                                className="card-img-top"
                                alt="Guitarra acústica en tono suave"
                            />
                            <div className="card-body text-center">
                                <h2 className="h5">CLEAN AMBIENT</h2>

                                <div className="d-flex flex-column gap-2 align-items-center my-4">
                                    <span className="pedal-box badge text-bg-dark">CHORUS</span>
                                    <span className="pedal-box badge text-bg-dark">DELAY</span>
                                </div>

                                <button
                                    className="btn btn-outline-light button"
                                    onClick={() => setSeccion("detalle-clean")}
                                >
                                    Ver Detalle
                                </button>
                            </div>
                        </article>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Inicio;
