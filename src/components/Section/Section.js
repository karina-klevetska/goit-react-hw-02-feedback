import './Section.css';

const Section = ({ title, children }) => {
    return (
        <section className="section">
            <h1>
                {title}
            </h1>
            {children}
        </section>
    )
}

export default Section;