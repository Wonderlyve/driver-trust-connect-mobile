
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/dashboard-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Phone, Mail, HelpCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SupportPage = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Comment fonctionne le programme de cotisations ?",
      answer: "Le programme de cotisations vous permet de contribuer quotidiennement ou mensuellement. Chaque contribution vous donne accès aux services de santé, à la loterie, et vous fait gagner des points Driver Market."
    },
    {
      question: "Comment obtenir un crédit ?",
      answer: "Pour obtenir un crédit, vous devez avoir un historique de cotisations régulières pendant au moins 3 mois. Rendez-vous dans la section Crédits pour simuler votre prêt et soumettre une demande."
    },
    {
      question: "Comment utiliser mes points Driver Market ?",
      answer: "Les points Driver Market peuvent être échangés contre divers produits dans les stands Driver Market ou directement via l'application. Visitez la section Récompenses pour voir les produits disponibles."
    },
    {
      question: "Puis-je ajouter des membres de ma famille à mon plan santé ?",
      answer: "Oui, le plan Premium vous permet d'ajouter jusqu'à 3 membres de votre famille, tandis que le plan Premium+ permet d'en ajouter jusqu'à 6. Visitez la section Santé pour gérer les membres de votre famille."
    },
    {
      question: "Comment participer à la loterie ?",
      answer: "La participation à la loterie est automatique dès que vous effectuez votre cotisation quotidienne. Les tirages ont lieu quotidiennement, hebdomadairement et mensuellement."
    }
  ];
  
  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "Message envoyé",
        description: "Notre équipe vous répondra dans les plus brefs délais.",
      });
      setMessage('');
    }
  };
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <DashboardLayout title="Assistance">
      <div className="space-y-6">
        {/* Contact Options */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-dtc-blue text-white">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Phone className="h-8 w-8 mb-2" />
              <h3 className="font-medium">Appelez-nous</h3>
              <p className="text-sm mt-1">Support téléphonique</p>
              <Button variant="outline" className="mt-3 w-full border-white text-white hover:bg-white hover:text-dtc-blue">
                +243 99 123 4567
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-dtc-sky text-white">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Mail className="h-8 w-8 mb-2" />
              <h3 className="font-medium">Email</h3>
              <p className="text-sm mt-1">Support par email</p>
              <Button variant="outline" className="mt-3 w-full border-white text-white hover:bg-white hover:text-dtc-blue">
                support@dtc.cd
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Live Chat */}
        <Card>
          <CardHeader>
            <CardTitle>Chat en direct</CardTitle>
            <CardDescription>Envoyez-nous un message</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 rounded-lg p-3 h-52 mb-3 overflow-y-auto">
              <div className="flex justify-start mb-3">
                <div className="bg-white p-3 rounded-lg max-w-[80%] shadow-sm">
                  <p className="text-sm">Bonjour! Comment puis-je vous aider aujourd'hui?</p>
                  <p className="text-xs text-gray-500 mt-1">Support DTC • 10:30</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Textarea 
                placeholder="Tapez votre message ici..." 
                className="min-h-[80px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button 
                className="h-auto" 
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-gray-500">
            Temps de réponse moyen: 15 minutes
          </CardFooter>
        </Card>
        
        {/* FAQs */}
        <div>
          <h2 className="text-lg font-medium mb-4">Questions fréquentes</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Card key={index} className={expandedFaq === index ? "border-dtc-blue" : ""}>
                <CardHeader className="p-4" onClick={() => toggleFaq(index)}>
                  <div className="flex justify-between items-center cursor-pointer">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-dtc-blue" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0 pb-4 px-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
        
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Formulaire de contact</CardTitle>
            <CardDescription>Pour les questions plus complexes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sujet</label>
              <Input placeholder="Entrez le sujet de votre demande" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Décrivez votre problème en détail..."
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Envoyer la demande
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SupportPage;
