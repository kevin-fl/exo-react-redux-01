import { useSelector } from 'react-redux';

const CharacterDisplay = () => {

    const characters = useSelector(state => state.character);

    console.log(characters);

    return (
        <div>
            <ul>
                <li>zaza vanderquack</li>
                <li>Daisy duck</li>
                <li>balthazar Picsou</li>
            </ul>

        </div>

    );

};

export default CharacterDisplay;