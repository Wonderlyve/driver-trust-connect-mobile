
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/auth/login-form';
import SignupForm from '@/components/auth/signup-form';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<string>('login');
  
  return (
    <div className="auth-container">
      <div className="flex flex-col items-center mb-8 text-white">
        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-4 p-2">
          <img src="/lovable-uploads/caesse-logo-square.png" alt="Caesse" className="w-full h-full object-contain" />
        </div>
        <h1 className="text-2xl font-bold">Caesse</h1>
        <p className="text-white/80 mt-1">Connexion chauffeur</p>
      </div>
      
      <div className="auth-card">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Connexion</TabsTrigger>
            <TabsTrigger value="register">Inscription</TabsTrigger>
          </TabsList>
          <div className="mt-6">
            <TabsContent value="login">
              <LoginForm />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Pas encore inscrit?{' '}
                  <Button 
                    variant="link" 
                    onClick={() => setActiveTab('register')}
                    className="text-dtc-sky p-0 hover:text-dtc-blue"
                  >
                    Créer un compte
                  </Button>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="register">
              <SignupForm />
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Déjà inscrit?{' '}
                  <Button 
                    variant="link" 
                    onClick={() => setActiveTab('login')}
                    className="text-dtc-sky p-0 hover:text-dtc-blue"
                  >
                    Se connecter
                  </Button>
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      <div className="mt-8 text-center text-white/70 text-sm">
        <p>© 2025 Caesse. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default AuthPage;
