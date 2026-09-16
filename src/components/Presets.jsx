import PresetCard from './PresetCard';

const presets = [
    {
        img: '/img/preset-shoegaze.jpg',
        alt: 'Guitarrista tocando entre niebla y luces, estilo shoegaze',
        category: 'SHOEGAZE',
        title: 'SHOEGAZE FUZZ',
        tags: [
            { text: 'OVERDRIVE', active: true },
            { text: 'FUZZ', active: false },
            { text: 'DELAY', active: false },
        ],
        description: 'Muro de sonido saturado con cola de delay larga, ideal para capas.',
        href: '#detalle-shoegaze',
    },
    {
        img: '/img/preset-jrock.jpg',
        alt: 'Guitarristas tocando en escenario oscuro',
        category: 'J-ROCK',
        title: 'J-ROCK CRUNCH',
        tags: [
            { text: 'COMPRESSOR', active: true },
            { text: 'AMP', active: false },
            { text: 'CAB', active: false },
        ],
        description: 'Distorsión de amplificador ajustada y compresión pareja para riffs marcados.',
        href: '#detalle-jrock',
    },
    {
        img: '/img/preset-clean.jpg',
        alt: 'Guitarra acústica en tono suave',
        category: 'INDIE',
        title: 'CLEAN AMBIENT',
        tags: [
            { text: 'CHORUS', active: true },
            { text: 'DELAY', active: false },
        ],
        description: 'Tono limpio con modulación suave, útil para partes ambientales.',
        href: '#detalle-clean',
    },
];

function Presets() {
    return (
        <div id="presets">
            <section className="container text-center py-5">
                <h2 className="display-5 fw-bold">Explorar Presets</h2>

                <p className="description mx-auto mt-3">
                    Cada tarjeta muestra el género al que pertenece el tono
                    y el orden de la cadena de efectos que lo compone:
                    de la guitarra al amplificador.
                </p>
            </section>

            <section className="container border-top py-5">
                <div className="row g-4">
                    {presets.map((preset) => (
                        <PresetCard key={preset.href} {...preset} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Presets;
