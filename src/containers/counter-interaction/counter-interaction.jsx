import ButtonAction from '../../components/button-action/button-action';
import PropTypes from 'prop-types';
import { counterIncrement, counterDecrement } from '../../store/actions/counter-action';
import { useDispatch } from 'react-redux';


const CounterInteraction = ({ step }) => {
    //recuperation du "dispatch" pour envoyer des actions au store

    const dispatch = useDispatch();

    const handleIncrement = () => {
        //genere l action
        const action = counterIncrement(step);
        //envoi laction du store
        dispatch(action);


    };

    const handleDecrement = () => {
        //Generation de l action et envoi vers le store
        dispatch(counterDecrement(step));


    };

    return (
        <div>
            <ButtonAction onClick={handleIncrement} direction='up' step={step} />
            <ButtonAction onClick={handleDecrement} direction='down' step={step} />
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





//ligne 8 // permet d utiliser le onclick via le components 