import  { COUNTER_INCREMENT, COUNTER_DECREMENT,COUNTER_RESET} from '../actions/counter-action';

//state ensuite action

const initialState = {
    count:0,
    message:'le compteur est intialisé'

};

//Fonction "Reducer" qui sera declencher lors des actions
// genere un nouveau state sur base du state et de l action 
//NB : charges utiles veut dire donnees utiles english: payload

export const counterReducer = (state = initialState , action) => {


// Utilisation d 'un switch pr separer les differentes actions .
    switch (action.type) {

        case COUNTER_INCREMENT:
            return {
                ...state, // permet d eviter la perte de valeur  sinon recupere que count et pas message de initalstate
                count: state.count + action.payload,
                message:`le compteur est incrementé de ${action.payload}`

                

            };
        case COUNTER_DECREMENT:
            return {
                ...state,
                count: state.count - action.payload,
                message:`le compteur est décrementé de ${action.payload}`


            };

        case COUNTER_RESET:
            return {
                ...state,        // recup que le count
                count: 0,
                message:'le compteur est remis a zéro'


            }

            //alternative: remise a la valeur initial
            //case COUNTER_RESET:
              //  return {...initialState}; //remet tt le state par zero 
            
            default:
                return state;
            

    }

};

export default counterReducer ;







//reducer recup les infos du counter action et je modifie en fonction ->  est ce que j ai une action a faire 