import './Loader.less';

const Loader = ({ progress }) => {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <h3 className="progress-title">Loading {progress}%</h3>
    </div>
  );
};

export default Loader;
