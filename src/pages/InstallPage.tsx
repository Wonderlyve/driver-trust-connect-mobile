import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Monitor, Apple, Chrome, Share } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const InstallPage = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F3460] via-[#16213E] to-[#1A1A2E] p-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white">Installer Caesse</h1>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/lovable-uploads/caesse-logo-square.png"
            alt="Caesse Logo"
            className="w-32 h-32 rounded-2xl shadow-2xl"
          />
        </div>

        {isInstalled ? (
          <Card className="bg-green-500/20 border-green-500/30">
            <CardHeader className="text-center">
              <CardTitle className="text-white flex items-center justify-center gap-2">
                <Download className="h-6 w-6" />
                Application installée !
              </CardTitle>
              <CardDescription className="text-green-200">
                Caesse est déjà installée sur votre appareil.
              </CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <div className="space-y-4">
            {/* Android / Chrome Install Button */}
            {deferredPrompt && (
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Chrome className="h-6 w-6 text-blue-400" />
                    Installation rapide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleInstall}
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Installer maintenant
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* iOS Instructions */}
            {isIOS && (
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Apple className="h-6 w-6" />
                    Installation sur iPhone/iPad
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Suivez ces étapes pour installer Caesse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Ouvrez Safari</p>
                      <p className="text-sm text-gray-300">
                        Assurez-vous d'utiliser le navigateur Safari
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="text-white">
                      <p className="font-medium flex items-center gap-2">
                        Appuyez sur <Share className="h-4 w-4" />
                      </p>
                      <p className="text-sm text-gray-300">
                        Le bouton de partage en bas de l'écran
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Sur l'écran d'accueil</p>
                      <p className="text-sm text-gray-300">
                        Faites défiler et appuyez sur "Sur l'écran d'accueil"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Confirmez l'installation</p>
                      <p className="text-sm text-gray-300">
                        Appuyez sur "Ajouter" en haut à droite
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Android Instructions (when no prompt) */}
            {isAndroid && !deferredPrompt && (
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-green-400" />
                    Installation sur Android
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Suivez ces étapes pour installer Caesse
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Ouvrez le menu</p>
                      <p className="text-sm text-gray-300">
                        Appuyez sur les 3 points en haut à droite
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Installer l'application</p>
                      <p className="text-sm text-gray-300">
                        Sélectionnez "Installer l'application" ou "Ajouter à l'écran d'accueil"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Desktop Instructions */}
            {!isIOS && !isAndroid && !deferredPrompt && (
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Monitor className="h-6 w-6 text-blue-400" />
                    Installation sur ordinateur
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Installez Caesse sur votre bureau
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Cherchez l'icône d'installation</p>
                      <p className="text-sm text-gray-300">
                        Dans la barre d'adresse de Chrome, cherchez l'icône "+"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div className="text-white">
                      <p className="font-medium">Cliquez sur Installer</p>
                      <p className="text-sm text-gray-300">
                        Confirmez l'installation dans la fenêtre qui s'affiche
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            <Card className="bg-white/5 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  Pourquoi installer Caesse ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Accès rapide depuis l'écran d'accueil</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Fonctionne même hors connexion</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Notifications en temps réel</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Expérience native sans téléchargement lourd</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallPage;
