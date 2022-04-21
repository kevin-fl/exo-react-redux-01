import ButtonAction from '../../components/button-action/button-action';
import PropTypes from 'prop-types';

const CounterInteraction = ({ step }) => {

    return (
        <div>
            <ButtonAction direction='up' step={step} />
            <ButtonAction direction='down' step={step} />
        </div>
    );
};

CounterInteraction.propTypes = {
    step: PropTypes.number
};

CounterInteraction.defaultProps = {
    step: 1
};

export default CounterInteraction;