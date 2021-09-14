/* Card component as a sort of shell for the expenses or expense item*/
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;
