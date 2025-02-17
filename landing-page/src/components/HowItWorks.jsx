

function HowItWorks(){
    const steps = [
        {title: 'Paso 1', description: 'descrpcion paso 1'},
        {title: 'Paso 2', description: 'descrpcion paso 2'},
        {title: 'Paso 3', description: 'descrpcion paso 3'},
    ];

    return(
        <section id="howitwork" className="howitworks-section">
            <h2>How is works</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <div className="circle-icon">🔵</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;