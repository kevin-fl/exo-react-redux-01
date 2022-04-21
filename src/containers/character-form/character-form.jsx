import { useForm } from 'react-hook-form';
import { characterAdd } from '../../store/actions/character-action';
const CharacterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        characterAdd(data);

    };


    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="firstname">Firstname</label>

                <input defaultValue=""{...register("firstname", { required: true })} />
                {errors.firstname && <span>This field is required</span>}
            </div>
            <div>
                <label htmlFor="lastname">Lastname</label>
                <input defaultValue="" id="lastname" {...register("lastname", { required: true })} />
                {errors.lastname && <span>This field is required</span>}
            </div>
            <div>
                <button type="submit">Ajouter</button>
            </div>
        </form>
    );
};


export default CharacterForm;