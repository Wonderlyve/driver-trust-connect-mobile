
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();
  
  // Optional: Auto-redirect after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dtc-blue to-dtc-sky p-4">
      <div className="relative w-24 h-24 bg-white rounded-xl flex items-center justify-center mb-6 animate-bounce">
        <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-dtc-blue flex items-center justify-center">
          <span className="text-white text-xs">DTC</span>
        </div>
        <img src="/lovable-uploads/f4f6ef29-c569-411a-945d-b4574e75748d.png" alt="Driver Trust Capital" className="w-16 h-16" />
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2">Driver Trust Connect</h1>
      <p className="text-white/80 text-center mb-8 max-w-xs">
        La plateforme dédiée aux chauffeurs de taxi et moto en République Démocratique du Congo
      </p>
      
      <div className="w-full max-w-xs space-y-4">
        <Button 
          onClick={() => navigate('/auth')}
          className="w-full bg-white text-dtc-blue hover:bg-white/90"
          size="lg"
        >
          <span>Connexion</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="m9 18 6-6-6-6"/>
          </svg>
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
