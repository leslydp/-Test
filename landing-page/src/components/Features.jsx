

function Features(){
    const featuresList = [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
    ];

    return(
        <section id="features" className="features-section">
            <h2>Features</h2>
            <ul className="features-list">
                {featuresList.map((feature, index) =>(
                    <li key={index}>
                        <span className="feature-icon">✔️</span> {feature}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Features;