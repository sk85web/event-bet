import './TournamentItem.less';

const TournamentItem = ({ title, gameName, time, date, rank, prize }) => {
  return (
    <section className="tournament-wrapper">
      <div className="tournament-info">
        <div className="info-block">
          <div className="info-block__header">
            <img src="/public/pin.svg" />
            <h4 className="info-block__header-title">{title}</h4>
          </div>

          <h3 className="ofc">{gameName}</h3>

          <div className="date">
            <span className="date-info">
              {time} pm, {date}
            </span>
          </div>
        </div>

        <div className="btn-block">
          <div className="btn-block__btn">
            <button type="button">join table</button>
          </div>
          <div className="btn-block__rank">
            <div className="rank-player">
              <img src="/public/players.svg" /> {rank}/1000
            </div>
            <span className="rank-prize">
              <img src="/public/tourney.svg" /> {prize}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentItem;
