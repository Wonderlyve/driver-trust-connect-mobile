
import { useState } from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, User } from 'lucide-react';

const ProfilePage = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Amadou Koné');
  const [phone, setPhone] = useState('+225 07 01 23 45 67');
  const [email, setEmail] = useState('amadou.kone@email.com');
  const [city, setCity] = useState('abidjan');
  const [vehicleType, setVehicleType] = useState('taxi');
  const [vehicleNumber, setVehicleNumber] = useState('AB 1234 CD');
  const [subscriptionType, setSubscriptionType] = useState('premium');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: 'Profil mis à jour',
      description: 'Vos informations ont été enregistrées.',
    });
  };

  const getSubscriptionBgColor = () => {
    switch (subscriptionType) {
      case 'standard': return 'bg-dtc-light from-dtc-gray to-dtc-gray/80';
      case 'premium': return 'from-dtc-blue to-dtc-sky';
      case 'premium-plus': return 'from-dtc-orange to-dtc-orange/80';
      default: return 'from-dtc-blue to-dtc-sky';
    }
  };
  
  return (
    <MobileLayout title="Mon Profil" showBackButton>
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-dtc-blue rounded-full flex items-center justify-center text-white text-3xl mb-4">
            <User size={42} />
          </div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-dtc-gray">{vehicleType === 'taxi' ? 'Chauffeur de Taxi' : 'Conducteur Moto'}</p>
          <div className={`bg-dtc-sky/20 text-dtc-blue px-3 py-1 rounded-full text-sm mt-2 ${
            subscriptionType === 'standard' ? 'bg-dtc-gray/20 text-dtc-gray' :
            subscriptionType === 'premium-plus' ? 'bg-dtc-orange/20 text-dtc-orange' : ''
          }`}>
            {subscriptionType === 'standard' ? 'Standard' : 
             subscriptionType === 'premium' ? 'Premium' : 'Premium+'}
          </div>
        </div>
        
        <Tabs defaultValue="info" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="subscription">Abonnement</TabsTrigger>
          </TabsList>
          <TabsContent value="info">
            <div className="bg-white rounded-lg p-4 mt-4 space-y-4">
              {!isEditing ? (
                <>
                  <div>
                    <p className="text-sm text-dtc-gray">Nom complet</p>
                    <p className="font-medium">{name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dtc-gray">Téléphone</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dtc-gray">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dtc-gray">Ville</p>
                    <p className="font-medium">{city === 'abidjan' ? 'Abidjan' : city === 'yamoussoukro' ? 'Yamoussoukro' : 'Bouaké'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dtc-gray">Type de véhicule</p>
                    <p className="font-medium">{vehicleType === 'taxi' ? 'Taxi' : 'Moto'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-dtc-gray">Immatriculation</p>
                    <p className="font-medium">{vehicleNumber}</p>
                  </div>
                  <Button 
                    onClick={() => setIsEditing(true)}
                    className="w-full mt-4 bg-dtc-blue"
                  >
                    Modifier
                  </Button>
                </>
              ) : (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
                className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger id="city">
                        <SelectValue placeholder="Sélectionner une ville" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="abidjan">Abidjan</SelectItem>
                        <SelectItem value="yamoussoukro">Yamoussoukro</SelectItem>
                        <SelectItem value="bouake">Bouaké</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicleType">Type de véhicule</Label>
                    <Select value={vehicleType} onValueChange={setVehicleType}>
                      <SelectTrigger id="vehicleType">
                        <SelectValue placeholder="Sélectionner un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="taxi">Taxi</SelectItem>
                        <SelectItem value="moto">Moto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="vehicleNumber">Immatriculation</Label>
                    <Input id="vehicleNumber" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="w-1/2"
                    >
                      Annuler
                    </Button>
                    <Button 
                      type="submit"
                      className="w-1/2 bg-dtc-blue"
                    >
                      Enregistrer
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </TabsContent>
          <TabsContent value="subscription">
            <div className="bg-white rounded-lg p-4 mt-4 space-y-4">
              <div className={`bg-gradient-to-r ${getSubscriptionBgColor()} p-4 rounded-lg text-white`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium">Abonnement {
                    subscriptionType === 'standard' ? 'Standard' : 
                    subscriptionType === 'premium' ? 'Premium' : 'Premium+'
                  }</h3>
                </div>
                <p className="text-sm mb-4">
                  {subscriptionType === 'standard' ? 'Accès aux services de base' : 
                   subscriptionType === 'premium' ? 'Accès à tous les services de base et la couverture santé' : 
                   'Accès à tous les services premium et couverture santé pour la famille'}
                </p>
                <p className="text-sm text-white/80">Prochain paiement: 15 mai 2025</p>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-medium">Type d'abonnement</h4>
                    <p className="text-sm text-dtc-gray">Choisissez votre plan</p>
                  </div>
                  <Select value={subscriptionType} onValueChange={setSubscriptionType}>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="premium-plus">Premium+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Notifications</h4>
                      <p className="text-sm text-dtc-gray">Rappels de paiement</p>
                    </div>
                    <Switch 
                      checked={notificationsEnabled} 
                      onCheckedChange={setNotificationsEnabled} 
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">Renouvellement auto</h4>
                      <p className="text-sm text-dtc-gray">Paiement automatique</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 bg-dtc-orange hover:bg-dtc-orange/90"
              >
                Mettre à jour l'abonnement
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6">
          <Button 
            variant="link" 
            className="text-dtc-red w-full"
          >
            Supprimer mon compte
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProfilePage;
