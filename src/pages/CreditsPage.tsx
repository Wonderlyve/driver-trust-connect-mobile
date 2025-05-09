
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Coins, Calculator, ArrowRight, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const CreditsPage = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanDuration, setLoanDuration] = useState(3);
  
  const eligibleAmount = 120000; // CDF
  const creditScore = 85; // out of 100
  
  const monthlyPayment = Math.round(loanAmount * (1 + 0.08 * loanDuration) / (loanDuration * 30));
  const totalPayment = monthlyPayment * loanDuration * 30;
  const interestAmount = totalPayment - loanAmount;
  
  const handleApplyLoan = () => {
    toast({
      title: "Demande de crédit envoyée",
      description: `Votre demande de ${loanAmount.toLocaleString()} CDF a été soumise avec succès.`,
    });
  };
  
  const activeLoans = [
    {
      id: 1,
      type: "Crédit Batanga",
      amount: "50,000 CDF",
      remaining: "40,000 CDF",
      progress: 20,
      nextPayment: "3,500 CDF • 01 Juin 2025"
    }
  ];
  
  return (
    <DashboardLayout title="Crédits">
      <div className="space-y-6">
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6">
            <div className="flex flex-col text-white">
              <div className="flex items-center gap-2 mb-1">
                <Coins className="h-5 w-5" />
                <p className="text-sm">Montant éligible</p>
              </div>
              <h2 className="text-3xl font-bold">{eligibleAmount.toLocaleString()} CDF</h2>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-300"></div>
                <p className="text-sm">Score de crédit: {creditScore}/100</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="demande" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="demande">Demande</TabsTrigger>
            <TabsTrigger value="actifs">Crédits actifs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demande" className="mt-6 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Simulateur de crédit</CardTitle>
                <CardDescription>Calculez votre crédit et les remboursements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Montant (CDF)</Label>
                    <span className="font-medium">{loanAmount.toLocaleString()} CDF</span>
                  </div>
                  <Slider 
                    defaultValue={[loanAmount]} 
                    max={eligibleAmount} 
                    step={5000} 
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="py-4"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Durée (mois)</Label>
                    <span className="font-medium">{loanDuration} mois</span>
                  </div>
                  <Slider 
                    defaultValue={[loanDuration]} 
                    min={1}
                    max={12} 
                    step={1} 
                    onValueChange={(value) => setLoanDuration(value[0])}
                    className="py-4"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4 border-t pt-4">
                <div className="w-full grid grid-cols-2 gap-2 text-center">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-xs text-gray-500">Paiement quotidien</p>
                    <p className="font-medium">{monthlyPayment.toLocaleString()} CDF</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <p className="text-xs text-gray-500">Montant total</p>
                    <p className="font-medium">{totalPayment.toLocaleString()} CDF</p>
                  </div>
                </div>
                
                <Button className="w-full" onClick={handleApplyLoan}>
                  Demander ce crédit
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Types de crédits disponibles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                      <Coins className="h-5 w-5 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Crédit Classique</p>
                      <p className="text-xs text-gray-500">Jusqu'à 100,000 CDF • 1-6 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Détails
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                      <Coins className="h-5 w-5 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Crédit Batanga</p>
                      <p className="text-xs text-gray-500">Jusqu'à 200,000 CDF • 3-12 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Détails
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-dtc-blue/10 rounded-full flex items-center justify-center">
                      <Coins className="h-5 w-5 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Microfinance</p>
                      <p className="text-xs text-gray-500">Jusqu'à 500,000 CDF • 6-24 mois</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Détails
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="actifs" className="mt-6 space-y-6">
            {activeLoans.length > 0 ? (
              activeLoans.map(loan => (
                <Card key={loan.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{loan.type}</CardTitle>
                    <CardDescription>État du remboursement</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Montant emprunté</p>
                        <p className="font-medium">{loan.amount}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Reste à payer</p>
                        <p className="font-medium">{loan.remaining}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm">Progression</p>
                        <p className="text-sm">{loan.progress}%</p>
                      </div>
                      <Progress value={loan.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-dtc-blue" />
                      <span>Prochain paiement: {loan.nextPayment}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Voir les détails
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Card>
                <CardContent className="py-8 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                    <Coins className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="font-medium text-lg">Aucun crédit actif</h3>
                  <p className="text-gray-500 mt-1">Vous n'avez pas de crédit en cours</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CreditsPage;
