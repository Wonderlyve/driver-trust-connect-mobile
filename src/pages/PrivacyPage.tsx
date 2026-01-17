
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <MobileLayout title="Politique de confidentialité">
      <div className="space-y-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg flex items-center gap-3">
          <Shield className="h-8 w-8" />
          <div>
            <h2 className="text-xl font-bold">Protection des données</h2>
            <p className="text-sm opacity-90">Mise à jour: Mai 2025</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Introduction</h3>
            <p className="text-sm text-gray-600 mb-4">
              Caesse s'engage à protéger la confidentialité des données personnelles de ses utilisateurs. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Collecte des données</h3>
            <p className="text-sm text-gray-600 mb-2">
              Nous collectons les informations suivantes:
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mb-4 space-y-1">
              <li>Informations d'identification (nom, prénom, photo)</li>
              <li>Coordonnées (numéro de téléphone, adresse)</li>
              <li>Données professionnelles (type de véhicule, licence)</li>
              <li>Données financières (transactions, cotisations)</li>
              <li>Données d'utilisation de l'application</li>
            </ul>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Utilisation des données</h3>
            <p className="text-sm text-gray-600 mb-2">
              Vos données sont utilisées pour:
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mb-4 space-y-1">
              <li>Gérer votre compte et abonnement</li>
              <li>Traiter vos paiements et cotisations</li>
              <li>Vous fournir les services demandés</li>
              <li>Vous tenir informé des nouveautés et offres</li>
              <li>Améliorer nos services et l'expérience utilisateur</li>
            </ul>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Sécurité des données</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Vos droits</h3>
            <p className="text-sm text-gray-600 mb-2">
              Vous disposez des droits suivants:
            </p>
            <ul className="text-sm text-gray-600 list-disc pl-5 mb-4 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
            
            <Separator className="my-4" />
            
            <h3 className="font-medium mb-2">Contact</h3>
            <p className="text-sm text-gray-600">
              Pour toute question concernant cette politique ou pour exercer vos droits, veuillez nous contacter à <span className="text-dtc-blue">privacy@caesse.com</span> ou via notre page de contact.
            </p>
          </CardContent>
        </Card>

        <div className="text-center text-xs text-gray-500 pb-6">
          <p>© 2025 Caesse - Tous droits réservés</p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default PrivacyPage;
