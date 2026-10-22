function Contacto() {
    return (
        <div id="contacto">
            <section className="container text-center py-5">
                <h2 className="display-5 fw-bold">Pedir un Tono</h2>

                <p className="description mx-auto mt-3">
                    ¿No encontraste el preset de tu canción favorita?
                    Cuéntanos qué tono buscas y te ayudamos a armar
                    la cadena.
                </p>
            </section>

            <section className="container border-top py-5">
                <div className="row g-5">

                    <div className="col-12 col-md-6">
                        <h3 className="section-title h5 mb-4">Formulario de solicitud</h3>

                        <form>
                            <div className="mb-4">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control sound-input"
                                    id="nombre"
                                    name="nombre"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="correo" className="form-label">Correo</label>
                                <input
                                    type="email"
                                    className="form-control sound-input"
                                    id="correo"
                                    name="correo"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="cancion" className="form-label">
                                    Canción o tono de referencia
                                </label>
                                <input
                                    type="text"
                                    className="form-control sound-input"
                                    id="cancion"
                                    name="cancion"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea
                                    className="form-control sound-input"
                                    id="mensaje"
                                    name="mensaje"
                                    rows="5"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-soundshed button">
                                Enviar solicitud
                            </button>

                            <p className="small text-muted mt-3">
                                Por ahora el formulario es visual:
                                el envío real se conectará con Formspree
                                más adelante en el proyecto.
                            </p>
                        </form>
                    </div>

                    <div className="col-12 col-md-6">
                        <h3 className="section-title h5 mb-4">Comunidad</h3>

                        <div className="community-box">
                            <img
                                src="/img/contacto-community.jpg"
                                className="contact-image"
                                alt="Comunidad de guitarristas tocando juntos"
                            />

                            <p>Discord de la comunidad SoundShed Explorer</p>

                            <p>
                                Instagram: <span className="accent-text">@soundshed.explorer</span>
                            </p>
                        </div>

                        <h3 className="section-title h5 mt-5 mb-4">Preguntas frecuentes</h3>

                        <div className="faq">
                            <p>
                                <strong>¿Los presets son gratis?</strong>
                                <br />
                                <span className="description">
                                    Sí, todos los presets del catálogo son de libre uso.
                                </span>
                            </p>

                            <p>
                                <strong>¿Necesito el software SoundShed?</strong>
                                <br />
                                <span className="description">
                                    Sí, los parámetros están pensados para esa interfaz.
                                </span>
                            </p>

                            <p>
                                <strong>¿Cuánto tardan en responder un pedido de tono?</strong>
                                <br />
                                <span className="description">
                                    Normalmente entre 2 y 3 días.
                                </span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Contacto;
