import { useDispatch, useSelector } from "react-redux";
import { counterReset } from "../../store/actions/counter-action";

const CounterReset = () => {


    //recuperation de la valeur count contenue dans le state du 

    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();


    const handleReset = () => {
        dispatch(counterReset());




    };




    return (
        <div>
            <button onClick={handleReset}
                disabled={count === 0}>Remise à Zero du compteur</button>
        </div>
    );
};

export default CounterReset;