import './Statistics.css'

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <ul className="list">
                <li className="list__item">Good: {good}</li>
                <li className="list__item">Neutral: {neutral}</li>
                <li className="list__item">Bad: {bad}</li>
                <li className="list__item">Total: {total}</li>
                <li className="list__item list__item--positive__total">Positive feedback: {positivePercentage}%</li>
            </ul>
        </div>
    )
}

export default Statistics;