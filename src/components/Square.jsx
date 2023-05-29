// eslint-disable-next-line react/prop-types
const Square = ({ value, onClick, iswinningSquares }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
        iswinningSquares ? 'winning' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
