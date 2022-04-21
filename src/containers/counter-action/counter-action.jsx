import ButtonAction from '../../components/button-action/button-action';
import PropTypes from 'prop-types';

const CounterAction = ({ step }) => {

    return (
        <div>
            <ButtonAction direction='up' step={step} />
            <ButtonAction direction='down' step={step} />
        </div>
    );
};

CounterAction.propTypes = {
    step: PropTypes.number
};

CounterAction.defaultProps = {
    step: 1
};

export default CounterAction;