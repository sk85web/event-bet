import './styles/global.less';

import Spinner from './components/Spinner/Spinner';
import Loader from './components/Loader/Loader';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import TournamentItem from './components/TournamentItem/TournamentItem';

function App() {
  return (
    <main className="wrapper">
      <Spinner />
      <Loader />
      <PlayerInfo />
      <TournamentItem />
    </main>
  );
}

export default App;
