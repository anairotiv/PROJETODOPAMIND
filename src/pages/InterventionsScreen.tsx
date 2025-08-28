import React, { useState, useEffect } from 'react';
import { Wind, Clock, Smartphone, Trophy, ChevronLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const InterventionsScreen = () => {
  const navigate = useNavigate();
  const [activeIntervention, setActiveIntervention] = useState(null);
  const [completedInterventions, setCompletedInterventions] = useState([]);
  const [timer, setTimer] = useState(0);

  const interventions = [
    {
      id: 'breathing',
      icon: Wind,
      title: 'Respiração Consciente',
      subtitle: '3 minutos de calma',
      description: 'Respire fundo para ativar o sistema nervoso parassimpático e reduzir a ansiedade.',
      duration: 180,
      xp: 15,
      color: 'bg-blue-100 text-blue-500',
      emoji: '🫁'
    },
    {
      id: 'pomodoro',
      icon: Clock,
      title: 'Foco Pomodoro',
      subtitle: '25 min de foco puro',
      description: 'Use a técnica Pomodoro para treinar sua atenção sustentada.',
      duration: 1500,
      xp: 25,
      color: 'bg-green-100 text-green-500',
      emoji: '🍅'
    },
    {
      id: 'offline',
      icon: Smartphone,
      title: 'Desafio Offline',
      subtitle: '30 min sem telas',
      description: 'Dê um reset no seu sistema de dopamina ficando offline por 30 minutos.',
      duration: 1800,
      xp: 30,
      color: 'bg-purple-100 text-purple-500',
      emoji: '📵'
    }
  ];

  // Adiciona um useEffect para gerenciar o timer
  useEffect(() => {
    let interval;
    if (activeIntervention) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeIntervention]);

  const startIntervention = (id) => {
    setActiveIntervention(id);
    const intervention = interventions.find(i => i.id === id);
    if (intervention) {
      setTimer(intervention.duration);
    }
  };

  const completeIntervention = (id) => {
    setCompletedInterventions(prev => [...prev, id]);
    setActiveIntervention(null);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/stats'); // Ou a rota desejada para a próxima tela
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="ghost" onClick={handleBack} className="p-2">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-xl font-bold text-gray-800">Intervenções</h1>
            <div className="flex items-center space-x-1">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="font-bold text-gray-800">
              {completedInterventions.reduce((acc, id) => {
                const intervention = interventions.find(i => i.id === id);
                return acc + (intervention?.xp || 0);
              }, 0)} XP
            </span>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-2">🧠✨</div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              O que posso fazer agora?
            </h2>
            <p className="text-gray-600">
              Pequenas ações que fazem grande diferença para seu cérebro
            </p>
          </div>

          {/* Interventions List */}
          <div className="space-y-4 mb-8">
            {interventions.map((intervention) => {
              const IconComponent = intervention.icon;
              const isActive = activeIntervention === intervention.id;
              const isCompleted = completedInterventions.includes(intervention.id);

              return (
                  <Card
                      key={intervention.id}
                      className={`dopamind-card shadow-lg transition-all duration-200 ${
                          isActive ? 'ring-2 ring-purple-400 shadow-xl' : ''
                      } ${isCompleted ? 'bg-green-50' : ''}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${intervention.color}`}>
                            {isCompleted ? (
                                <Trophy className="w-6 h-6 text-green-500" />
                            ) : (
                                <IconComponent className="w-6 h-6" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold text-gray-800">
                                {intervention.title}
                              </h3>
                              <span className="text-lg">{intervention.emoji}</span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {intervention.subtitle}
                            </p>
                            {isActive && (
                                <p className="text-lg font-bold text-purple-600 mt-1">
                                  {formatTime(timer)}
                                </p>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                          {!isCompleted && !isActive && (
                              <Button
                                  onClick={() => startIntervention(intervention.id)}
                                  className="gradient-dopamind text-white px-4 py-2 rounded-lg text-sm font-medium"
                              >
                                <Play className="w-4 h-4 mr-1" />
                                Iniciar
                              </Button>
                          )}

                          {isActive && (
                              <Button
                                  onClick={() => completeIntervention(intervention.id)}
                                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600"
                              >
                                Concluir
                              </Button>
                          )}

                          {isCompleted && (
                              <div className="text-center">
                                <div className="text-green-500 font-semibold text-sm">
                                  Concluído!
                                </div>
                                <div className="text-xs text-gray-500">
                                  +{intervention.xp} XP
                                </div>
                              </div>
                          )}

                          {!isCompleted && (
                              <div className="text-xs text-gray-500 text-center">
                                +{intervention.xp} XP
                              </div>
                          )}
                        </div>
                      </div>

                      {isActive && (
                          <div className="mt-3">
                            <p className="text-sm text-gray-600 mb-2">
                              {intervention.description}
                            </p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                  className="gradient-dopamind h-2 rounded-full transition-all duration-1000"
                                  style={{
                                    width: `${((intervention.duration - timer) / intervention.duration) * 100}%`
                                  }}
                              />
                            </div>
                          </div>
                      )}
                    </CardContent>
                  </Card>
              );
            })}
          </div>

          {/* Motivational Quote */}
          <Card className="dopamind-card shadow-lg mb-6">
            <CardContent className="p-4 text-center">
              <div className="text-2xl mb-2">💚</div>
              <p className="text-sm font-medium text-gray-700">
                "Seu cérebro agradece cada momento de pausa consciente!"
              </p>
            </CardContent>
          </Card>

          {/* Continue Button */}
          <Button
              onClick={handleNext}
              className="w-full gradient-dopamind text-white font-semibold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Ver meu progresso neural
          </Button>
        </div>
      </div>
  );
};

export default InterventionsScreen;