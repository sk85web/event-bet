import './styles/global.less';

import Spinner from './components/Spinner/Spinner';
import Loader from './components/Loader/Loader';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import TournamentItem from './components/TournamentItem/TournamentItem';

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1 className="header">Poker</h1>
      </header>
      <main>
        <Spinner />
        <PlayerInfo />
        <Loader progress={70} />
        <TournamentItem />
      </main>
    </div>
  );
}

export default App;
