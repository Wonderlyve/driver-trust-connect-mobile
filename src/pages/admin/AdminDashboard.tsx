
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  Users, 
  CreditCard, 
  Settings, 
  User, 
  Badge, 
  Calendar, 
  FileText
} from 'lucide-react';

const AdminDashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const moduleCards = [
    {
      title: "Gestion des membres",
      description: "Gérer les utilisateurs et leurs abonnements",
      icon: <Users className="h-5 w-5 text-dtc-blue" />,
      path: "/admin/members"
    },
    {
      title: "Édition Carte NFC",
      description: "Programmer et sécuriser les cartes NFC",
      icon: <Badge className="h-5 w-5 text-dtc-orange" />,
      path: "/admin/nfc"
    },
    {
      title: "Configurations",
      description: "Paramètres système et taux de conversion",
      icon: <Settings className="h-5 w-5 text-dtc-gray" />,
      path: "/admin/settings"
    },
    {
      title: "Gestion des paiements",
      description: "Suivi des cotisations et paiements",
      icon: <CreditCard className="h-5 w-5 text-dtc-blue" />,
      path: "/admin/payments"
    },
    {
      title: "Rapports",
      description: "Statistiques et analyse des données",
      icon: <FileText className="h-5 w-5 text-dtc-orange" />,
      path: "/admin/reports"
    },
    {
      title: "Loterie",
      description: "Configuration des tirages et prix",
      icon: <Calendar className="h-5 w-5 text-dtc-blue" />,
      path: "/admin/lottery"
    }
  ];

  return (
    <MobileLayout title="Administration DTC">
      <div className="space-y-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Tableau de bord administrateur</h2>
          <p className="text-sm opacity-90">Gestion du système Driver Trust Capital</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {moduleCards.map((card, index) => (
            <Card 
              key={index} 
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(card.path)}
            >
              <CardHeader className="p-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <div className="p-1.5 rounded-full bg-dtc-light">
                    {card.icon}
                  </div>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <CardDescription className="text-xs">{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold mb-3">Statistiques du jour</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dtc-light p-3 rounded-lg text-center">
              <p className="text-sm text-dtc-gray">Nouveaux membres</p>
              <p className="text-xl font-bold text-dtc-blue">12</p>
            </div>
            <div className="bg-dtc-light p-3 rounded-lg text-center">
              <p className="text-sm text-dtc-gray">Cotisations</p>
              <p className="text-xl font-bold text-dtc-blue">154</p>
            </div>
            <div className="bg-dtc-light p-3 rounded-lg text-center">
              <p className="text-sm text-dtc-gray">Crédits actifs</p>
              <p className="text-xl font-bold text-dtc-orange">38</p>
            </div>
            <div className="bg-dtc-light p-3 rounded-lg text-center">
              <p className="text-sm text-dtc-gray">Points échangés</p>
              <p className="text-xl font-bold text-dtc-orange">1,425</p>
            </div>
          </div>
        </div>
        
        <Button 
          variant="destructive" 
          className="w-full"
          onClick={() => {
            toast({
              title: "Déconnexion",
              description: "Vous êtes déconnecté du compte administrateur",
            });
            navigate('/auth');
          }}
        >
          Déconnexion Admin
        </Button>
      </div>
    </MobileLayout>
  );
};

export default AdminDashboard;
