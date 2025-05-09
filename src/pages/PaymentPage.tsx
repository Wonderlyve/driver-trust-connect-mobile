
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { CreditCard, Calendar, ArrowUpRight, Check } from 'lucide-react';

const PaymentPage = () => {
  const [paymentTab, setPaymentTab] = useState('cotisation');
  const [progress, setProgress] = useState(65);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  
  const transactions = [
    { date: '15 Mai 2025', amount: '3,500 CDF', type: 'Cotisation', status: 'Succès' },
    { date: '14 Mai 2025', amount: '3,500 CDF', type: 'Cotisation', status: 'Succès' },
    { date: '13 Mai 2025', amount: '3,500 CDF', type: 'Cotisation', status: 'Succès' },
    { date: '12 Mai 2025', amount: '3,500 CDF', type: 'Cotisation', status: 'Succès' },
  ];
  
  return (
    <DashboardLayout title="Paiement">
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6">
            <div className="flex flex-col text-white">
              <p className="text-sm text-white/80">Solde actuel</p>
              <h2 className="text-3xl font-bold">25,000 CDF</h2>
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm">Cotisation mensuelle</p>
                  <p className="text-sm font-medium">65%</p>
                </div>
                <Progress value={progress} className="h-2 bg-white/30" />
                <p className="text-xs mt-2 text-white/80">
                  Prochain paiement: 3,500 CDF • 15 mai 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="cotisation" className="w-full" onValueChange={setPaymentTab}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="cotisation">Cotisation</TabsTrigger>
            <TabsTrigger value="historique">Historique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cotisation" className="mt-6 space-y-4">
            {/* Plan Selection */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Card className={`w-1/3 min-w-[100px] cursor-pointer ${selectedPlan === 'standard' ? 'ring-2 ring-dtc-gray' : ''}`} onClick={() => setSelectedPlan('standard')}>
                <CardContent className="p-3 text-center">
                  <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-dtc-gray flex items-center justify-center">
                    {selectedPlan === 'standard' && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <p className="font-medium text-xs">Standard</p>
                  <p className="text-[10px] text-gray-500">Base</p>
                </CardContent>
              </Card>
              
              <Card className={`w-1/3 min-w-[100px] cursor-pointer ${selectedPlan === 'premium' ? 'ring-2 ring-dtc-blue' : ''}`} onClick={() => setSelectedPlan('premium')}>
                <CardContent className="p-3 text-center">
                  <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-dtc-blue flex items-center justify-center">
                    {selectedPlan === 'premium' && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <p className="font-medium text-xs">Premium</p>
                  <p className="text-[10px] text-gray-500">Recommandé</p>
                </CardContent>
              </Card>
              
              <Card className={`w-1/3 min-w-[100px] cursor-pointer ${selectedPlan === 'premium-plus' ? 'ring-2 ring-dtc-orange' : ''}`} onClick={() => setSelectedPlan('premium-plus')}>
                <CardContent className="p-3 text-center">
                  <div className="w-5 h-5 mx-auto mb-1 rounded-full bg-dtc-orange flex items-center justify-center">
                    {selectedPlan === 'premium-plus' && <Check className="h-3 w-3 text-white" />}
                  </div>
                  <p className="font-medium text-xs">Premium+</p>
                  <p className="text-[10px] text-gray-500">Famille</p>
                </CardContent>
              </Card>
            </div>
          
            <div className="grid grid-cols-2 gap-3">
              <Card className={selectedPlan === 'standard' ? 'bg-gray-50' : selectedPlan === 'premium' ? 'bg-blue-50' : 'bg-orange-50'}>
                <CardHeader className="p-3">
                  <CardTitle className="text-xs">Cotisation Journalière</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-lg font-semibold">{
                    selectedPlan === 'standard' ? '2,500' : 
                    selectedPlan === 'premium' ? '3,500' : '5,000'
                  } CDF</p>
                  <Button 
                    className="w-full mt-3 text-xs" 
                    size="sm"
                    style={{
                      backgroundColor: selectedPlan === 'standard' ? '#9E9E9E' : 
                                      selectedPlan === 'premium' ? '#0F3460' : '#FF9800'
                    }}
                  >
                    Payer
                  </Button>
                </CardContent>
              </Card>
              
              <Card className={selectedPlan === 'standard' ? 'bg-gray-50' : selectedPlan === 'premium' ? 'bg-blue-50' : 'bg-orange-50'}>
                <CardHeader className="p-3">
                  <CardTitle className="text-xs">Cotisation Mensuelle</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <p className="text-lg font-semibold">{
                    selectedPlan === 'standard' ? '65,000' : 
                    selectedPlan === 'premium' ? '90,000' : '125,000'
                  } CDF</p>
                  <Button 
                    className="w-full mt-3 text-xs" 
                    size="sm"
                    style={{
                      backgroundColor: selectedPlan === 'standard' ? '#9E9E9E' : 
                                      selectedPlan === 'premium' ? '#0F3460' : '#FF9800'
                    }}
                  >
                    Payer
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Méthodes de paiement</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium">M-Pesa</p>
                      <p className="text-xs text-gray-500">**** 5678</p>
                    </div>
                  </div>
                  <div className="h-6 w-6 border rounded-full flex items-center justify-center">
                    <div className="h-3 w-3 bg-dtc-blue rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Airtel Money</p>
                      <p className="text-xs text-gray-500">**** 1234</p>
                    </div>
                  </div>
                  <div className="h-6 w-6 border rounded-full flex items-center justify-center">
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-2">
                  Ajouter une méthode de paiement
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historique" className="mt-6">
            <Card>
              <CardHeader className="p-4">
                <CardTitle className="text-base">Historique des paiements</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-dtc-blue" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.type}</p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{transaction.amount}</p>
                        <p className="text-xs text-green-500">{transaction.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default PaymentPage;
