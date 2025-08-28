import React from 'react';
import { TrendingUp, Brain, Clock, Star, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const ProgressScreen = () => {
  const navigate = useNavigate();

  const progressData = [
    {
      metric: 'Tempo de Foco',
      improvement: '+18%',
      description: 'essa semana',
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100'
    },
    {
      metric: 'Uso Noturno de Redes',
      improvement: '-40min',
      description: 'mais memória de longo prazo',
      icon: Brain,
      color: 'text-green-500',
      bgColor: 'bg-green-100'
    },
    {
      metric: 'Qualidade do Sono',
      improvement: '+25%',
      description: 'melhor recuperação neural',
      icon: Star,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100'
    }
  ];

  const weeklyProgress = [
    { day: 'Seg', focus: 65, mood: 70, clarity: 60 },
    { day: 'Ter', focus: 72, mood: 75, clarity: 68 },
    { day: 'Qua', focus: 78, mood: 80, clarity: 75 },
    { day: 'Qui', focus: 82, mood: 85, clarity: 80 },
    { day: 'Sex', focus: 88, mood: 90, clarity: 85 },
    { day: 'Sáb', focus: 85, mood: 88, clarity: 82 },
    { day: 'Dom', focus: 90, mood: 92, clarity: 88 }
  ];

  const maxValue = Math.max(...weeklyProgress.flatMap(day => [day.focus, day.mood, day.clarity]));

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/ai-chat'); // Altere para a rota desejada
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={handleBack} className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800">Mapa Sináptico</h1>
            <div className="w-10" />
          </div>

          {/* Main Achievement */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full gradient-dopamind flex items-center justify-center pulse-gentle">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center bounce-in">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Suas sinapses estão mais fortes! 🧠✨
            </h2>
            <p className="text-gray-600">
              Veja como seu cérebro evoluiu esta semana
            </p>
          </div>

          {/* Progress Cards */}
          <div className="space-y-4 mb-8">
            {progressData.map((item, index) => {
              const IconComponent = item.icon;

              return (
                  <Card key={index} className="dopamind-card shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center`}>
                            <IconComponent className={`w-6 h-6 ${item.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">{item.metric}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${item.color}`}>
                            {item.improvement}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              );
            })}
          </div>

          {/* Weekly Chart */}
          <Card className="dopamind-card shadow-lg mb-8">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Evolução Semanal</h3>

              <div className="space-y-3">
                {/* Legend */}
                <div className="flex justify-center space-x-4 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">Foco</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-600">Humor</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Clareza</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="flex items-end justify-between h-32 px-2">
                  {weeklyProgress.map((day, index) => (
                      <div key={index} className="flex flex-col items-center space-y-1">
                        <div className="flex items-end space-x-1 h-24">
                          <div
                              className="w-2 bg-blue-500 rounded-t"
                              style={{ height: `${(day.focus / maxValue) * 100}%` }}
                          />
                          <div
                              className="w-2 bg-purple-500 rounded-t"
                              style={{ height: `${(day.mood / maxValue) * 100}%` }}
                          />
                          <div
                              className="w-2 bg-green-500 rounded-t"
                              style={{ height: `${(day.clarity / maxValue) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">{day.day}</span>
                      </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Neural Growth Visualization */}
          <Card className="dopamind-card shadow-lg mb-6">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-800 mb-4">Crescimento Neural</h3>
              <div className="flex justify-center items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌱</div>
                  <p className="text-xs text-gray-600">Semana passada</p>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="text-center">
                  <div className="text-3xl mb-2 pulse-gentle">🌳</div>
                  <p className="text-xs text-gray-600">Hoje</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                Suas conexões neurais estão mais densas e eficientes!
              </p>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Button
              onClick={handleNext}
              className="w-full gradient-dopamind text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Conversar com a Mindy (IA)
          </Button>
        </div>
      </div>
  );
};

export default ProgressScreen;