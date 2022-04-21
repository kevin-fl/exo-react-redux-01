import PropTypes from 'prop-types';

const ButtonAction = ({ step, direction }) => {

    return (
        <button>
            {direction === 'down' ? <>&#9660;</> : <>&#9650;</>}
            {' '}
            {step}
        </button>
    );
};

ButtonAction.propTypes = {
    step: PropTypes.number.isRequired,
    direction: PropTypes.oneOf(['up', 'down'])
};

ButtonAction.defaultProps = {
    direction: 'up'
};

export default ButtonAction;