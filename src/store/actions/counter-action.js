// constante avec le nom des differentes actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';


//Methode pour generer les objets "action"
//-Fonction qui creer l action "Increment"


export const counterIncrement = (value) => {             //export permet au store d interagir avec les comopsanrs du provider
    return {
        type: COUNTER_INCREMENT,
        payload: value

    };
};



//Fcontion lambda qui creer l action "Decrement" 
export const counterDecrement = (value) => ({
    type: COUNTER_DECREMENT,
    payload: value


});


//- Fonction lambda qui cree l action "reset"                       
//  t'es pas obliger de taper le return ds le cas ou il y a des parentheses avant les curves brackets ligne29
export const counterReset = () => ({
    type: COUNTER_RESET
});