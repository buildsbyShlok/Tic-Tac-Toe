        const cells = document.querySelectorAll('.cell');
        const status = document.getElementById('status');
        const resetBtn = document.getElementById('resetBtn');
        
        let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;

        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        cells.forEach(cell => {
            cell.addEventListener('click', handleCellClick);
        });

        resetBtn.addEventListener('click', resetGame);

        function handleCellClick(e) {
            const index = e.target.dataset.index;
            
            if (board[index] !== '' || !gameActive) return;
            
            board[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            e.target.classList.add('taken', currentPlayer.toLowerCase());
            
            if (checkWin()) {
                status.textContent = `Player ${currentPlayer} Wins! 🎉`;
                gameActive = false;
                highlightWinner();
                return;
            }
            
            if (board.every(cell => cell !== '')) {
                status.textContent = "It's a Draw!";
                gameActive = false;
                return;
            }
            
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s Turn`;
        }

        function checkWin() {
            return winPatterns.some(pattern => {
                return pattern.every(index => board[index] === currentPlayer);
            });
        }

        function highlightWinner() {
            winPatterns.forEach(pattern => {
                if (pattern.every(index => board[index] === currentPlayer)) {
                    pattern.forEach(index => {
                        cells[index].classList.add('winner');
                    });
                }
            });
        }

        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            status.textContent = "Player X's Turn";
            
            cells.forEach(cell => {
                cell.textContent = '';
                cell.className = 'cell';
            });
        }