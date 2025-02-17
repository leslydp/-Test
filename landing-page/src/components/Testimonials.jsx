

function Testimonials(){
    const testimonialsData = [
        {
            name: 'Juan Pérez',
            text: 'Este servicio es fantástico. Lo recomiendo al 100%.'
        },
        {
            name: 'María Gómez',
            text: 'Me ha ahorrado muchísimo tiempo y dinero. ¡Excelente!'
        },
    ];

    return(
        <section id="testimonials" className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <p className="testimonial-name"> {testimonial.name} </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;