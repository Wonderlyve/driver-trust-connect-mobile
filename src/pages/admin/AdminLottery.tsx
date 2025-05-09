
import { useState } from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Users, Award, Settings } from 'lucide-react';

const AdminLottery = () => {
  const { toast } = useToast();
  const [lotteryData, setLotteryData] = useState({
    prizeAmount: '25000',
    ticketPrice: '500',
    drawDate: '2025-05-15T18:00',
    maxParticipants: '1000',
    participationPoints: '100',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLotteryData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    toast({
      title: "Configuration enregistrée",
      description: "Les paramètres de loterie ont été mis à jour avec succès."
    });
  };
  
  const handleDraw = () => {
    toast({
      title: "Tirage effectué",
      description: "Le gagnant a été sélectionné: Amadou Koné (#15492)"
    });
  };
  
  const participants = [
    { id: 15492, name: "Amadou Koné", tickets: 5, phone: "+243 99 123 4567" },
    { id: 12385, name: "Marie Ondo", tickets: 3, phone: "+243 81 234 5678" },
    { id: 18762, name: "Pascal Mwamba", tickets: 7, phone: "+243 97 345 6789" },
    { id: 11902, name: "Sarah Diop", tickets: 2, phone: "+243 82 456 7890" },
    { id: 14571, name: "Daniel Lukusa", tickets: 4, phone: "+243 98 567 8901" }
  ];
  
  const pastWinners = [
    { id: 12385, name: "Marie Ondo", date: "15/04/2025", prize: "15000 CDF" },
    { id: 11902, name: "Sarah Diop", date: "01/04/2025", prize: "15000 CDF" },
    { id: 13654, name: "Jean Kizenga", date: "15/03/2025", prize: "15000 CDF" }
  ];
  
  return (
    <MobileLayout title="Gestion de la loterie">
      <div className="space-y-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Administration de la loterie</h2>
          <p className="text-sm opacity-90">Configuration et gestion des tirages</p>
        </div>
        
        <Tabs defaultValue="config">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="config">Configuration</TabsTrigger>
            <TabsTrigger value="participants">Participants</TabsTrigger>
            <TabsTrigger value="winners">Gagnants</TabsTrigger>
          </TabsList>
          
          <TabsContent value="config" className="space-y-4">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-dtc-blue" />
                  <h3 className="font-medium">Paramètres de la loterie</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Montant du prix (CDF)</label>
                    <Input 
                      name="prizeAmount"
                      type="number"
                      value={lotteryData.prizeAmount}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Prix du ticket (CDF)</label>
                    <Input 
                      name="ticketPrice"
                      type="number"
                      value={lotteryData.ticketPrice}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Date et heure du tirage</label>
                    <Input 
                      name="drawDate"
                      type="datetime-local"
                      value={lotteryData.drawDate}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Nombre maximum de participants</label>
                    <Input 
                      name="maxParticipants"
                      type="number"
                      value={lotteryData.maxParticipants}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-sm text-gray-700">Points nécessaires pour participer</label>
                    <Input 
                      name="participationPoints"
                      type="number"
                      value={lotteryData.participationPoints}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleSave}
                  className="w-full bg-dtc-blue hover:bg-dtc-blue/90"
                >
                  Enregistrer les modifications
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-dtc-orange" />
                  <h3 className="font-medium">Actions du tirage</h3>
                </div>
                
                <div className="bg-dtc-light rounded-lg p-3 mb-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Prochain tirage:</span>
                    <span className="text-sm font-semibold">15/05/2025 à 18:00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Participants actuels:</span>
                    <span className="text-sm font-semibold">257/1000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Total billets vendus:</span>
                    <span className="text-sm font-semibold">342</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleDraw}
                  className="w-full bg-dtc-orange hover:bg-dtc-orange/90"
                >
                  Effectuer le tirage au sort
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="participants" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-dtc-blue" />
                    <h3 className="font-medium">Liste des participants</h3>
                  </div>
                  <span className="text-sm bg-dtc-light px-2 py-1 rounded-full">
                    Total: {participants.length}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {participants.map(participant => (
                    <div 
                      key={participant.id} 
                      className="border rounded-lg p-3 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-sm">{participant.name}</p>
                        <p className="text-xs text-gray-500">ID: #{participant.id} • {participant.phone}</p>
                      </div>
                      <div className="bg-dtc-light px-3 py-1 rounded-full text-sm">
                        {participant.tickets} billets
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="winners" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-5 w-5 text-dtc-orange" />
                  <h3 className="font-medium">Historique des gagnants</h3>
                </div>
                
                <div className="space-y-3">
                  {pastWinners.map((winner, index) => (
                    <div 
                      key={index} 
                      className="border rounded-lg p-3 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-medium text-sm">{winner.name}</p>
                        <p className="text-xs text-gray-500">ID: #{winner.id} • Tirage du {winner.date}</p>
                      </div>
                      <div className="bg-dtc-orange/10 text-dtc-orange px-3 py-1 rounded-full text-sm">
                        {winner.prize}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MobileLayout>
  );
};

export default AdminLottery;
