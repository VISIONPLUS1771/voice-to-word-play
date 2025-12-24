import { Gamepad2, BookOpen, Volume2, VolumeX, Languages, Users, Target, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WordCard } from '@/components/WordCard';
import wordsData from '@/data/words.json';
import { useEffect } from 'react';

import mackaPng from '@/assets/macka.png';
import jajePng from '@/assets/jaje.png';
import pasPng from '@/assets/pas.png';
import jabukaPng from '@/assets/jabuka.png';
import suncePng from '@/assets/sunce.png';

export default function Index() {
  const { settings, updateSettings, dictionary, addWord } = useGameStore();
  
  useEffect(() => {
    if (dictionary.length === 0) {
      const imageMap: Record<string, string> = {
        'macka': mackaPng, 'jaje': jajePng, 'pas': pasPng,
        'jabuka': jabukaPng, 'sunce': suncePng
      };
      wordsData.forEach(word => {
        addWord({ ...word, image: imageMap[word.id] || word.image });
      });
    }
  }, [dictionary.length, addWord]);
  
  const games = [
    { id: 'line3-assoc', title: 'Linija 3 → Asocijacija', description: 'Napravi 3 u nizu i pokrij asocijaciju', icon: Target, gradient: 'from-primary to-primary-glow', players: '2-4', path: '/play/line3-assoc' },
    { id: 'line3-letter', title: 'Linija 3 → Slovo', description: 'Napravi 3 u nizu i pogodi početno slovo', icon: Users, gradient: 'from-secondary to-secondary-glow', players: '2-4', path: '/play/line3-letter' },
    { id: 'phoneme-grid', title: 'Od glasova do riječi', description: 'Vježbaj glasove kroz 6 razina', icon: Gamepad2, gradient: 'from-accent to-accent-glow', players: '1', path: '/play/phoneme-grid' }
  ];
  
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Edukativne igre za djecu
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-display bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Igra 3 u 1
          </h1>
          <p className="text-xl text-muted-foreground font-display">Glas → Slovo → Riječ</p>
        </div>
        
        {/* Settings */}
        <div className="bg-card rounded-3xl p-6 mb-10 shadow-lg animate-fade-in" style={{animationDelay: '0.1s'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">Uzrast</label>
              <Select value={settings.ageGroup} onValueChange={(v: '3-4' | '5-6') => updateSettings({ ageGroup: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-4">3-4 godine</SelectItem>
                  <SelectItem value="5-6">5-6 godina</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">Pismo</label>
              <Select value={settings.script} onValueChange={(v: 'latin' | 'cyrillic') => updateSettings({ script: v })}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="latin"><Languages className="w-4 h-4 inline mr-2" />Latinica</SelectItem>
                  <SelectItem value="cyrillic"><Languages className="w-4 h-4 inline mr-2" />Ćirilica</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">Zvuk</label>
              <div className="flex items-center gap-3 bg-muted/50 rounded-xl p-3">
                {settings.soundEnabled ? <Volume2 className="w-5 h-5 text-primary" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
                <Switch checked={settings.soundEnabled} onCheckedChange={(c) => updateSettings({ soundEnabled: c })} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted-foreground">Nastavni način</label>
              <div className="flex items-center gap-3 bg-muted/50 rounded-xl p-3">
                <Gamepad2 className={`w-5 h-5 ${settings.teacherMode ? 'text-warning' : 'text-muted-foreground'}`} />
                <Switch checked={settings.teacherMode} onCheckedChange={(c) => updateSettings({ teacherMode: c })} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Games */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {games.map((game, i) => (
            <Link key={game.id} to={game.path} className="animate-fade-in" style={{animationDelay: `${0.2 + i * 0.1}s`}}>
              <div className="group bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${game.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <game.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-3 font-display">{game.title}</h3>
                <p className="text-muted-foreground text-center text-sm mb-4">{game.description}</p>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-4">
                  <Users className="w-4 h-4" /><span>{game.players} igrača</span>
                </div>
                <Button className="btn-game w-full">Pokreni igru</Button>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Dictionary */}
        <div className="bg-card rounded-3xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-display">Rječnik</h2>
            <Link to="/library"><Button variant="outline"><BookOpen className="w-4 h-4 mr-2" />Otvori</Button></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {dictionary.slice(0, 5).map((word) => (
              <WordCard key={word.id} word={word} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
