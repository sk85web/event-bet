import './Spinner.less';

const Spinner = () => {
  return (
    <div className="spinner">
      {Array.from({ length: 11 }).map((_, index) => (
        <div key={index} className="spinner-dot"></div>
      ))}
    </div>
  );
};

export default Spinner;
