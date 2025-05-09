
import { useState } from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Badge, ShieldCheck, AlertTriangle, RefreshCw } from 'lucide-react';

const AdminNFC = () => {
  const { toast } = useToast();
  const [isScanning, setIsScanning] = useState(false);
  const [cardDetected, setCardDetected] = useState(false);
  const [cardId, setCardId] = useState('');
  const [memberId, setMemberId] = useState('');
  const [memberName, setMemberName] = useState('');
  const [isWriting, setIsWriting] = useState(false);

  // Simulate NFC reading
  const startScan = () => {
    setIsScanning(true);
    setCardDetected(false);

    // Simulate a card detection after 2 seconds
    setTimeout(() => {
      setIsScanning(false);
      setCardDetected(true);
      setCardId('NFC-' + Math.random().toString(36).substring(2, 10).toUpperCase());
    }, 2000);
  };

  // Simulate NFC writing
  const writeCard = () => {
    if (!memberId || !memberName) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez fournir toutes les informations nécessaires",
        variant: "destructive"
      });
      return;
    }

    setIsWriting(true);

    // Simulate writing process
    setTimeout(() => {
      setIsWriting(false);
      
      toast({
        title: "Carte programmée avec succès",
        description: `La carte est maintenant liée à ${memberName}`,
      });
    }, 3000);
  };

  // Simulate card locking
  const lockCard = () => {
    toast({
      title: "Carte verrouillée",
      description: "La carte a été verrouillée avec succès et ne peut plus être modifiée",
    });
  };

  return (
    <MobileLayout title="Édition Carte NFC" showBackButton>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge className="h-5 w-5 text-dtc-blue" />
              Gestion des cartes NFC
            </CardTitle>
            <CardDescription>
              Programmez et sécurisez les cartes NFC pour les membres DTC
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="read">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="read">Lecture</TabsTrigger>
                <TabsTrigger value="write">Écriture</TabsTrigger>
              </TabsList>
              
              <TabsContent value="read" className="space-y-4">
                <div className="bg-dtc-light rounded-lg p-4 flex flex-col items-center justify-center min-h-[200px]">
                  {!isScanning && !cardDetected ? (
                    <>
                      <Badge className="h-12 w-12 text-dtc-blue mb-4" />
                      <p className="text-center text-sm mb-6">
                        Approchez une carte NFC pour la lire
                      </p>
                      <Button onClick={startScan} className="bg-dtc-blue">
                        Démarrer la lecture
                      </Button>
                    </>
                  ) : isScanning ? (
                    <>
                      <RefreshCw className="h-12 w-12 text-dtc-blue mb-4 animate-spin" />
                      <p className="text-center text-sm">
                        Recherche d'une carte NFC...
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center bg-green-100 h-16 w-16 rounded-full mb-4">
                        <ShieldCheck className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-medium mb-1">Carte détectée</h3>
                      <p className="text-sm text-gray-500 mb-4">ID: {cardId}</p>
                      
                      <div className="w-full bg-white p-3 rounded-lg border border-gray-200 mb-4">
                        <h4 className="text-sm font-medium">Informations</h4>
                        <p className="text-sm">Membre: Amadou Koné</p>
                        <p className="text-sm">ID: DTC-12345</p>
                        <p className="text-sm">Abonnement: Premium</p>
                      </div>
                      
                      <Button 
                        onClick={startScan} 
                        variant="outline" 
                        className="w-full"
                      >
                        Scanner une autre carte
                      </Button>
                    </>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="write" className="space-y-4">
                <div className="bg-dtc-light rounded-lg p-4">
                  <div className="mb-4">
                    <Label htmlFor="member-id">ID du membre</Label>
                    <Input 
                      id="member-id" 
                      placeholder="DTC-XXXXX" 
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="member-name">Nom du membre</Label>
                    <Input 
                      id="member-name" 
                      placeholder="Nom complet" 
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="flex gap-2 mt-6">
                    <Button 
                      className="flex-1 bg-dtc-blue"
                      onClick={writeCard}
                      disabled={isWriting}
                    >
                      {isWriting ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Écriture...
                        </>
                      ) : (
                        <>Écrire la carte</>
                      )}
                    </Button>
                    
                    <Button 
                      variant="destructive" 
                      className="flex-1"
                      onClick={lockCard}
                      disabled={isWriting}
                    >
                      Verrouiller
                    </Button>
                  </div>
                </div>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">Attention</p>
                      <p className="text-xs text-amber-700">
                        Le verrouillage de la carte est permanent. Une fois verrouillée, 
                        la carte ne pourra plus être modifiée ou reprogrammée.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Historique des cartes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Jean Kabuya', 'Marie Diop', 'Paul Mukendi'].map((name, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-2 rounded-lg border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-dtc-light rounded-full flex items-center justify-center">
                      <Badge className="h-4 w-4 text-dtc-blue" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{name}</p>
                      <p className="text-xs text-gray-500">
                        ID: NFC-{Math.random().toString(36).substring(2, 6).toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      {new Date().toLocaleDateString()}
                    </p>
                    <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">
                      Verrouillée
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Voir tous les historiques
            </Button>
          </CardFooter>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default AdminNFC;
