
import React from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/components/ui/use-toast';
import { CalendarIcon, UserPlus } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const RegisterMemberPage = () => {
  const { toast } = useToast();
  const [dateNaissance, setDateNaissance] = React.useState<Date>();
  const [formData, setFormData] = React.useState({
    nom: '',
    postNom: '',
    prenom: '',
    metier: '',
    avenue: '',
    numero: '',
    commune: '',
    etatCivil: '',
    nombreEnfants: '',
    abonnement: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom || !formData.prenom || !dateNaissance || !formData.abonnement) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Inscription réussie",
      description: `${formData.prenom} ${formData.nom} a été enregistré avec succès.`
    });

    // Reset form
    setFormData({
      nom: '',
      postNom: '',
      prenom: '',
      metier: '',
      avenue: '',
      numero: '',
      commune: '',
      etatCivil: '',
      nombreEnfants: '',
      abonnement: ''
    });
    setDateNaissance(undefined);
  };

  return (
    <MobileLayout title="Inscription Membre">
      <div className="p-4 pb-20">
        <Card>
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-dtc-blue/10 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-dtc-blue" />
              </div>
              <div>
                <CardTitle>Nouveau Membre</CardTitle>
                <CardDescription>Remplissez les informations du membre</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Identité */}
              <div className="space-y-3">
                <h3 className="font-medium text-sm text-muted-foreground">Identité</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input 
                    id="nom" 
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Entrez le nom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="postNom">Post-nom</Label>
                  <Input 
                    id="postNom" 
                    name="postNom"
                    value={formData.postNom}
                    onChange={handleInputChange}
                    placeholder="Entrez le post-nom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input 
                    id="prenom" 
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    placeholder="Entrez le prénom"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Date de naissance *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dateNaissance && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateNaissance ? format(dateNaissance, "PPP", { locale: fr }) : "Sélectionner une date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateNaissance}
                        onSelect={setDateNaissance}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={1940}
                        toYear={2010}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Profession */}
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-medium text-sm text-muted-foreground">Profession</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="metier">Métier</Label>
                  <Input 
                    id="metier" 
                    name="metier"
                    value={formData.metier}
                    onChange={handleInputChange}
                    placeholder="Ex: Chauffeur taxi, Conducteur bus..."
                  />
                </div>
              </div>

              {/* Adresse */}
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-medium text-sm text-muted-foreground">Adresse complète</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="avenue">Avenue</Label>
                    <Input 
                      id="avenue" 
                      name="avenue"
                      value={formData.avenue}
                      onChange={handleInputChange}
                      placeholder="Nom de l'avenue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numero">Numéro</Label>
                    <Input 
                      id="numero" 
                      name="numero"
                      value={formData.numero}
                      onChange={handleInputChange}
                      placeholder="N°"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commune">Commune</Label>
                  <Select onValueChange={(value) => handleSelectChange('commune', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner une commune" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bandalungwa">Bandalungwa</SelectItem>
                      <SelectItem value="barumbu">Barumbu</SelectItem>
                      <SelectItem value="bumbu">Bumbu</SelectItem>
                      <SelectItem value="gombe">Gombe</SelectItem>
                      <SelectItem value="kalamu">Kalamu</SelectItem>
                      <SelectItem value="kasa-vubu">Kasa-Vubu</SelectItem>
                      <SelectItem value="kimbanseke">Kimbanseke</SelectItem>
                      <SelectItem value="kinshasa">Kinshasa</SelectItem>
                      <SelectItem value="kintambo">Kintambo</SelectItem>
                      <SelectItem value="kisenso">Kisenso</SelectItem>
                      <SelectItem value="lemba">Lemba</SelectItem>
                      <SelectItem value="limete">Limete</SelectItem>
                      <SelectItem value="lingwala">Lingwala</SelectItem>
                      <SelectItem value="makala">Makala</SelectItem>
                      <SelectItem value="maluku">Maluku</SelectItem>
                      <SelectItem value="masina">Masina</SelectItem>
                      <SelectItem value="matete">Matete</SelectItem>
                      <SelectItem value="mont-ngafula">Mont-Ngafula</SelectItem>
                      <SelectItem value="ndjili">Ndjili</SelectItem>
                      <SelectItem value="ngaba">Ngaba</SelectItem>
                      <SelectItem value="ngaliema">Ngaliema</SelectItem>
                      <SelectItem value="ngiri-ngiri">Ngiri-Ngiri</SelectItem>
                      <SelectItem value="nsele">Nsele</SelectItem>
                      <SelectItem value="selembao">Selembao</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Situation familiale */}
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-medium text-sm text-muted-foreground">Situation familiale</h3>
                
                <div className="space-y-2">
                  <Label>État civil</Label>
                  <Select onValueChange={(value) => handleSelectChange('etatCivil', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner l'état civil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="celibataire">Célibataire</SelectItem>
                      <SelectItem value="marie">Marié(e)</SelectItem>
                      <SelectItem value="divorce">Divorcé(e)</SelectItem>
                      <SelectItem value="veuf">Veuf/Veuve</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nombreEnfants">Nombre d'enfants</Label>
                  <Input 
                    id="nombreEnfants" 
                    name="nombreEnfants"
                    type="number"
                    min="0"
                    value={formData.nombreEnfants}
                    onChange={handleInputChange}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Abonnement */}
              <div className="space-y-3 pt-4 border-t">
                <h3 className="font-medium text-sm text-muted-foreground">Abonnement</h3>
                
                <div className="space-y-2">
                  <Label>Type d'abonnement *</Label>
                  <Select onValueChange={(value) => handleSelectChange('abonnement', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un abonnement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard - 5,000 FC/mois</SelectItem>
                      <SelectItem value="premium">Premium - 10,000 FC/mois</SelectItem>
                      <SelectItem value="vip">VIP - 25,000 FC/mois</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button type="submit" className="w-full bg-dtc-blue hover:bg-dtc-blue/90 mt-6">
                <UserPlus className="mr-2 h-4 w-4" />
                Enregistrer le membre
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default RegisterMemberPage;
