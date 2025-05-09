
import { useState } from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { Settings, CreditCard, Calendar, Badge, User } from 'lucide-react';

const AdminSettings = () => {
  const { toast } = useToast();
  
  // System settings
  const [pointsConversionRate, setPointsConversionRate] = useState(10);
  const [standardContributionAmount, setStandardContributionAmount] = useState(500);
  const [premiumContributionAmount, setPremiumContributionAmount] = useState(1000);
  const [premiumPlusContributionAmount, setPremiumPlusContributionAmount] = useState(2000);
  const [lotteryPrizeAmount, setLotteryPrizeAmount] = useState(50000);
  const [creditLimit, setCreditLimit] = useState(25000);
  
  // Feature toggles
  const [lotteryEnabled, setLotteryEnabled] = useState(true);
  const [creditEnabled, setCreditEnabled] = useState(true);
  const [autoRenewalEnabled, setAutoRenewalEnabled] = useState(true);
  
  const handleSaveSettings = () => {
    toast({
      title: "Paramètres enregistrés",
      description: "Les modifications ont été appliquées avec succès",
    });
  };

  return (
    <MobileLayout title="Paramètres système" showBackButton>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Settings className="h-5 w-5 text-dtc-blue" />
              Paramètres généraux
            </CardTitle>
            <CardDescription>
              Configuration du système et des valeurs par défaut
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Taux de conversion des points</Label>
                <span className="text-sm font-medium">{pointsConversionRate} CDF = 1 point</span>
              </div>
              <Slider
                min={1}
                max={50}
                step={1}
                value={[pointsConversionRate]}
                onValueChange={(value) => setPointsConversionRate(value[0])}
              />
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <Label className="text-base">Montants des cotisations</Label>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="standard-amount" className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-dtc-gray rounded-full"></div>
                    Standard
                  </Label>
                  <div className="flex items-center">
                    <Input 
                      id="standard-amount" 
                      type="number" 
                      className="w-24 text-right" 
                      value={standardContributionAmount}
                      onChange={(e) => setStandardContributionAmount(Number(e.target.value))}
                    />
                    <span className="ml-2 text-sm">CDF</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="premium-amount" className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-dtc-blue rounded-full"></div>
                    Premium
                  </Label>
                  <div className="flex items-center">
                    <Input 
                      id="premium-amount" 
                      type="number" 
                      className="w-24 text-right" 
                      value={premiumContributionAmount}
                      onChange={(e) => setPremiumContributionAmount(Number(e.target.value))}
                    />
                    <span className="ml-2 text-sm">CDF</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Label htmlFor="premium-plus-amount" className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-dtc-orange rounded-full"></div>
                    Premium+
                  </Label>
                  <div className="flex items-center">
                    <Input 
                      id="premium-plus-amount" 
                      type="number" 
                      className="w-24 text-right" 
                      value={premiumPlusContributionAmount}
                      onChange={(e) => setPremiumPlusContributionAmount(Number(e.target.value))}
                    />
                    <span className="ml-2 text-sm">CDF</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="lottery-amount">Montant de la loterie</Label>
                  <p className="text-xs text-gray-500">Prix principal du tirage</p>
                </div>
                <div className="flex items-center">
                  <Input 
                    id="lottery-amount" 
                    type="number" 
                    className="w-24 text-right" 
                    value={lotteryPrizeAmount}
                    onChange={(e) => setLotteryPrizeAmount(Number(e.target.value))}
                  />
                  <span className="ml-2 text-sm">CDF</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="credit-limit">Limite de crédit</Label>
                  <p className="text-xs text-gray-500">Montant maximum empruntable</p>
                </div>
                <div className="flex items-center">
                  <Input 
                    id="credit-limit" 
                    type="number" 
                    className="w-24 text-right" 
                    value={creditLimit}
                    onChange={(e) => setCreditLimit(Number(e.target.value))}
                  />
                  <span className="ml-2 text-sm">CDF</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activation des fonctionnalités</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Loterie quotidienne</Label>
                <p className="text-xs text-gray-500">Tirages automatiques</p>
              </div>
              <Switch 
                checked={lotteryEnabled}
                onCheckedChange={setLotteryEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Service de crédit</Label>
                <p className="text-xs text-gray-500">Demandes de prêt</p>
              </div>
              <Switch 
                checked={creditEnabled}
                onCheckedChange={setCreditEnabled}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Renouvellement automatique</Label>
                <p className="text-xs text-gray-500">Pour les abonnements</p>
              </div>
              <Switch 
                checked={autoRenewalEnabled}
                onCheckedChange={setAutoRenewalEnabled}
              />
            </div>
          </CardContent>
        </Card>
        
        <Button 
          onClick={handleSaveSettings} 
          className="w-full bg-dtc-blue"
        >
          Enregistrer les paramètres
        </Button>
      </div>
    </MobileLayout>
  );
};

export default AdminSettings;
