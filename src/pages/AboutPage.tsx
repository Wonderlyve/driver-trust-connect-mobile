
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Info, Shield, User, Users } from 'lucide-react';

const AboutPage = () => {
  return (
    <MobileLayout title="À propos de nous">
      <div className="space-y-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Caresse</h2>
          <p className="text-sm opacity-90">Cadre d'Accompagnement et d'Entraide pour la Sécurité Socio-Économique</p>
        </div>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex gap-3 items-start">
              <div className="p-2 bg-dtc-light rounded-full">
                <Info className="h-6 w-6 text-dtc-blue" />
              </div>
              <div>
                <h3 className="font-medium">Notre mission</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Caresse a été fondé avec la mission d'offrir un accompagnement financier et social adapté aux chauffeurs de taxi et moto en République Démocratique du Congo, un secteur souvent négligé par les systèmes financiers traditionnels.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2 bg-dtc-light rounded-full">
                <Shield className="h-6 w-6 text-dtc-blue" />
              </div>
              <div>
                <h3 className="font-medium">Notre vision</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Nous aspirons à créer un écosystème financier inclusif où chaque chauffeur en RDC peut accéder à des services de microfinance, d'épargne, de crédit et d'assurance adaptés à leurs besoins spécifiques, contribuant ainsi à leur sécurité économique et au développement du pays.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="p-2 bg-dtc-light rounded-full">
                <Users className="h-6 w-6 text-dtc-blue" />
              </div>
              <div>
                <h3 className="font-medium">Notre équipe</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Caresse est composé d'experts en microfinance, de professionnels du transport et de spécialistes en technologie financière, tous dédiés à créer des solutions innovantes et accessibles pour les chauffeurs congolais.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
          <h3 className="font-medium">Nos services</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dtc-blue rounded-full"></div>
              <span>Cotisations journalières et mensuelles</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dtc-blue rounded-full"></div>
              <span>Micro-crédits pour les chauffeurs</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dtc-blue rounded-full"></div>
              <span>Programme de loterie et récompenses</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dtc-blue rounded-full"></div>
              <span>Services de santé et d'assistance</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-dtc-blue rounded-full"></div>
              <span>Formations financières et professionnelles</span>
            </li>
          </ul>
        </div>

        <div className="text-center text-sm text-gray-500 pb-6">
          <p>© 2025 Caresse</p>
          <p className="mt-1">Tous droits réservés</p>
        </div>
      </div>
    </MobileLayout>
  );
};

export default AboutPage;
