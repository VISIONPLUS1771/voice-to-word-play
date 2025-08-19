import { Gamepad2, BookOpen, Settings, Volume2, VolumeX, Languages, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WordCard } from '@/components/WordCard';
import wordsData from '@/data/words.json';
import { useEffect } from 'react';

// Import images
import mackaPng from '@/assets/macka.png';
import jajePng from '@/assets/jaje.png';
import pasPng from '@/assets/pas.png';
import jabukaPng from '@/assets/jabuka.png';
import suncePng from '@/assets/sunce.png';

export default function Index() {
  const { 
    settings, 
    updateSettings, 
    dictionary, 
    addWord, 
    gameState 
  } = useGameStore();
  
  // Load initial data and fix image paths
  useEffect(() => {
    if (dictionary.length === 0) {
      const imageMap: Record<string, string> = {
        'macka': mackaPng,
        'jaje': jajePng,
        'pas': pasPng,
        'jabuka': jabukaPng,
        'sunce': suncePng
      };
      
      wordsData.forEach(word => {
        addWord({
          ...word,
          image: imageMap[word.id] || word.image
        });
      });
    }
  }, [dictionary.length, addWord]);
  
  const games = [
    {
      id: 'line3-assoc',
      title: 'Linija 3 → Asocijacija',
      description: 'Napravi 3 u nizu i pokrij asocijaciju',
      icon: Target,
      color: 'primary',
      players: '2-4',
      path: '/play/line3-assoc'
    },
    {
      id: 'line3-letter',
      title: 'Linija 3 → Slovo',
      description: 'Napravi 3 u nizu i pogodi početno slovo',
      icon: Users,
      color: 'secondary',
      players: '2-4', 
      path: '/play/line3-letter'
    },
    {
      id: 'phoneme-grid',
      title: 'Od glasova do riječi',
      description: 'Vježbaj glasove kroz 6 razina',
      icon: Gamepad2,
      color: 'accent',
      players: '1',
      path: '/play/phoneme-grid'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent 
                         bg-clip-text text-transparent mb-4">
            Igra 3 u 1
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Glas → Slovo → Riječ
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Didaktičke igre za razvoj fonemske percepcije i prepoznavanje slova kao simbola glasova
          </p>
        </div>
        
        {/* Settings Panel */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Age Group */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">
                Uzrast
              </label>
              <Select 
                value={settings.ageGroup} 
                onValueChange={(value: '3-4' | '5-6') => updateSettings({ ageGroup: value })}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-4">3-4 godine</SelectItem>
                  <SelectItem value="5-6">5-6 godina</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Script */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">
                Pismo
              </label>
              <Select 
                value={settings.script} 
                onValueChange={(value: 'latin' | 'cyrillic') => updateSettings({ script: value })}
              >
                <SelectTrigger className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latin">
                    <div className="flex items-center space-x-2">
                      <Languages className="w-4 h-4" />
                      <span>Latinica</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="cyrillic">
                    <div className="flex items-center space-x-2">
                      <Languages className="w-4 h-4" />
                      <span>Ćirilica</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Sound */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">
                Zvuk
              </label>
              <div className="flex items-center space-x-3 bg-background rounded-lg p-3">
                {settings.soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-primary" />
                ) : (
                  <VolumeX className="w-5 h-5 text-muted-foreground" />
                )}
                <Switch
                  checked={settings.soundEnabled}
                  onCheckedChange={(checked) => updateSettings({ soundEnabled: checked })}
                />
              </div>
            </div>
            
            {/* Teacher Mode */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">
                Nastavni način
              </label>
              <div className="flex items-center space-x-3 bg-background rounded-lg p-3">
                <Settings className={`w-5 h-5 ${settings.teacherMode ? 'text-warning' : 'text-muted-foreground'}`} />
                <Switch
                  checked={settings.teacherMode}
                  onCheckedChange={(checked) => updateSettings({ teacherMode: checked })}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {games.map((game) => (
            <Link key={game.id} to={game.path}>
              <div className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-${game.color}/10 
                                flex items-center justify-center group-hover:scale-110 
                                transition-transform duration-300`}>
                    <game.icon className={`w-8 h-8 text-${game.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary 
                               transition-colors">
                    {game.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {game.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-xs 
                                text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{game.players} igrača</span>
                  </div>
                  
                  <Button className="btn-game w-full">
                    Pokreni igru
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Dictionary Preview */}
        <div className="bg-card rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Rječnik riječi</h2>
            <Link to="/library">
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Otvori rječnik
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {dictionary.slice(0, 5).map((word) => (
              <WordCard 
                key={word.id} 
                word={word} 
                size="sm" 
                className="hover:scale-105 transition-transform" 
              />
            ))}
          </div>
          
          {dictionary.length > 5 && (
            <div className="text-center mt-6">
              <p className="text-muted-foreground">
                i još {dictionary.length - 5} riječi...
              </p>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>
            Testna aplikacija za razvoj fonemske percepcije • 
            Bez komercijalnih elemenata
          </p>
        </div>
      </div>
    </div>
  );
}
