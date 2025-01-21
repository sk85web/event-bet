import './TournamentItem.less';

const TournamentItem = () => {
  return (
    <section className="tournament-wrapper">
      <div className="tournament-info">
        <div className="info-block">
          <div className="info-block__header">
            <h4 className="info-block__header-title">NL 2-7 Triple Draw</h4>
          </div>

          <h3 className="ofc">OFC Pineapple</h3>

          <div className="date">
            <span className="date-info">12:00 pm, 28 July</span>
          </div>
        </div>

        <div className="btn-block">
          <div className="btn-block__btn">
            <button type="button">join table</button>
          </div>
          <div className="btn-block__rank">
            <div className="rank-player">
              <img src="/public/players.svg" /> 1000/1000
            </div>
            <span className="rank-prize">
              <img src="/public/tourney.svg" /> 1000000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentItem;
