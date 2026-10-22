function PresetCard({ img, alt, category, title, tags, description, href }) {
    return (
        <div className="col-12 col-md-4">
            <article className="card h-100">
                <img src={img} className="card-img-top" alt={alt} />

                <div className="card-body text-center">
                    <span className="preset-category">{category}</span>

                    <h3 className="h5 mt-3">{title}</h3>

                    <div className="d-flex flex-column gap-2 align-items-center my-4">
                        {tags.map((tag) => (
                            <span
                                key={tag.text}
                                className={tag.active ? 'pedal-box active' : 'pedal-box'}
                            >
                                {tag.text}
                            </span>
                        ))}
                    </div>

                    <p className="description small mx-auto">{description}</p>

                    <a href={href} className="btn btn-outline-light button mt-2">
                        Ver Detalle
                    </a>
                </div>
            </article>
        </div>
    );
}

export default PresetCard;
