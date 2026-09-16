function Inicio() {
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

                <a href="#presets" className="btn btn-soundshed mt-3 button">
                    Ver Catálogo
                </a>

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

                                <a href="#detalle-shoegaze" className="btn btn-outline-light button">
                                    Ver Detalle
                                </a>
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

                                <a href="#detalle-jrock" className="btn btn-outline-light button">
                                    Ver Detalle
                                </a>
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

                                <a href="#detalle-clean" className="btn btn-outline-light button">
                                    Ver Detalle
                                </a>
                            </div>
                        </article>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Inicio;
