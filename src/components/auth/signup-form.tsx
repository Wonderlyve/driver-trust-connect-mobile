
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

const SignupForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [city, setCity] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter les conditions d'utilisation",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulation d'un délai d'enregistrement
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé avec succès",
      });
      navigate('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="w-full">
      <Tabs defaultValue="phone" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="phone">Téléphone</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>
        
        <TabsContent value="phone">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name-phone">Nom complet</Label>
              <Input 
                id="name-phone" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Votre nom complet" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro de téléphone</Label>
              <Input 
                id="phone" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                type="tel" 
                placeholder="Numéro de téléphone" 
                required 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicle-phone">Type de véhicule</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger id="vehicle-phone">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taxi">Taxi</SelectItem>
                    <SelectItem value="moto">Moto</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city-phone">Ville</Label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger id="city-phone">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abidjan">Abidjan</SelectItem>
                    <SelectItem value="yamoussoukro">Yamoussoukro</SelectItem>
                    <SelectItem value="bouake">Bouaké</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-phone">Mot de passe</Label>
              <Input 
                id="password-phone" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password-phone">Confirmer le mot de passe</Label>
              <Input 
                id="confirm-password-phone" 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox 
                id="terms-phone" 
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked === true)}
              />
              <label
                htmlFor="terms-phone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                J'accepte les conditions d'utilisation
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-dtc-blue hover:bg-dtc-blue/90 text-white" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Inscription...
                </div>
              ) : "S'inscrire"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="email">
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name-email">Nom complet</Label>
              <Input 
                id="name-email" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Votre nom complet" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email" 
                placeholder="votre@email.com" 
                required 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicle-email">Type de véhicule</Label>
                <Select value={vehicleType} onValueChange={setVehicleType}>
                  <SelectTrigger id="vehicle-email">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="taxi">Taxi</SelectItem>
                    <SelectItem value="moto">Moto</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="city-email">Ville</Label>
                <Select value={city} onValueChange={setCity}>
                  <SelectTrigger id="city-email">
                    <SelectValue placeholder="Sélectionner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="abidjan">Abidjan</SelectItem>
                    <SelectItem value="yamoussoukro">Yamoussoukro</SelectItem>
                    <SelectItem value="bouake">Bouaké</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password-email">Mot de passe</Label>
              <Input 
                id="password-email" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password-email">Confirmer le mot de passe</Label>
              <Input 
                id="confirm-password-email" 
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
            </div>
            
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox 
                id="terms-email" 
                checked={agreeTerms}
                onCheckedChange={(checked) => setAgreeTerms(checked === true)}
              />
              <label
                htmlFor="terms-email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                J'accepte les conditions d'utilisation
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-dtc-blue hover:bg-dtc-blue/90 text-white" 
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Inscription...
                </div>
              ) : "S'inscrire"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SignupForm;
