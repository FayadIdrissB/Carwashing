import '../../index.css'

function Footer() {

  return (
    <footer style={{ backgroundColor: '#1A4473' }}>
        <div id="contact" className="max-w-4xl mx-auto text-center pt-10">
            {/* Titre */}
            <h2 className="text-3xl md:text-4xl font-bold text-white-500 mb-8">
                Contactez-nous
            </h2>

            {/* Coordonnées avec icônes */}
            <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-6">

              {/* Bouton téléphone */}
              <a 
                href="tel:0759431982" 
                className="bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                07 59 43 19 82
              </a>

               {/* Icône Snapchat */}
              <a href="https://www.snapchat.com/add/lvga6901" target="_blank" rel="noopener noreferrer">
                <img src="/icons/snapchat-icon.png" alt="Snapchat" className="h-[64px] w-auto" />
              </a>

              {/* Bouton email */}
              <a 
                href="mailto:Ivgaauto69@gmail.com" 
                className="bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Envoyer un Email
              </a>

            </div>

            {/* Texte descriptif */}
            <div className="space-y-6 text-white-500 text-lg leading-relaxed">
                <p>
                    Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé, en savoir plus sur nous, 
                    bénéficier de conseils sur mesure, découvrir notre entreprise ou obtenir des informations 
                    détaillées sur nos prestations.
                </p>
              
                <p>
                    Avec LVGA Auto, votre véhicule est entre de bonnes mains ! Réservez dès maintenant votre 
                    prochain lavage auto à Lyon et profitez du meilleur, où que vous soyez dans la région lyonnaise.
                </p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
