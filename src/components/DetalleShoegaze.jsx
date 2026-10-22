function DetalleShoegaze() {
    return (
        <div id="detalle-shoegaze">
            <section className="container py-5">
                <a className="back-link" href="#presets">← Volver al catálogo</a>

                <div className="preset-category mt-4">SHOEGAZE</div>

                <h2 className="display-4 fw-bold mt-2">Shoegaze Fuzz</h2>

                <p className="description mt-3">
                    Muro de sonido saturado con una cola de delay larga,
                    pensado para capas de guitarra que se funden con
                    el resto de la mezcla.
                </p>
            </section>

            <section className="container border-top py-5">
                <h3 className="section-title">Cadena de efectos</h3>

                <div className="effect-chain">
                    <span className="pedal-box">GUITARRA</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">OVERDRIVE</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box active">FUZZ</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">DELAY</span>
                    <span className="arrow">→</span>
                    <span className="pedal-box">AMPLIFICADOR</span>
                </div>
            </section>

            <section className="container border-top py-5">
                <h3 className="section-title mb-4">Parámetros</h3>

                <div className="table-responsive">
                    <table className="table sound-table">
                        <thead>
                            <tr>
                                <th>Bloque</th>
                                <th>Parámetro</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th>Overdrive</th><td>Drive</td><td>35%</td></tr>
                            <tr><th>Fuzz</th><td>Sustain</td><td>70%</td></tr>
                            <tr><th>Fuzz</th><td>Tono</td><td>55%</td></tr>
                            <tr><th>Delay</th><td>Tiempo</td><td>480 ms</td></tr>
                            <tr><th>Delay</th><td>Feedback</td><td>45%</td></tr>
                            <tr><th>Amplificador</th><td>Ganancia</td><td>60%</td></tr>
                            <tr><th>Amplificador</th><td>Ecualización</td><td>60 / 40 / 55</td></tr>
                            <tr><th>Cabina</th><td>Tipo de cabina</td><td>4x12 Vintage</td></tr>
                        </tbody>
                    </table>
                </div>

                <p className="small text-muted">
                    Valores de referencia pensados para el software
                    SoundShed. Ajusta según tu guitarra y el resto
                    de tu equipo.
                </p>
            </section>
        </div>
    );
}

export default DetalleShoegaze;
