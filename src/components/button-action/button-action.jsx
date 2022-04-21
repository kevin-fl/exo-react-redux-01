import PropTypes from 'prop-types';

const ButtonAction = ({ step, direction, onClick }) => {

    return (
        <button onClick={() => onClick({ direction, step })}>
            {direction === 'down' ? <>&#9660;</> : <>&#9650;</>}
            {' '}
            {step}
        </button>
    );
};

ButtonAction.propTypes = {
    step: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['up', 'down']),
    onClick: PropTypes.func
};

ButtonAction.defaultProps = {
    direction: 'up',
    onClick: () => { }                  //le button reagit au onclick 
};

export default ButtonAction;