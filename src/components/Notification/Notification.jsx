import PropTypes from 'prop-types';
import s from '../Statistics/statistics.module.css';


export const Notification =({message}) =>{
    return(<span className={s.text}>{message}</span>)   
}

Notification.propTypes= {
    message: PropTypes.string.isRequired
}