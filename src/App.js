import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterReset from './containers/counter-reset/counter-reset';
import CounterInteraction from './containers/counter-interaction/counter-interaction';
import CharacterForm from './containers/character-form/character-form';
import CharacterDisplay from './containers/character-display/character-display';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <CounterDisplay />
        <CounterInteraction />
        <CounterInteraction step={5} />
        <CounterReset />
      </main>
      <br />
      <section>
        <CharacterForm />
        <CharacterDisplay />
      </section>
      <MainFooter />
    </div>
  );
}

export default App;
