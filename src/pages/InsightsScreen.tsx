import React, { useState } from 'react';
import { Brain, Zap, Eye, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardContent } from '@/components/ui/card.tsx';
import { useNavigate } from 'react-router-dom';

const InsightsScreen = () => {
  const navigate = useNavigate();
  const [currentInsight, setCurrentInsight] = useState(0);

  const InterventionScreen = () => {
    navigate('/Interventions');
  };


  const insights = [
    {
      icon: Zap,
      color: 'bg-red-100 text-red-500',
      title: 'Estimulação de Dopamina',
      content: 'Você está estimulando dopamina demais com vídeos curtos. Isso pode estar reduzindo sua capacidade de atenção e foco.',
      emoji: '⚡',
      tip: 'Tente intervalos de 30min sem tela para resetar o sistema de recompensa.'
    },
    {
      icon: Eye,
      color: 'bg-blue-100 text-blue-500',
      title: 'Janela de Foco Perdida',
      content: 'Seu foco ideal acontece entre 9h e 11h, mas você usou o TikTok nesse horário hoje.',
      emoji: '👁️',
      tip: 'Reserve esse horário para tarefas importantes. Seu córtex pré-frontal está mais ativo!'
    },
    {
      icon: Brain,
      color: 'bg-purple-100 text-purple-500',
      title: 'Sobrecarga Cognitiva',
      content: 'Seu cérebro processou muita informação fragmentada hoje. Isso gera fadiga mental.',
      emoji: '🧠',
      tip: 'Pratique respiração consciente para ativar o modo parassimpático.'
    }
  ];

  const nextInsight = () => {
    setCurrentInsight((prev) => (prev + 1) % insights.length);
  };

  const prevInsight = () => {
    setCurrentInsight((prev) => (prev - 1 + insights.length) % insights.length);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/Interventions');
  };

  const insight = insights[currentInsight];
  const IconComponent = insight.icon;

  return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={handleBack} className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800">Insights Neurais</h1>
            <div className="w-10" />
          </div>

          {/* Brain Activity Visualization */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full gradient-dopamind flex items-center justify-center pulse-gentle">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center bounce-in">
                <Zap className="w-4 h-4 text-white" />
              </div>
            </div>
            <p className="text-gray-600 mt-4">O que está acontecendo no seu cérebro?</p>
          </div>

          {/* Current Insight Card */}
          <Card className="dopamind-card shadow-xl mb-6 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${insight.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{insight.title}</h3>
                    <span className="text-2xl">{insight.emoji}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {insight.content}
                </p>

                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                  <p className="text-sm text-green-700 font-medium">
                    💡 Dica: {insight.tip}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 pb-4">
                {insights.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentInsight ? 'bg-purple-500' : 'bg-gray-300'
                        }`}
                    />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mb-6">
            <Button
                variant="outline"
                onClick={prevInsight}
                className="flex-1 mr-2 py-3 rounded-xl border-purple-200 hover:bg-purple-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            <Button
                variant="outline"
                onClick={nextInsight}
                className="flex-1 ml-2 py-3 rounded-xl border-purple-200 hover:bg-purple-50"
            >
              Próximo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mental Load Graph Preview */}
          <Card className="dopamind-card shadow-lg mb-6">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-3">Carga Mental Hoje</h4>
              <div className="flex items-end space-x-2 h-20">
                {[40, 60, 85, 90, 75, 55, 30].map((height, index) => (
                    <div
                        key={index}
                        className="flex-1 gradient-dopamind rounded-t opacity-70"
                        style={{ height: `${height}%` }}
                    />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>6h</span>
                <span>9h</span>
                <span>12h</span>
                <span>15h</span>
                <span>18h</span>
                <span>21h</span>
                <span>24h</span>
              </div>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Button
              onClick={handleNext}
              className="w-full gradient-dopamind text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Ver intervenções práticas
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
  );
};

export default InsightsScreen;