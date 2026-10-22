function DetalleJrock() {
    return (
        <div id="detalle-jrock">
            <section className="container py-5">
                <p>
                    <a className="back-link" href="#presets">← Volver al catálogo de presets</a>
                </p>

                <span className="preset-category">J-ROCK</span>

                <h2 className="display-4 fw-bold mt-3">J-Rock Crunch</h2>

                <p className="description mt-3">
                    Distorsión de amplificador ajustada y compresión pareja,
                    pensada para riffs marcados y rítmicos.
                </p>
            </section>

            <section className="container border-top py-5">
                <h3 className="section-title">Cadena de efectos</h3>

                <div className="effect-chain">
                    <span className="pedal-box">GUITARRA</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box active">COMPRESSOR</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">AMPLIFICADOR</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">CABINA</span>
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
                            <tr><th scope="row">Compressor</th><td>Sustain</td><td>40%</td></tr>
                            <tr><th scope="row">Compressor</th><td>Nivel de salida</td><td>50%</td></tr>
                            <tr><th scope="row">Amplificador</th><td>Ganancia</td><td>75%</td></tr>
                            <tr>
                                <th scope="row">Amplificador</th>
                                <td>Ecualización (graves / medios / agudos)</td>
                                <td>50 / 65 / 60</td>
                            </tr>
                            <tr><th scope="row">Amplificador</th><td>Presencia</td><td>55%</td></tr>
                            <tr><th scope="row">Cabina</th><td>Tipo de cabina</td><td>4x12 Modern</td></tr>
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

export default DetalleJrock;
