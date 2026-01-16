
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Gift, Coffee, ShoppingBag, Receipt, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const RewardsPage = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentTab, setCurrentTab] = useState('products');
  
  const totalPoints = 1250;
  
  const products = [
    {
      id: 1,
      name: "Café Congo Premium",
      category: "Boissons",
      points: 250,
      image: "/placeholder.svg",
      available: true,
      description: "Café 100% congolais, savoureux et énergisant. Sachet de 250g."
    },
    {
      id: 2,
      name: "Eau minérale (6 bouteilles)",
      category: "Boissons",
      points: 150,
      image: "/placeholder.svg",
      available: true,
      description: "Pack de 6 bouteilles d'eau minérale de 500ml."
    },
    {
      id: 3,
      name: "Thé local aromatisé",
      category: "Boissons",
      points: 200,
      image: "/placeholder.svg",
      available: true,
      description: "Thé local aromatisé aux plantes médicinales. Boîte de 20 sachets."
    },
    {
      id: 4,
      name: "Biscuits Congolais",
      category: "Snacks",
      points: 180,
      image: "/placeholder.svg",
      available: true,
      description: "Biscuits traditionnels congolais. Paquet de 12 unités."
    }
  ];
  
  const vouchers = [
    {
      id: 1,
      name: "Bon d'achat Shoprite",
      value: "5,000 CDF",
      points: 500,
      image: "/placeholder.svg",
      expiry: "31 Déc 2025",
      description: "Utilisable dans tous les magasins Shoprite de Kinshasa."
    },
    {
      id: 2,
      name: "Bon carburant Total",
      value: "10,000 CDF",
      points: 800,
      image: "/placeholder.svg",
      expiry: "31 Déc 2025",
      description: "Utilisable dans toutes les stations Total du pays."
    },
    {
      id: 3,
      name: "Réduction Airtel",
      value: "20%",
      points: 300,
      image: "/placeholder.svg",
      expiry: "31 Oct 2025",
      description: "20% de réduction sur les forfaits data Airtel."
    }
  ];
  
  const exchangeHistory = [
    {
      id: 1,
      name: "Café Congo Premium",
      date: "10 Mai 2025",
      points: 250,
      status: "Échangé"
    },
    {
      id: 2,
      name: "Bon d'achat Shoprite",
      date: "05 Mai 2025",
      points: 500,
      status: "Échangé"
    }
  ];
  
  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
  };
  
  const handleExchange = () => {
    if (selectedProduct) {
      toast({
        title: "Échange réussi!",
        description: `Vous avez échangé ${selectedProduct.points} points contre ${selectedProduct.name}.`,
      });
      setSelectedProduct(null);
    }
  };
  
  return (
    <DashboardLayout title="Récompenses">
      <div className="space-y-6">
        {/* Points Card */}
        <Card className="bg-gradient-to-r from-dtc-blue to-dtc-sky border-none">
          <CardContent className="pt-6 pb-6">
            <div className="flex items-center justify-between text-white">
              <div>
                <div className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  <p className="text-sm">Vos points Caresse</p>
                </div>
                <h2 className="text-3xl font-bold mt-1">{totalPoints}</h2>
              </div>
              <Button className="bg-white text-dtc-blue hover:bg-white/90">
                Échanger
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="products" className="w-full" onValueChange={setCurrentTab}>
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="products">Produits</TabsTrigger>
            <TabsTrigger value="vouchers">Bons d'achat</TabsTrigger>
            <TabsTrigger value="history">Historique</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="mt-6">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {products.map(product => (
                <Card key={product.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-24">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-3 flex flex-col flex-grow">
                    <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                    <div className="flex items-center mt-auto pt-2 justify-between">
                      <div className="flex items-center gap-1 bg-dtc-blue/10 text-dtc-blue px-2 py-1 rounded-full text-xs">
                        <Gift className="h-3 w-3" />
                        <span>{product.points}</span>
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" className="h-7 text-xs px-2" onClick={() => handleProductSelect(product)}>
                            Échanger
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{selectedProduct?.name}</DialogTitle>
                            <DialogDescription>{selectedProduct?.description}</DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="flex justify-center mb-4">
                              <img 
                                src={selectedProduct?.image}
                                alt={selectedProduct?.name}
                                className="w-32 h-32 object-cover rounded-md"
                              />
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <Gift className="h-5 w-5 text-dtc-blue" />
                                <span className="text-lg font-bold">{selectedProduct?.points} points</span>
                              </div>
                              <div className="text-sm text-green-500 flex items-center gap-1">
                                <Check className="h-4 w-4" />
                                <span>Disponible</span>
                              </div>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedProduct(null)}
                              className="w-full sm:w-auto"
                            >
                              Annuler
                            </Button>
                            <Button 
                              onClick={handleExchange}
                              className="w-full sm:w-auto"
                              disabled={selectedProduct?.points > totalPoints}
                            >
                              Confirmer l'échange
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="vouchers" className="mt-6">
            <div className="space-y-4">
              {vouchers.map(voucher => (
                <Card key={voucher.id}>
                  <div className="flex">
                    <div className="w-1/3">
                      <img 
                        src={voucher.image}
                        alt={voucher.name}
                        className="h-full w-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="w-2/3 p-4">
                      <h3 className="font-medium">{voucher.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <p className="text-lg font-bold text-dtc-blue">{voucher.value}</p>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          Expire: {voucher.expiry}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{voucher.description}</p>
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center gap-1 bg-dtc-blue/10 text-dtc-blue px-2 py-1 rounded-full text-xs">
                          <Gift className="h-3 w-3" />
                          <span>{voucher.points} points</span>
                        </div>
                        <Button size="sm">Échanger</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Historique des échanges</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {exchangeHistory.length > 0 ? (
                  <div className="divide-y">
                    {exchangeHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <Gift className="h-5 w-5 text-dtc-orange" />
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-gray-500">{item.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.points} points</p>
                          <p className="text-xs text-green-500">{item.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Receipt className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">Aucun historique d'échange</p>
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

export default RewardsPage;
