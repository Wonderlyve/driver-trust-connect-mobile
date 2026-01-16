
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const LoginForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Admin login check
    if (email === 'dtcmyadmin@dtc.com' && password === 'dtcadmin2025') {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Connexion administrateur réussie",
          description: "Bienvenue sur le panneau d'administration Caresse",
        });
        navigate('/admin/dashboard');
      }, 1500);
      return;
    }
    
    // Regular user login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur Caresse",
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
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password-phone">Mot de passe</Label>
                <a href="#" className="text-xs text-dtc-sky hover:text-dtc-blue">
                  Mot de passe oublié?
                </a>
              </div>
              <Input 
                id="password-phone" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
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
                  Connexion...
                </div>
              ) : "Se connecter"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="email">
          <form onSubmit={handleLogin} className="space-y-4">
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
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password-email">Mot de passe</Label>
                <a href="#" className="text-xs text-dtc-sky hover:text-dtc-blue">
                  Mot de passe oublié?
                </a>
              </div>
              <Input 
                id="password-email" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" 
                placeholder="********" 
                required 
              />
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
                  Connexion...
                </div>
              ) : "Se connecter"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginForm;
