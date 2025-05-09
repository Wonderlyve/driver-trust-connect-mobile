
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/ui/mobile-layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, User, Plus } from 'lucide-react';

// Sample member data
const memberData = [
  {
    id: 1,
    name: 'Amadou Koné',
    phone: '+225 07 01 23 45 67',
    subscription: 'premium',
    status: 'active',
    balance: 15000
  },
  {
    id: 2,
    name: 'Jean Kabuya',
    phone: '+243 99 123 4567',
    subscription: 'standard',
    status: 'active',
    balance: 5000
  },
  {
    id: 3,
    name: 'Marie Diop',
    phone: '+243 81 987 6543',
    subscription: 'premium-plus',
    status: 'inactive',
    balance: 0
  },
  {
    id: 4,
    name: 'Paul Mukendi',
    phone: '+243 85 456 7890',
    subscription: 'standard',
    status: 'active',
    balance: 7500
  },
  {
    id: 5,
    name: 'Fatima Mbayo',
    phone: '+243 82 111 2233',
    subscription: 'premium',
    status: 'active',
    balance: 12000
  }
];

const AdminMembers = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState(memberData);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // Form state for new member
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSubscription, setNewSubscription] = useState('standard');
  const [newVehicleType, setNewVehicleType] = useState('taxi');
  
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.phone.includes(searchTerm)
  );
  
  const handleAddMember = () => {
    if (!newName || !newPhone) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }
    
    // Generate a unique NFC link
    const nfcLink = `dtc://register/${Date.now().toString(36)}`;
    
    const newMember = {
      id: members.length + 1,
      name: newName,
      phone: newPhone,
      subscription: newSubscription,
      status: 'active',
      balance: 0,
      nfcLink
    };
    
    setMembers([...members, newMember]);
    setIsAddDialogOpen(false);
    
    toast({
      title: "Membre ajouté",
      description: `${newName} a été ajouté avec succès`,
    });
    
    // Reset form
    setNewName('');
    setNewPhone('');
    setNewEmail('');
    setNewSubscription('standard');
    setNewVehicleType('taxi');
  };
  
  const getSubscriptionBadge = (type: string) => {
    switch(type) {
      case 'standard':
        return <span className="px-2 py-1 bg-dtc-gray/20 text-dtc-gray rounded-full text-xs">Standard</span>;
      case 'premium':
        return <span className="px-2 py-1 bg-dtc-blue/20 text-dtc-blue rounded-full text-xs">Premium</span>;
      case 'premium-plus':
        return <span className="px-2 py-1 bg-dtc-orange/20 text-dtc-orange rounded-full text-xs">Premium+</span>;
      default:
        return null;
    }
  };
  
  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Actif</span>
      : <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Inactif</span>;
  };
  
  return (
    <MobileLayout title="Gestion des membres" showBackButton>
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Rechercher un membre..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-dtc-blue">
                <Plus className="h-4 w-4 mr-1" /> Ajouter
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter un nouveau membre</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input 
                    id="name" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    placeholder="Nom complet"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input 
                    id="phone" 
                    value={newPhone} 
                    onChange={(e) => setNewPhone(e.target.value)} 
                    placeholder="+243 XX XXX XXXX"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email (optionnel)</Label>
                  <Input 
                    id="email" 
                    value={newEmail} 
                    onChange={(e) => setNewEmail(e.target.value)} 
                    placeholder="email@exemple.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subscription">Type d'abonnement</Label>
                  <Select value={newSubscription} onValueChange={setNewSubscription}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un abonnement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="premium-plus">Premium+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Type de véhicule</Label>
                  <Select value={newVehicleType} onValueChange={setNewVehicleType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un véhicule" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="taxi">Taxi</SelectItem>
                      <SelectItem value="moto">Moto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleAddMember} 
                  className="w-full bg-dtc-blue mt-4"
                >
                  Ajouter le membre
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Abonnement</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <TableRow 
                    key={member.id}
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => navigate(`/admin/members/${member.id}`)}
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-dtc-light rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-dtc-gray" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{member.name}</p>
                          <p className="text-xs text-gray-500">{member.phone}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getSubscriptionBadge(member.subscription)}</TableCell>
                    <TableCell>{getStatusBadge(member.status)}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-6 text-gray-500">
                    Aucun membre trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </MobileLayout>
  );
};

export default AdminMembers;
