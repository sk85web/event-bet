import './PlayerInfo.less';

const PlayerInfo = ({ balance, avatar, stars, userName }) => {
  return (
    <section className="player-info">
      <div className="player-info__name">
        <h4 className="player-name">{userName}</h4>
        <div className="player-rate">
          {Array.from({ length: stars }).map((_, index) => (
            <img
              key={index}
              className="rate-icon"
              src="/public/star.svg"
              alt="icon"
            />
          ))}
        </div>
      </div>
      <div className="player-info__avatar">
        <img src={avatar} alt="avatar" />
      </div>

      {/* Balance button */}

      <button className="balance-btn">${balance}</button>
    </section>
  );
};

export default PlayerInfo;
