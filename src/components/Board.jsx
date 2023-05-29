/* eslint-disable react/prop-types */
import Square from './Square';

// eslint-disable-next-line react/prop-types
const Board = ({square,handleSquareClick,winningSquares}) => {
  
  const renderSquare = position => {
    const iswinningSquares= winningSquares.includes(position);

    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
        iswinningSquares={iswinningSquares}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
