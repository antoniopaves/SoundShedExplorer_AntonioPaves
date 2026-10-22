function DetalleClean() {
    return (
        <div id="detalle-clean">
            <section className="container py-5">
                <p>
                    <a className="back-link" href="#presets">← Volver al catálogo de presets</a>
                </p>

                <span className="preset-category">INDIE</span>

                <h2 className="display-4 fw-bold mt-3">Clean Ambient</h2>

                <p className="description mt-3">
                    Tono limpio con modulación suave, útil para partes
                    ambientales y acompañamientos con espacio.
                </p>
            </section>

            <section className="container border-top py-5">
                <h3 className="section-title">Cadena de efectos</h3>

                <div className="effect-chain">
                    <span className="pedal-box">GUITARRA</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box active">CHORUS</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">DELAY</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">AMPLIFICADOR</span>
                </div>
            </section>

            <section className="container border-top py-5">
                <h3 className="section-title mb-4">Parámetros</h3>

                <div className="table-responsive">
                    <table className="table sound-table align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Bloque</th>
                                <th scope="col">Parámetro</th>
                                <th scope="col">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th scope="row">Chorus</th><td>Profundidad</td><td>30%</td></tr>
                            <tr><th scope="row">Chorus</th><td>Velocidad</td><td>25%</td></tr>
                            <tr><th scope="row">Delay</th><td>Tiempo</td><td>320 ms</td></tr>
                            <tr><th scope="row">Delay</th><td>Feedback</td><td>30%</td></tr>
                            <tr><th scope="row">Amplificador</th><td>Ganancia</td><td>20%</td></tr>
                            <tr>
                                <th scope="row">Amplificador</th>
                                <td>Ecualización (graves / medios / agudos)</td>
                                <td>55 / 45 / 60</td>
                            </tr>
                            <tr><th scope="row">Cabina</th><td>Tipo de cabina</td><td>2x12 Clean</td></tr>
                        </tbody>
                    </table>
                </div>

                <p className="small text-muted mt-3">
                    Valores de referencia pensados para el software
                    SoundShed; ajusta según el nivel de tu guitarra
                    y el resto de tu equipo.
                </p>
            </section>
        </div>
    );
}

export default DetalleClean;
