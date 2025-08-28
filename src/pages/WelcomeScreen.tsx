import React from 'react';
import { Brain, Clock, TrendingDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/componentwo/button';
import { Card, CardContent } from '@/components/componentwo/card';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/teste');
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-neuro mb-4 animate-glow">
              <Brain className="w-10 h-10 text-white animate-pulse-slow" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Olá, <span className="text-gradient">Ana</span>! 👋
            </h1>
            <p className="text-gray-600">Como está sua mente hoje?</p>
          </div>

          {/* Daily Summary Cards */}
          <div className="space-y-4 mb-8">
            <Card className="glass-effect border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tempo no Instagram hoje</p>
                      <p className="font-bold text-gray-800">3h 24min</p>
                    </div>
                  </div>
                  <div className="text-2xl">📱</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Nível de foco</p>
                      <p className="font-bold text-gray-800">Abaixo do ideal</p>
                    </div>
                  </div>
                  <div className="text-2xl">😕</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Estado mental</p>
                      <p className="font-bold text-gray-800">Estimulação excessiva</p>
                    </div>
                  </div>
                  <div className="text-2xl">🧠</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Button */}
          <Button
              onClick={handleNext} // Agora o clique chama a função handleNext
              className="w-full gradient-neuro text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 animate-float"
          >
            Ver recomendações do NeuroLink
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Baseado na análise dos seus hábitos digitais
            </p>
          </div>
        </div>
      </div>
  );
};

export default WelcomeScreen;