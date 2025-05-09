
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Trophy, Gift, Clock, Check } from 'lucide-react';

const LotteryPage = () => {
  const [hoursRemaining, setHoursRemaining] = useState(4);
  const [minutesRemaining, setMinutesRemaining] = useState(37);
  
  // Simulated lottery data
  const dailyPrizes = [
    { position: 1, prize: "30,000 CDF", winner: "" },
    { position: 2, prize: "15,000 CDF", winner: "" },
    { position: 3, prize: "5,000 CDF", winner: "" },
  ];
  
  const weeklyPrizes = [
    { position: 1, prize: "100,000 CDF", winner: "Kabongo M." },
    { position: 2, prize: "50,000 CDF", winner: "Ngalula F." },
    { position: 3, prize: "25,000 CDF", winner: "Mutombo J." },
  ];
  
  const monthlyPrizes = [
    { position: 1, prize: "500,000 CDF", winner: "" },
    { position: 2, prize: "250,000 CDF", winner: "" },
    { position: 3, prize: "100,000 CDF", winner: "" },
  ];
  
  const myHistory = [
    { 
      date: "10 Mai 2025", 
      lottery: "Tirage Quotidien", 
      prize: "5,000 CDF",
      position: 3,
      status: "Gagné"
    },
    { 
      date: "05 Mai 2025", 
      lottery: "Tirage Hebdomadaire", 
      prize: "-",
      position: 42,
      status: "Perdu"
    },
  ];
  
  return (
    <DashboardLayout title="Loterie">
      <div className="space-y-6">
        {/* Current Lottery Status */}
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6 pb-6">
            <div className="flex flex-col text-white items-center text-center">
              <h2 className="text-xl font-bold">Tirage Quotidien</h2>
              <div className="my-4 flex items-center gap-4">
                <div className="bg-white/20 rounded-lg p-3 w-16">
                  <span className="text-2xl font-bold">{String(Math.floor(hoursRemaining)).padStart(2, '0')}</span>
                  <p className="text-xs">Heures</p>
                </div>
                <span className="text-2xl">:</span>
                <div className="bg-white/20 rounded-lg p-3 w-16">
                  <span className="text-2xl font-bold">{String(Math.floor(minutesRemaining)).padStart(2, '0')}</span>
                  <p className="text-xs">Minutes</p>
                </div>
              </div>
              <p className="text-sm">Votre participation est confirmée</p>
              <div className="flex items-center gap-1 mt-1 bg-white/20 px-3 py-1 rounded-full text-xs">
                <Check className="h-3 w-3" />
                <span>Participation automatique via cotisation</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Prize Details */}
        <Tabs defaultValue="daily" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="daily">Quotidien</TabsTrigger>
            <TabsTrigger value="weekly">Hebdomadaire</TabsTrigger>
            <TabsTrigger value="monthly">Mensuel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tirage Quotidien</CardTitle>
                <CardDescription>Résultats à 20:00 chaque jour</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  {dailyPrizes.map((prize, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-dtc-orange" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{index + 1}ère position</p>
                          <p className="font-medium">{prize.prize}</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {prize.winner || "En attente du tirage"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="weekly" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tirage Hebdomadaire</CardTitle>
                <CardDescription>Résultats chaque dimanche</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  {weeklyPrizes.map((prize, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-dtc-orange" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{index + 1}ère position</p>
                          <p className="font-medium">{prize.prize}</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {prize.winner || "En attente du tirage"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tirage Mensuel</CardTitle>
                <CardDescription>Résultats le dernier jour du mois</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-4">
                  {monthlyPrizes.map((prize, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                        <Trophy className="h-5 w-5 text-dtc-orange" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{index + 1}ère position</p>
                          <p className="font-medium">{prize.prize}</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {prize.winner || "En attente du tirage"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* My Results */}
        <div>
          <h2 className="text-lg font-medium mb-4">Mes résultats</h2>
          
          <Card>
            <CardContent className="p-0">
              {myHistory.length > 0 ? (
                <div className="divide-y">
                  {myHistory.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-dtc-blue" />
                        </div>
                        <div>
                          <p className="font-medium">{item.lottery}</p>
                          <p className="text-xs text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.prize}</p>
                        <p className={`text-xs ${item.status === "Gagné" ? "text-green-500" : "text-gray-500"}`}>
                          {item.status} {item.position && `• Position ${item.position}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">Aucun résultat disponible</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LotteryPage;
