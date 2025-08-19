import { ArrowLeft, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { GameBoard3x3 } from '@/components/GameBoard3x3';
import { WordCard } from '@/components/WordCard';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function Line3Assoc() {
  const { 
    dictionary, 
    line3State, 
    gameState, 
    settings,
    startGame,
    placeLine3Card,
    checkLine3Win 
  } = useGameStore();
  
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [gamePhase, setGamePhase] = useState<'setup' | 'playing' | 'won'>('setup');
  
  useEffect(() => {
    if (!gameState.isPlaying) {
      startGame('line3-assoc');
    }
  }, [startGame, gameState.isPlaying]);
  
  const handleWordSelect = (wordId: string) => {
    if (selectedWords.includes(wordId)) {
      setSelectedWords(prev => prev.filter(id => id !== wordId));
    } else if (selectedWords.length < 4) {
      setSelectedWords(prev => [...prev, wordId]);
    }
  };
  
  const startPlaying = () => {
    // Initialize players with selected words
    const players = selectedWords.map((wordId, index) => ({
      id: `player${index}`,
      name: `Igrač ${index + 1}`,
      wordId,
      cards: 5
    }));
    
    // TODO: Update game state with players
    setGamePhase('playing');
  };
  
  const handleCellClick = (index: number) => {
    if (gamePhase !== 'playing' || line3State.board[index] !== null) return;
    
    const currentPlayer = line3State.players[line3State.currentPlayer];
    if (currentPlayer && currentPlayer.cards > 0) {
      const success = placeLine3Card(index, currentPlayer.wordId);
      if (success) {
        const winningLine = checkLine3Win();
        if (winningLine) {
          setGamePhase('won');
        }
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Nazad
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">
              Linija 3 → Asocijacija
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span>2-4 igrača</span>
          </div>
        </div>
        
        {/* Game Rules */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-foreground">Kako se igra:</h2>
          <ol className="space-y-2 text-muted-foreground">
            <li>1. Svaki igrač odabira jedan pojam i dobije 5 kartica</li>
            <li>2. Igrači se naizmjenjuju i postavljaju kartice na ploču 3×3</li>
            <li>3. Tko prvi napravi 3 u nizu (horizontalno, vertikalno ili dijagonalno) pobjeđuje</li>
            <li>4. Pobjednik pokriva jednu asocijaciju na pomoćnoj ploči</li>
          </ol>
        </div>
        
        {gamePhase === 'setup' && (
          <div className="space-y-6">
            {/* Word Selection */}
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">
                Odaberite riječi za igrače ({selectedWords.length}/4):
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {dictionary.slice(0, 8).map((word) => (
                  <div
                    key={word.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedWords.includes(word.id) 
                        ? 'ring-4 ring-primary scale-105' 
                        : 'hover:scale-105'
                    }`}
                    onClick={() => handleWordSelect(word.id)}
                  >
                    <WordCard word={word} size="sm" />
                  </div>
                ))}
              </div>
              
              <Button 
                className="btn-game w-full"
                disabled={selectedWords.length < 2}
                onClick={startPlaying}
              >
                Počni igru ({selectedWords.length} igrača)
              </Button>
            </div>
          </div>
        )}
        
        {gamePhase === 'playing' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Game Board */}
            <div className="lg:col-span-2">
              <GameBoard3x3
                board={line3State.board}
                onCellClick={handleCellClick}
                winningLine={line3State.winningLine}
              />
              
              {/* Current Player */}
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold text-muted-foreground">
                  Na potezu je:
                </p>
                <p className="text-2xl font-bold text-primary">
                  {line3State.players[line3State.currentPlayer]?.name}
                </p>
              </div>
            </div>
            
            {/* Players Panel */}
            <div className="space-y-4">
              {line3State.players.map((player, index) => {
                const word = dictionary.find(w => w.id === player.wordId);
                return (
                  <div 
                    key={player.id}
                    className={`bg-card rounded-xl p-4 shadow-lg transition-all duration-300 ${
                      index === line3State.currentPlayer ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {word && (
                        <div className="w-12 h-12">
                          <img 
                            src={word.image} 
                            alt={word.word_lat}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-bold">{player.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {player.cards} kartica
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {gamePhase === 'won' && (
          <div className="text-center space-y-6">
            <div className="bg-success/10 rounded-2xl p-8">
              <Trophy className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-success mb-2">
                Čestitamo!
              </h2>
              <p className="text-lg text-muted-foreground">
                {line3State.winner && dictionary.find(w => w.id === line3State.winner)?.word_lat} je pobijedio!
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button onClick={() => setGamePhase('setup')} className="btn-game">
                Nova igra
              </Button>
              <Link to="/">
                <Button variant="outline">
                  Glavna stranica
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}