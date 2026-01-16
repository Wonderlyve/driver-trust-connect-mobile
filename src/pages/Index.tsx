
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dtc-blue to-dtc-sky p-4">
      <div className="relative w-32 h-32 bg-white rounded-xl flex items-center justify-center mb-6 animate-bounce shadow-lg p-2">
        <img src="/lovable-uploads/caesse-logo-square.png" alt="Caresse" className="w-full h-full object-contain" />
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2 text-center">Caresse</h1>
      <p className="text-white/90 text-center mb-10 max-w-xs">
        Cadre d'Accompagnement et d'Entraide pour la Sécurité Socio-Économique
      </p>
      
      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-xs w-full">
        <div className="flex flex-col gap-4 items-center">
          <Avatar className="h-20 w-20 border-4 border-white">
            <AvatarImage src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Driver Profile" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="text-center text-white">
            <h2 className="font-medium text-lg">Bienvenue</h2>
            <p className="text-sm text-white/80">Connectez-vous pour accéder à votre compte</p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-xs space-y-4">
        <Button 
          onClick={() => navigate('/auth')}
          className="w-full bg-white text-dtc-blue hover:bg-white/90 shadow-lg"
          size="lg"
        >
          <span>Connexion</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </Button>
      </div>
      
      <div className="mt-10 text-white/80 text-sm text-center">
        <p>© 2025 Caresse</p>
        <p className="mt-1">Tous droits réservés</p>
        <div className="flex justify-center mt-3 gap-3">
          <Button 
            variant="link" 
            className="text-white/80 hover:text-white p-0 h-auto text-xs"
            onClick={() => navigate('/about')}
          >
            À propos
          </Button>
          <Button 
            variant="link" 
            className="text-white/80 hover:text-white p-0 h-auto text-xs"
            onClick={() => navigate('/privacy')}
          >
            Politique de confidentialité
          </Button>
          <Button 
            variant="link" 
            className="text-white/80 hover:text-white p-0 h-auto text-xs"
            onClick={() => navigate('/contact')}
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
