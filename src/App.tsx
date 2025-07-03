import { useState } from 'react';
import './index.css'

import Header from './components/header'
import Footer from './components/footer';


//Import des images 
import lavageAuto from './assets/photoSection.jpg';
import interieurClassique from './assets/interieur-classique.webp'; 
import exterieurClassique from './assets/exterieur-classique.jpg'; 
import interieurExterieur from './assets/interieur-exterieur.jpg'
import nettoyageDomicile from './assets/nettoyage-domicile.jpg'

function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      <div>
        <Header />
        
        {/* Section Hero */}
        <section 
          className="w-full bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${lavageAuto})` }}
        >
          {/* Overlay bleu pour l'effet */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
          
          {/* Contenu */}
          <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-4xl">
              <h2 className="text-white text-lg sm:text-xl font-medium mb-4">
                Bienvenue chez LVGA Auto69
              </h2>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                LVGA auto à Lyon
              </h1>
              <button className="bg-white text-gray-900 font-semibold px-8 py-4 text-lg hover:bg-gray-100 transition-colors duration-300">
                <a href="#contact" className='no-underline'>Nous Contacter</a>
              </button>
            </div>
          </div>
        </section>

        {/* Section Services */}
        <section id="services" className="w-full py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Titre et description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Nos Service de Lavage Auto à Lyon
              </h2>
              <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Chez LVGA, notre engagement absolu est de vous fournir <strong>un lavage manuel complet</strong>, 
                prenant soin à la fois de l'<strong>intérieur et extérieur</strong> de votre véhicule. Grâce à l'utilisation exclusive de 
                produits biodégradables, notre objectif est de vous rendre un <strong>véhicule purifié et assaini</strong>, tout en 
                réduisant notre impact sur l'environnement.
              </p>
            </div>

            {/* Cartes de services */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${activeCard === 0 ? "scale-105 p-4" : ""}`}
                onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={interieurClassique} 
                    alt="Nettoyage Intérieur Classique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Nettoyage Classique
                  </h3>
                  <p className="text-gray-500 text-lg mb-4">
                    À partir de 49 €
                  </p>
                  {activeCard === 0 && (
                    <p className="text-gray-600 text-base mb-4">
                      ASPIRATION TOTAL DU VÉHICULE ET DU
                      COFFRE
                      NETTOYAGE TABLEAU DE BORD ET PLASTIQUE
                      INTÉRIEUR
                      NETTOYAGE CONTOURS DE PORTE
                    </p>
                  )}
                  <button className="w-full bg-blue-400 text-white py-3 px-6 rounded font-semibold hover:bg-blue-500 transition-colors duration-300">
                    {activeCard === 0 ? "Réduire" : "En savoir plus"}
                  </button>
                </div>
              </div>

              {/* Service 2 */}
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${activeCard === 1 ? "scale-105 p-4" : ""}`}
                onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={exterieurClassique} 
                    alt="Nettoyage Intérieur Approfondi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Nettoyage Intérieur Approfondi
                  </h3>
                  <p className="text-gray-500 text-lg mb-4">
                    À partir de 69 €
                  </p>
                  {activeCard === 1 && (
                    <p className="text-gray-600 text-base mb-4">
                      ASPIRATION TOTAL DU COFFRE ET DU
                      VÉHICULE
                      LAVAGE VITRE INTERIEUR
                      NETTOYAGE TABLEAU DE BORD ET
                      PLASTIQUE INTERIEUR
                      NETTOYAGE CONTOURS DE PORTE
                      BROSSAGE DES SIÈGES, TAPIS ET MOQUETTE
                      SHAMPOING À L'INJECTEUR, EXTRACTEUR
                      DES SIEGE, TAPIS+ MOQUETTE
                    </p>
                  )}
                  <button className="w-full bg-blue-400 text-white py-3 px-6 rounded font-semibold hover:bg-blue-500 transition-colors duration-300">
                    {activeCard === 1 ? "Réduire" : "En savoir plus"}
                  </button>
                </div>
              </div>

              {/* Service 3 */}
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${activeCard === 2 ? "scale-105 p-4" : ""}`}
                onClick={() => setActiveCard(activeCard === 2 ? null : 2)}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={interieurExterieur} 
                    alt="Nettoyage Intérieur Approfondi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Lavage Interieur Exterieur 
                  </h3>
                  <p className="text-gray-500 text-lg mb-4">
                    À partir de 100 €
                  </p>
                  {activeCard === 2 && (
                    <p className="text-gray-600 text-base mb-4">
                      FORMULE 2 +
                      NETTOYAGE À LA VAPEUR DES SIEGE, ET DE L'INTERIEUR LAVAGE CARROSSERIE À LA MAIN NETTOYAGE JANTES VITRE INTERIEUR + EXTERIEUR
                    </p>
                  )}
                  <button className="w-full bg-blue-400 text-white py-3 px-6 rounded font-semibold hover:bg-blue-500 transition-colors duration-300">
                    {activeCard === 2 ? "Réduire" : "En savoir plus"}
                  </button>
                </div>
              </div>

              {/* Service 4 */}
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 ${activeCard === 3 ? "scale-105 p-4" : ""}`}
                onClick={() => setActiveCard(activeCard === 3 ? null : 3)}
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={nettoyageDomicile} 
                    alt="Nettoyage Intérieur Approfondi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Nettoyage à domicile
                  </h3>
                  <p className="text-gray-500 text-lg mb-4">
                    Devis
                  </p>
                  {activeCard === 3 && (
                    <p className="text-gray-600 text-base mb-4">
                      canapé, matelas, tapis
                      Prix sur devis
                    </p>
                  )}
                  <button className="w-full bg-blue-400 text-white py-3 px-6 rounded font-semibold hover:bg-blue-500 transition-colors duration-300">
                    {activeCard === 3 ? "Réduire" : "En savoir plus"}
                  </button>
                </div>
              </div>

              <div>
              {/* Fiche Tarifs */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tarifs Lavage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex justify-between">
                    <span>Véhicule utilitaire 2 places :</span>
                    <span className="font-semibold">50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Véhicule Utilitaire 3 places :</span>
                    <span className="font-semibold">60 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Classe B :</span>
                    <span className="font-semibold"> tarif classique + 10€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Classe C:</span>
                    <span className="font-semibold">tarif classique + 20€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supplément Véhicule très sale</span>
                    <span className="font-semibold"> 10€</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Supplément Poile de chien</span>
                    <span className="font-semibold"> 20€</span>
                  </li>
                </ul>
              </div>
            </div>

            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default App