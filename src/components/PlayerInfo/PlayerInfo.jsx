import './PlayerInfo.less';

const PlayerInfo = () => {
  return (
    <section className="player-info">
      <div className="player-info__name">
        <h4 className="player-name">LongUserName</h4>
        <div className="player-rate">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              className="rate-icon"
              src="public/star.svg"
              alt="icon"
            />
          ))}
        </div>
      </div>
      <div className="player-info__avatar">
        <img src="public/avatar.jpg" alt="avatar" />
      </div>

      {/* Balance button */}

      <button className="balance-btn">$100,500.00</button>
    </section>
  );
};

export default PlayerInfo;
