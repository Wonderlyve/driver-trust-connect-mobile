
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import CountdownTimer from '@/components/lottery/countdown-timer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Gift, Trophy } from 'lucide-react';

const LotteryPage = () => {
  const [activeTab, setActiveTab] = useState('daily');
  
  // Calculate next draw time (example: next hour)
  const getNextDrawTime = () => {
    const now = new Date();
    const nextDraw = new Date();
    nextDraw.setHours(now.getHours() + 1);
    nextDraw.setMinutes(0);
    nextDraw.setSeconds(0);
    return nextDraw;
  };
  
  const handleCountdownComplete = () => {
    // Handle countdown completion, e.g., refresh draw information
    console.log("Countdown completed!");
  };
  
  return (
    <DashboardLayout title="Loterie">
      <div className="space-y-6">
        {/* Current Draw Card */}
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6 pb-6">
            <div className="text-center text-white">
              <Trophy className="h-10 w-10 mx-auto mb-2" />
              <h2 className="text-lg font-bold">Tirage journalier #245</h2>
              <p className="text-sm text-white/80 mb-4">Prochain tirage dans:</p>
              
              <CountdownTimer 
                targetDate={getNextDrawTime()} 
                onComplete={handleCountdownComplete}
              />
              
              <div className="mt-4 bg-white/10 rounded-lg p-2">
                <p className="text-sm">Prix à gagner</p>
                <p className="text-xl font-bold">35,000 CDF</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="daily" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="daily">Tirages Journaliers</TabsTrigger>
            <TabsTrigger value="monthly">Tirages Mensuels</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Résultats récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-dtc-light rounded-lg">
                        <Calendar className="h-5 w-5 text-dtc-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Tirage #244</p>
                        <p className="text-xs text-gray-500">14 Mai 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">25,000 CDF</p>
                      <p className="text-xs text-gray-500">Gagnant: KB-564</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-dtc-light rounded-lg">
                        <Calendar className="h-5 w-5 text-dtc-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Tirage #243</p>
                        <p className="text-xs text-gray-500">13 Mai 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">15,000 CDF</p>
                      <p className="text-xs text-gray-500">Gagnant: KN-129</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-dtc-light rounded-lg">
                        <Calendar className="h-5 w-5 text-dtc-blue" />
                      </div>
                      <div>
                        <p className="font-medium">Tirage #242</p>
                        <p className="text-xs text-gray-500">12 Mai 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">20,000 CDF</p>
                      <p className="text-xs text-gray-500">Gagnant: MB-731</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  Voir tous les résultats
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Grand tirage du mois</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="bg-dtc-orange/10 p-4 rounded-xl mb-4">
                    <Trophy className="h-12 w-12 text-dtc-orange mx-auto mb-2" />
                    <h3 className="text-xl font-bold">500,000 CDF</h3>
                    <p className="text-sm text-gray-600">+ Kit solaire complet</p>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-2">Tirage le 31 Mai 2025</p>
                  
                  <CountdownTimer 
                    targetDate={new Date(2025, 4, 31)} 
                    onComplete={() => console.log("Monthly draw!")}
                  />
                </div>
                
                <Card className="bg-gray-50 border-dashed">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="h-5 w-5 text-dtc-blue" />
                      <h4 className="font-medium">Votre participation</h4>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Billets acquis:</span>
                      <span className="font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Chances de gagner:</span>
                      <span className="font-medium text-green-600">1.5%</span>
                    </div>
                  </CardContent>
                </Card>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  Chaque cotisation journalière vous donne un billet pour le tirage mensuel.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default LotteryPage;
