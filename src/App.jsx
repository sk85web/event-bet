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
        <PlayerInfo
          balance={'100,500.00'}
          avatar={'public/avatar.jpg'}
          stars={5}
          userName={'LongUserName'}
        />
        <Loader progress={70} />
        <TournamentItem
          title={'NL 2-7 Triple Draw'}
          gameName={'OFC Pineapple'}
          time={'12:00'}
          date={'28 July'}
          rank={1000}
          prize={1000000}
        />
      </main>
    </div>
  );
}

export default App;
