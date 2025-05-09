
import { useState } from 'react';
import MobileLayout from '@/components/ui/mobile-layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MessageSquare, MapPin } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <MobileLayout title="Contactez-nous">
      <div className="space-y-6">
        <div className="bg-dtc-blue text-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-2">Nous contacter</h2>
          <p className="text-sm opacity-90">Notre équipe est à votre disposition</p>
        </div>
        
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-dtc-light rounded-full">
                <Phone className="h-5 w-5 text-dtc-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Téléphone</h3>
                <p className="text-sm text-gray-600">+243 99 123 4567</p>
                <p className="text-sm text-gray-600">+243 81 987 6543</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 bg-dtc-light rounded-full">
                <Mail className="h-5 w-5 text-dtc-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <p className="text-sm text-gray-600">contact@dtc.com</p>
                <p className="text-sm text-gray-600">support@dtc.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 bg-dtc-light rounded-full">
                <MapPin className="h-5 w-5 text-dtc-blue" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Adresse</h3>
                <p className="text-sm text-gray-600">123 Avenue du Boulevard</p>
                <p className="text-sm text-gray-600">Kinshasa, République Démocratique du Congo</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-5 w-5 text-dtc-blue" />
              <h3 className="font-medium">Formulaire de contact</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Votre nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus-visible:ring-dtc-blue"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Votre adresse email"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus-visible:ring-dtc-blue"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Votre numéro de téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="focus-visible:ring-dtc-blue"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  className="focus-visible:ring-dtc-blue resize-none min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-dtc-blue hover:bg-dtc-blue/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MobileLayout>
  );
};

export default ContactPage;
