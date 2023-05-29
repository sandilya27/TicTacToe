/* eslint-disable react/prop-types */
const StatusMessage = ({ winner, gamingBoard }) => {

    const {square,isXNext} = gamingBoard;

  const noMovesLeft = square.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner) {
      return <div>Winner is <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
      {winner}
    </span></div>;
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-orange">O</span> and{' '}
          <span className="text-green">X</span> tied
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }

    return null;
  };
  return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default StatusMessage;
