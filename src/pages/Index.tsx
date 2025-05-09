
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  
  // Redirige vers la page d'authentification (simulation d'une page de démarrage)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dtc-blue to-dtc-sky p-4">
      <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-6 animate-bounce">
        <img src="/placeholder.svg" alt="Driver Trust Capital" className="w-16 h-16" />
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2">Driver Trust Connect</h1>
      <p className="text-white/80 text-center mb-8 max-w-xs">
        La plateforme dédiée aux chauffeurs de taxi et moto
      </p>
      
      <div className="w-full max-w-xs space-y-4">
        <Button 
          onClick={() => navigate('/auth')}
          className="w-full bg-white text-dtc-blue hover:bg-white/90"
          size="lg"
        >
          Commencer
        </Button>
      </div>
      
      <div className="mt-10 text-white/60 text-sm text-center">
        <p>© 2025 Driver Trust Capital</p>
        <p className="mt-1">Tous droits réservés</p>
      </div>
    </div>
  );
};

export default Index;
