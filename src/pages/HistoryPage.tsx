
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gift, CreditCard, Coins } from 'lucide-react';

const HistoryPage = () => {
  const paymentHistory = [
    {
      id: 1,
      type: 'Cotisation',
      date: '15 Mai 2025',
      amount: '3,500 CDF',
      status: 'Succès',
      icon: <CreditCard className="h-5 w-5 text-dtc-blue" />
    },
    {
      id: 2,
      type: 'Cotisation',
      date: '14 Mai 2025',
      amount: '3,500 CDF',
      status: 'Succès',
      icon: <CreditCard className="h-5 w-5 text-dtc-blue" />
    },
    {
      id: 3,
      type: 'Cotisation',
      date: '13 Mai 2025',
      amount: '3,500 CDF',
      status: 'Succès',
      icon: <CreditCard className="h-5 w-5 text-dtc-blue" />
    },
  ];
  
  const rewardsHistory = [
    {
      id: 1,
      type: "Café Congo Premium",
      date: '10 Mai 2025',
      points: '250 points',
      status: 'Échangé',
      icon: <Gift className="h-5 w-5 text-dtc-orange" />
    },
    {
      id: 2,
      type: "Bon d'achat Shoprite",
      date: '05 Mai 2025',
      points: '500 points',
      status: 'Échangé',
      icon: <Gift className="h-5 w-5 text-dtc-orange" />
    },
  ];
  
  const creditsHistory = [
    {
      id: 1,
      type: "Crédit Batanga",
      date: '01 Mai 2025',
      amount: '50,000 CDF',
      status: 'En cours',
      icon: <Coins className="h-5 w-5 text-dtc-green" />
    },
    {
      id: 2,
      type: "Remboursement",
      date: '15 Avr 2025',
      amount: '10,000 CDF',
      status: 'Terminé',
      icon: <Coins className="h-5 w-5 text-dtc-green" />
    },
  ];
  
  return (
    <DashboardLayout title="Historique">
      <div className="space-y-6">
        <Tabs defaultValue="paiements" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="paiements">Paiements</TabsTrigger>
            <TabsTrigger value="recompenses">Récompenses</TabsTrigger>
            <TabsTrigger value="credits">Crédits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="paiements">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Historique des paiements</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {paymentHistory.length === 0 ? (
                  <div className="text-center p-6 text-gray-500">
                    Aucun historique de paiement
                  </div>
                ) : (
                  <div className="divide-y">
                    {paymentHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-medium">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.amount}</p>
                          <p className="text-xs text-green-500">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recompenses">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Historique des récompenses</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {rewardsHistory.length === 0 ? (
                  <div className="text-center p-6 text-gray-500">
                    Aucun historique de récompenses
                  </div>
                ) : (
                  <div className="divide-y">
                    {rewardsHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-medium">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.points}</p>
                          <p className="text-xs text-green-500">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="credits">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">Historique des crédits</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {creditsHistory.length === 0 ? (
                  <div className="text-center p-6 text-gray-500">
                    Aucun historique de crédits
                  </div>
                ) : (
                  <div className="divide-y">
                    {creditsHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <p className="font-medium">{item.type}</p>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.amount}</p>
                          <p className="text-xs text-blue-500">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HistoryPage;
