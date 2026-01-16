import { useState, useEffect } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, User, Plus, Filter, Loader2, RefreshCw, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Member {
  id: string;
  nom: string;
  post_nom: string;
  prenom: string;
  date_naissance: string;
  metier: string;
  avenue: string;
  numero: string;
  commune: string;
  etat_civil: string;
  nombre_enfants: number;
  abonnement: string;
  nfc_link: string | null;
  points: number;
  created_at: string;
}

const AdminMembers = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCommune, setFilterCommune] = useState<string>('all');
  const [filterAbonnement, setFilterAbonnement] = useState<string>('all');
  const [filterEtatCivil, setFilterEtatCivil] = useState<string>('all');

  const communes = [
    "Bandalungwa", "Barumbu", "Bumbu", "Gombe", "Kalamu", 
    "Kasa-Vubu", "Kimbanseke", "Kinshasa", "Kintambo", "Kisenso",
    "Lemba", "Limete", "Lingwala", "Makala", "Maluku",
    "Masina", "Matete", "Mont-Ngafula", "Ndjili", "Ngaba",
    "Ngaliema", "Ngiri-Ngiri", "Nsele", "Selembao"
  ];

  const fetchMembers = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error: any) {
      console.error('Error fetching members:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les membres",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const filteredMembers = members.filter(member => {
    const matchesSearch = 
      member.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.post_nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.metier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.commune.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCommune = filterCommune === 'all' || member.commune === filterCommune;
    const matchesAbonnement = filterAbonnement === 'all' || member.abonnement === filterAbonnement;
    const matchesEtatCivil = filterEtatCivil === 'all' || member.etat_civil === filterEtatCivil;
    
    return matchesSearch && matchesCommune && matchesAbonnement && matchesEtatCivil;
  });

  const getSubscriptionBadge = (type: string) => {
    switch(type) {
      case 'basic':
        return <Badge variant="secondary">Basic</Badge>;
      case 'premium':
        return <Badge className="bg-blue-500">Premium</Badge>;
      case 'vip':
        return <Badge className="bg-amber-500">VIP</Badge>;
      default:
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const getEtatCivilLabel = (etat: string) => {
    switch(etat) {
      case 'celibataire': return 'Célibataire';
      case 'marie': return 'Marié(e)';
      case 'divorce': return 'Divorcé(e)';
      case 'veuf': return 'Veuf/Veuve';
      default: return etat;
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilterCommune('all');
    setFilterAbonnement('all');
    setFilterEtatCivil('all');
  };

  const hasActiveFilters = filterCommune !== 'all' || filterAbonnement !== 'all' || filterEtatCivil !== 'all' || searchTerm !== '';

  return (
    <MobileLayout title="Gestion des membres" showBackButton>
      <div className="space-y-4 p-4">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{members.length}</p>
              <p className="text-xs text-muted-foreground">Total membres</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <Filter className="h-5 w-5 mx-auto mb-1 text-primary" />
              <p className="text-2xl font-bold">{filteredMembers.length}</p>
              <p className="text-xs text-muted-foreground">Résultats filtrés</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par nom, métier, commune..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={fetchMembers}
            disabled={isLoading}
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
          <Button onClick={() => navigate('/register-member')}>
            <Plus className="h-4 w-4 mr-1" /> Nouveau
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader className="p-3 pb-2">
            <CardTitle className="text-sm flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtres
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-auto h-6 text-xs"
                  onClick={clearFilters}
                >
                  Effacer
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 pt-0 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <Select value={filterCommune} onValueChange={setFilterCommune}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Commune" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes communes</SelectItem>
                  {communes.map((commune) => (
                    <SelectItem key={commune} value={commune}>{commune}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={filterAbonnement} onValueChange={setFilterAbonnement}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="Abonnement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterEtatCivil} onValueChange={setFilterEtatCivil}>
                <SelectTrigger className="h-8 text-xs">
                  <SelectValue placeholder="État civil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous</SelectItem>
                  <SelectItem value="celibataire">Célibataire</SelectItem>
                  <SelectItem value="marie">Marié(e)</SelectItem>
                  <SelectItem value="divorce">Divorcé(e)</SelectItem>
                  <SelectItem value="veuf">Veuf/Veuve</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Members Table */}
        <Card>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredMembers.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Membre</TableHead>
                      <TableHead>Commune</TableHead>
                      <TableHead>Abonnement</TableHead>
                      <TableHead className="hidden sm:table-cell">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredMembers.map((member) => (
                      <TableRow 
                        key={member.id}
                        className="cursor-pointer hover:bg-muted/50"
                      >
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-sm truncate">
                                {member.prenom} {member.nom}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {member.metier}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{member.commune}</span>
                        </TableCell>
                        <TableCell>
                          {getSubscriptionBadge(member.abonnement)}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <span className="font-medium">{member.points}</span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>Aucun membre trouvé</p>
                {hasActiveFilters && (
                  <Button 
                    variant="link" 
                    className="mt-2" 
                    onClick={clearFilters}
                  >
                    Effacer les filtres
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default AdminMembers;