import { ArrowLeft, RotateCcw, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { GameBoard6x10 } from '@/components/GameBoard6x10';
import { TokenBank } from '@/components/TokenBank';
import { WordCard } from '@/components/WordCard';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function PhonemeGrid() {
  const { 
    dictionary, 
    phonemeGridState, 
    gameState, 
    settings,
    startGame,
    setPhonemeGridLevel,
    setActiveWord,
    placeToken,
    clearPhonemeGrid,
    validatePhonemeLevel
  } = useGameStore();
  
  const [selectedToken, setSelectedToken] = useState<'black' | 'yellow' | 'red' | null>(null);
  const [gamePhase, setGamePhase] = useState<'word-select' | 'playing' | 'complete'>('word-select');
  const [targetPhoneme, setTargetPhoneme] = useState<string | null>(null);
  const [targetPosition, setTargetPosition] = useState<number | null>(null);
  
  useEffect(() => {
    if (!gameState.isPlaying) {
      startGame('phoneme-grid');
    }
  }, [startGame, gameState.isPlaying]);
  
  const currentLevel = phonemeGridState.currentLevel;
  const activeWord = phonemeGridState.activeWord;
  
  const handleWordSelect = (word: any) => {
    setActiveWord(word);
    setGamePhase('playing');
    
    // For teacher mode, allow setting target phoneme/position
    if (settings.teacherMode && (currentLevel === 3 || currentLevel === 4)) {
      // Show teacher controls
    }
  };
  
  const handleCellClick = (index: number) => {
    if (gamePhase !== 'playing' || !selectedToken) return;
    
    placeToken(index, selectedToken);
    
    // Auto-validate after each placement
    const isValid = validatePhonemeLevel();
    if (isValid) {
      setGamePhase('complete');
    }
  };
  
  const handleLevelChange = (newLevel: number) => {
    setPhonemeGridLevel(newLevel);
    clearPhonemeGrid();
    setGamePhase('word-select');
  };
  
  const getTokenCounts = () => {
    const usedTokens = phonemeGridState.board.filter(cell => cell !== null);
    return {
      black: 20 - usedTokens.filter(t => t === 'black').length,
      yellow: 20 - usedTokens.filter(t => t === 'yellow').length,
      red: 20 - usedTokens.filter(t => t === 'red').length
    };
  };
  
  const getLevelInstructions = () => {
    switch (currentLevel) {
      case 1:
        return "Postavite crne žetone za svaki glas u riječi";
      case 2:
        return "Žuti žetoni za samoglasnike, crni za suglasnike";
      case 3:
        return "Crveni žeton na traženi glas, žuti za samoglasnike, crni za ostale";
      case 4:
        return "Karticu pojma umjesto crvenog žetona na traženom glasu";
      case 5:
        return "Karticu slova umjesto crvenog žetona";
      case 6:
        return "Kartice slova za sve glasove u riječi";
      default:
        return "";
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="max-w-6xl mx-auto">
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
              Od glasova do riječi
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Target className="w-5 h-5" />
            <span>Razina {currentLevel}/6</span>
          </div>
        </div>
        
        {/* Level Selection */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-foreground">Odaberite razinu:</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <Button
                key={level}
                variant={currentLevel === level ? "default" : "outline"}
                onClick={() => handleLevelChange(level)}
                className="h-12"
              >
                R{level}
              </Button>
            ))}
          </div>
          
          <p className="text-muted-foreground">
            <strong>Razina {currentLevel}:</strong> {getLevelInstructions()}
          </p>
        </div>
        
        {gamePhase === 'word-select' && (
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-bold mb-4">Odaberite riječ za vježbu:</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {dictionary.map((word) => (
                <div
                  key={word.id}
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => handleWordSelect(word)}
                >
                  <WordCard word={word} size="sm" showPhonemes />
                </div>
              ))}
            </div>
          </div>
        )}
        
        {gamePhase === 'playing' && activeWord && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Game Board */}
            <div className="lg:col-span-3">
              <GameBoard6x10
                board={phonemeGridState.board}
                activeWord={activeWord}
                onCellClick={handleCellClick}
                onActiveWordClick={() => {/* TTS */}}
              />
            </div>
            
            {/* Control Panel */}
            <div className="space-y-6">
              {/* Token Bank */}
              <TokenBank
                blackTokens={getTokenCounts().black}
                yellowTokens={getTokenCounts().yellow}
                redTokens={getTokenCounts().red}
                onTokenSelect={setSelectedToken}
                selectedToken={selectedToken}
              />
              
              {/* Active Word Info */}
              <div className="bg-card rounded-2xl p-4 shadow-lg">
                <h3 className="font-bold mb-3">Aktivna riječ:</h3>
                <WordCard word={activeWord} size="sm" showPhonemes />
                
                <div className="mt-4 space-y-2 text-sm">
                  <p><strong>Glasovi:</strong> {activeWord.phonemes.length}</p>
                  <p><strong>Samoglasnici:</strong> {activeWord.vowels_idx.length}</p>
                  {targetPhoneme && (
                    <p><strong>Traženi glas:</strong> {targetPhoneme} 
                       (pozicija {targetPosition! + 1})</p>
                  )}
                </div>
              </div>
              
              {/* Teacher Controls */}
              {settings.teacherMode && (currentLevel === 3 || currentLevel === 4) && (
                <div className="bg-warning/10 rounded-2xl p-4 border border-warning/20">
                  <h3 className="font-bold text-warning mb-3">Nastavni način:</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Odaberite koji glas treba označiti:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {activeWord.phonemes.map((phoneme, index) => (
                      <Button
                        key={index}
                        variant={targetPosition === index ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          setTargetPhoneme(phoneme);
                          setTargetPosition(index);
                        }}
                      >
                        {index + 1}. {phoneme}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Actions */}
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => clearPhonemeGrid()}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Očisti ploču
                </Button>
                
                <Button 
                  className="btn-success w-full"
                  onClick={() => {
                    const isValid = validatePhonemeLevel();
                    if (isValid) {
                      setGamePhase('complete');
                    }
                  }}
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Provjeri odgovor
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {gamePhase === 'complete' && (
          <div className="text-center space-y-6">
            <div className="bg-success/10 rounded-2xl p-8">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-success mb-2">
                Odlično!
              </h2>
              <p className="text-lg text-muted-foreground">
                Uspješno ste završili razinu {currentLevel}
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={() => setGamePhase('word-select')} 
                className="btn-game"
              >
                Nova riječ
              </Button>
              
              {currentLevel < 6 && (
                <Button 
                  onClick={() => handleLevelChange(currentLevel + 1)}
                  className="btn-success"
                >
                  Sljedeća razina
                </Button>
              )}
              
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