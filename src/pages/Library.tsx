import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { WordCard } from '@/components/WordCard';
import { Button } from '@/components/ui/button';
import wordsData from '@/data/words.json';
import { useEffect } from 'react';

export default function Library() {
  const { dictionary, addWord, removeWord } = useGameStore();
  
  // Load initial data if dictionary is empty
  useEffect(() => {
    if (dictionary.length === 0) {
      wordsData.forEach(word => addWord(word));
    }
  }, [dictionary.length, addWord]);
  
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
              Rječnik riječi
            </h1>
          </div>
          
          <Button className="btn-game">
            <Plus className="w-5 h-5 mr-2" />
            Dodaj riječ
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-muted-foreground">Ukupno riječi</h3>
            <p className="text-3xl font-bold text-primary">{dictionary.length}</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-muted-foreground">Kategorije</h3>
            <p className="text-3xl font-bold text-secondary">
              {new Set(dictionary.map(w => w.category)).size}
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-muted-foreground">Prosječno glasova</h3>
            <p className="text-3xl font-bold text-accent">
              {dictionary.length > 0 
                ? Math.round(dictionary.reduce((acc, w) => acc + w.phonemes.length, 0) / dictionary.length)
                : 0
              }
            </p>
          </div>
        </div>
        
        {/* Word Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dictionary.map((word) => (
            <div key={word.id} className="relative group">
              <WordCard 
                word={word}
                showPhonemes={true}
                size="md"
              />
              
              {/* Actions */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 
                            transition-opacity flex space-x-1">
                <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive" 
                  className="h-8 w-8 p-0"
                  onClick={() => removeWord(word.id)}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {dictionary.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">
              Nema riječi u rječniku
            </p>
            <Button className="btn-game">
              <Plus className="w-5 h-5 mr-2" />
              Dodaj prvu riječ
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}