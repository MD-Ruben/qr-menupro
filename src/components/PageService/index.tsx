"use client";
import SectionTitle from "../Common/SectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Services = () => {
  return (
    <>
      <section
        id="features"
        className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Nos services"
            paragraph="Plus de 10 ans d'expérience à votre service"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4aa9b8"
                      d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.25 16h-1.5V8.9L6.72 18H4.66L15.45 6.5c.21-.24.55-.31.82-.2c.29.12.48.39.48.7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nettoyage des Vitres Professionnelles
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Nos services de nettoyage des vitres sont conçus pour
                    apporter une clarté éclatante à vos espaces, qu'il s'agisse
                    de bâtiments résidentiels, commerciaux, ou industriels. Nous
                    comprenons l'importance d'une apparence impeccable pour vos
                    locaux, et nous nous engageons à vous offrir un service de
                    qualité supérieure.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Ce que nous proposons :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage de vitres intérieures et extérieures :
                          </span>{" "}
                          Nous nous occupons de toutes vos surfaces vitrées, de
                          l'intérieur comme de l'extérieur, pour des résultats
                          impeccables. Entretien des fenêtres en hauteur : Grâce
                          à notre équipement spécialisé, nous intervenons en
                          toute sécurité sur les fenêtres difficiles d'accès et
                          les façades d'immeubles.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement des traces et des dépôts :
                          </span>{" "}
                          Nos professionnels éliminent les traces de calcaire,
                          les résidus de pollution, et autres saletés incrustées
                          pour un éclat durable. Protection et brillance : En
                          plus du nettoyage, nous appliquons des traitements qui
                          protègent vos vitres contre les rayures et les
                          salissures, pour prolonger leur éclat. Intervention
                          régulière ou ponctuelle : Nous offrons des services de
                          nettoyage récurrents pour maintenir vos vitres
                          toujours propres, ou des interventions ponctuelles
                          selon vos besoins.
                        </p>
                        <h3 className="text-start text-sm font-bold text-black lg:text-base xl:text-lg">
                          Pourquoi choisir notre service de nettoyage des vitres
                          ?
                        </h3>
                        <p className="mt-1 text-sm font-light text-black">
                          {" "}
                          <span className="font-bold">
                            Résultats impeccables :
                          </span>{" "}
                          Nous utilisons des techniques et des produits de
                          nettoyage professionnels pour garantir des vitres sans
                          traces ni résidus.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          {" "}
                          <span className="font-bold">
                            Sécurité assurée :
                          </span>{" "}
                          Nos techniciens sont formés aux normes de sécurité les
                          plus strictes, en particulier pour les travaux en
                          hauteur.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          {" "}
                          <span className="font-bold">
                            Respect de l'environnement :
                          </span>{" "}
                          Nous privilégions des produits respectueux de
                          l'environnement, sans compromis sur l'efficacité.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          {" "}
                          <span className="font-bold">
                            Service rapide et flexible :
                          </span>{" "}
                          Nous nous adaptons à vos horaires et à vos contraintes
                          pour minimiser les interruptions dans vos activités.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Confiez-nous le nettoyage de vos vitres et laissez
                          entrer la lumière dans vos espaces. Grâce à notre
                          expertise, vos vitres resteront éclatantes et mettront
                          en valeur votre environnement.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4aa9b8"
                      d="M12 14c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11 5H1v-2h3v-2H1v-2h3v-2H1V9h3V7H1V5h22v2h-3v2h3v2h-3v2h3v2h-3v2h3zm-11-3.08c.62.7 1.66.89 2.5.41s1.19-1.49.9-2.37c.91-.18 1.6-.99 1.6-1.96s-.69-1.78-1.6-1.96c.29-.88-.06-1.89-.9-2.37s-1.88-.29-2.5.41a1.995 1.995 0 0 0-3.39 1.96C7.69 10.22 7 11.03 7 12s.69 1.78 1.61 1.96A1.995 1.995 0 0 0 12 15.92"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Placement de Personnel de Ménage
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Assurez la propreté et le bon entretien de vos espaces grâce
                    à notre service spécialisé dans le placement de personnel de
                    ménage. Que vous ayez besoin de personnel pour des ménages
                    résidentiels, commerciaux ou industriels, nous vous
                    fournissons des professionnels compétents et fiables,
                    capables de répondre à vos exigences spécifiques.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Nos services de placement de personnel de ménage incluent :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          Nous nous engageons à vous proposer des profils
                          rigoureusement sélectionnés pour garantir un service
                          de ménage de qualité supérieure.
                        </p>
                        <p className="text-sm font-light text-black">
                          Sélection de candidats qualifiés
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Recrutement ciblé :</span>{" "}
                          Nous identifions et recrutons des candidats ayant une
                          expérience solide dans le domaine du ménage, que ce
                          soit pour des tâches domestiques ou des missions dans
                          des environnements commerciaux.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Évaluation des compétences :
                          </span>{" "}
                          Chaque candidat est évalué sur ses compétences
                          techniques, son efficacité, et son sens du détail pour
                          s'assurer qu'il répond aux normes de qualité exigées.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Vérification des références :
                          </span>{" "}
                          Nous effectuons des vérifications approfondies des
                          références et des antécédents pour garantir que les
                          candidats sont dignes de confiance et professionnels.
                        </p>
                        <p className="text-sm font-light text-black">
                          Placement pour différents besoins
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Personnel de ménage résidentiel :
                          </span>{" "}
                          Que ce soit pour un nettoyage quotidien, hebdomadaire,
                          ou pour des tâches plus spécifiques comme le nettoyage
                          en profondeur, nous trouvons la personne idéale pour
                          entretenir votre domicile.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Personnel de ménage commercial :
                          </span>{" "}
                          Pour les bureaux, magasins, et autres espaces
                          commerciaux, nous proposons des professionnels
                          capables de maintenir des environnements propres et
                          accueillants pour vos employés et clients.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Personnel de ménage industriel :
                          </span>{" "}
                          Nous fournissons du personnel formé pour les
                          environnements industriels nécessitant un nettoyage
                          spécialisé, respectant les protocoles de sécurité et
                          d'hygiène.
                        </p>
                        <p className="text-sm font-light text-black">
                          Flexibilité et adaptabilité
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Service temporaire ou permanent :
                          </span>{" "}
                          Que vous ayez besoin d'un renfort temporaire pour une
                          période de pointe ou d'un employé permanent pour un
                          poste de longue durée, nous nous adaptons à vos
                          besoins.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Horaires adaptés :</span>{" "}
                          Nos placements tiennent compte de vos horaires de
                          fonctionnement, que ce soit pour un service de jour,
                          de nuit, ou en week-end. Accompagnement et suivi.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Intégration et formation :
                          </span>
                          Nous aidons à l'intégration du personnel de ménage au
                          sein de votre équipe et proposons des formations pour
                          s'assurer qu'ils sont prêts à répondre à vos attentes
                          spécifiques.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">Suivi régulier :</span>
                          Nous assurons un suivi après le placement pour
                          garantir la satisfaction des employeurs et des
                          employés, et ajustons nos services si nécessaire.
                          Pourquoi choisir notre service de placement de
                          personnel de ménage ?
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Professionnalisme et fiabilité :
                          </span>
                          Nos candidats sont sélectionnés non seulement pour
                          leurs compétences en nettoyage, mais aussi pour leur
                          sérieux et leur discrétion, assurant ainsi un service
                          de haute qualité.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Rapidité et efficacité :
                          </span>
                          Nous comprenons l'importance de maintenir vos espaces
                          propres et fonctionnels en tout temps, c'est pourquoi
                          nous assurons un processus de placement rapide et
                          efficace.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Service personnalisé :
                          </span>
                          Nous prenons le temps de comprendre vos besoins
                          spécifiques pour vous proposer des solutions de ménage
                          parfaitement adaptées à votre situation.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Engagement envers la qualité :
                          </span>
                          Nous nous engageons à vous fournir un service de
                          ménage qui répond aux plus hauts standards de propreté
                          et de satisfaction. Avec notre service de placement de
                          personnel de ménage, bénéficiez d’un environnement
                          propre, sain et bien entretenu, sans avoir à vous
                          soucier du recrutement et de la gestion du personnel.
                          Confiez-nous le soin de trouver les bonnes personnes
                          pour assurer la propreté et le confort de vos espaces.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#4aa9b8"
                      d="M18 20.5V20m0 .5a3 3 0 0 1-3 3h-2.5v-.25l.22-.357a12 12 0 0 0 1.78-6.29V16.5H18m0 4a3 3 0 0 0 3 3h2.5v-.25l-.22-.357a12 12 0 0 1-1.78-6.29V16.5H18m0 0V0M3.5 13.5V11a2.5 2.5 0 0 1 5 0v2.5m-6 10v-1.03a20 20 0 0 0-1.904-8.515L.5 13.75v-.25h11v.25l-.096.205A20 20 0 0 0 9.5 22.47v1.03z"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nettoyage de Canapés et Tapis à la Vapeur
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Redonnez une nouvelle vie à vos canapés et tapis grâce à
                    notre service de nettoyage à la vapeur. Conçu pour éliminer
                    en profondeur les taches, les allergènes, et les odeurs, ce
                    traitement professionnel ravivera l'apparence et la
                    fraîcheur de vos tissus d'ameublement, tout en assurant une
                    hygiène optimale.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Nos services comprennent :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          Sélection de candidats qualifiés
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage en profondeur à la vapeur :
                          </span>{" "}
                          La vapeur haute température pénètre dans les fibres
                          pour désincruster les saletés, les taches et les
                          résidus, tout en désinfectant vos canapés et tapis.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Élimination des allergènes et des acariens :
                          </span>{" "}
                          Notre procédé élimine efficacement les allergènes, les
                          acariens, et les bactéries, offrant ainsi un
                          environnement plus sain pour vous et votre famille.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement des taches tenaces :
                          </span>{" "}
                          Nous utilisons des techniques spécifiques pour traiter
                          et éliminer les taches les plus résistantes, sans
                          endommager les tissus délicats.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Désodorisation :</span> En
                          plus du nettoyage, nous neutralisons les odeurs pour
                          que vos meubles et tapis retrouvent leur fraîcheur
                          d'origine.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Séchage rapide :</span>{" "}
                          Grâce à notre méthode de nettoyage à la vapeur, vos
                          meubles et tapis sèchent rapidement, minimisant les
                          interruptions dans votre quotidien. Pourquoi choisir
                          notre service de nettoyage à la vapeur ?
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Protection des tissus :
                          </span>{" "}
                          Nos techniques sont douces mais efficaces, préservant
                          la qualité et l'intégrité de vos canapés et tapis.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Produits écologiques :
                          </span>{" "}
                          Nous utilisons des produits respectueux de
                          l'environnement et sûrs pour les enfants et les
                          animaux domestiques.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Résultats visibles </span>{" "}
                          Vous remarquerez immédiatement la différence en termes
                          de propreté, de fraîcheur et de confort.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Expertise professionnelle :
                          </span>
                          Nos techniciens sont formés pour traiter tous types de
                          tissus, même les plus délicats, avec un soin expert.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Satisfaction garantie :
                          </span>
                          Nous nous engageons à vous offrir un service de
                          qualité supérieure, avec des résultats qui dépassent
                          vos attentes.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Offrez à vos canapés et tapis une nouvelle jeunesse
                          avec notre service de nettoyage à la vapeur. Profitez
                          d’un environnement plus propre, plus sain, et plus
                          accueillant grâce à notre savoir-faire professionnel.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4aa9b8"
                      d="M18.9 6c-.2-.6-.8-1-1.4-1h-11c-.7 0-1.2.4-1.4 1L3 12v8c0 .5.5 1 1 1h1c.6 0 1-.5 1-1v-1h12v1c0 .5.5 1 1 1h1c.5 0 1-.5 1-1v-8zM6.8 7h10.3l1.1 3H5.8zM19 17H5v-5h14zM7.5 13c.8 0 1.5.7 1.5 1.5S8.3 16 7.5 16S6 15.3 6 14.5S6.7 13 7.5 13m9 0c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nettoyage Intérieur et Extérieur de Voitures
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Donnez à votre voiture le soin qu’elle mérite grâce à notre
                    service de nettoyage complet, intérieur et extérieur. Nous
                    nous engageons à redonner à votre véhicule son éclat
                    d’origine, en combinant des techniques professionnelles et
                    des produits de qualité pour un résultat impeccable.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Nos services comprennent :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          Nettoyage Extérieur
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Lavage complet de la carrosserie :
                          </span>{" "}
                          Élimination des saletés, poussières, et résidus de la
                          route avec un lavage soigné à la main ou à la machine.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement des jantes et pneus :
                          </span>{" "}
                          Nettoyage en profondeur des jantes et pneus, suivi
                          d’un traitement protecteur pour une brillance durable.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Décontamination et polissage :
                          </span>{" "}
                          Décontamination de la carrosserie pour éliminer les
                          impuretés tenaces, suivie d’un polissage pour redonner
                          de l'éclat à votre peinture.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">Désodorisation :</span> En
                          plus du nettoyage, nous neutralisons les odeurs pour
                          que vos meubles et tapis retrouvent leur fraîcheur
                          d'origine.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Application de cire protectrice :
                          </span>{" "}
                          Pose d'une cire de haute qualité pour protéger la
                          peinture et prolonger la brillance de votre véhicule.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des vitres :
                          </span>{" "}
                          Vitres extérieures impeccables pour une visibilité
                          parfaite et un look soigné.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Produits écologiques :
                          </span>{" "}
                          Nous utilisons des produits respectueux de
                          l'environnement et sûrs pour les enfants et les
                          animaux domestiques.
                        </p>
                        <p className="text-sm font-light text-black">
                          Nettoyage Intérieur
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Aspiration complète :{" "}
                          </span>{" "}
                          Aspiration des tapis, moquettes, sièges, et recoins
                          pour éliminer la poussière, les miettes, et autres
                          débris.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des surfaces :
                          </span>
                          Nettoyage approfondi des tableaux de bord, panneaux de
                          porte, consoles et autres surfaces en plastique,
                          vinyle, ou cuir.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Shampooing des sièges et tapis :
                          </span>
                          Traitement des sièges en tissu et des tapis avec un
                          shampooing spécialisé pour enlever les taches et
                          raviver les couleurs.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement du cuir :
                          </span>
                          Nettoyage, hydratation et protection des sièges en
                          cuir pour prévenir l'usure et conserver leur
                          souplesse.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">Désodorisation :</span>
                          Élimination des mauvaises odeurs pour une atmosphère
                          fraîche et agréable à l’intérieur de votre voiture.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Pourquoi choisir notre service de nettoyage automobile
                          ?
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Qualité supérieure :
                          </span>
                          Nous utilisons des produits et techniques de pointe
                          pour assurer un nettoyage en profondeur et une
                          protection durable.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">Soins adaptés :</span>
                          Nous adaptons nos méthodes à chaque type de véhicule,
                          en tenant compte de ses spécificités et de vos
                          préférences.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Confort et commodité :
                          </span>
                          Nous proposons des services flexibles, y compris des
                          options de nettoyage sur place ou à domicile pour
                          s'adapter à votre emploi du temps.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Respect de l’environnement :
                          </span>
                          Nous utilisons des produits écologiques et économisons
                          l’eau grâce à des techniques efficaces et
                          respectueuses de la planète.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Satisfaction garantie :
                          </span>
                          Notre objectif est de surpasser vos attentes et de
                          vous offrir une voiture aussi propre et brillante que
                          neuve.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Confiez-nous le nettoyage de votre voiture pour
                          retrouver le plaisir de conduire un véhicule
                          impeccable, à l'intérieur comme à l'extérieur. Faites
                          l'expérience d'un service professionnel qui valorise
                          votre véhicule tout en respectant l'environnement.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#4aa9b8"
                      d="m7.424 16.122l.176-.029l.899 5.573l-.176.029zm-2.401 5.506l.625-5.53l.177.02l-.625 5.53zM7.99 19.71l-.028-.178H5.45l-.02.178zm-.894-3.56l.388 3.371h.18l-.392-3.393zm.632 3.941l-.042-.37h-.179l.045.39zm-3.114-.005l.658-3.994l.175.03l-.658 3.993zm2.735-1.642l-1.777-.011l-.02.177l1.818.012zm-2.3.163l.303.002l.02-.178l-.295-.002zm1.13.018l.393.896h.194l-.392-.895zm-.954-3.269c-.054.079-.245.417-.176.6h1.8l1.608-.016a.46.46 0 0 0 .091-.416a.65.65 0 0 0-.275-.389a1.07 1.07 0 0 0-.63-.2h-.017l-1.564.021a1.05 1.05 0 0 0-.487.124a.94.94 0 0 0-.35.276m-.3.354a1.5 1.5 0 0 1 .193-.429a1 1 0 0 1 .36-.3a4 4 0 0 0-.566.05c-.09.022-.2.061-.226.116s0 .1.035.2a4 4 0 0 0 .203.363m7.703.462l.175-.028l.9 5.573l-.176.028zm-2.398 5.495l.623-5.531l.177.02l-.623 5.531zm2.965-1.907l-.028-.177h-2.514l-.02.177zm-.262.382l-.042-.371h-.179l.045.391zm-.065-.57l-.39-3.393l-.177.02l.388 3.373zm-3.05.565l.659-3.994l.175.029l-.658 3.994zm.435-1.48l.304.002l.02-.177l-.295-.002zm2.301-.162l-1.777-.012l-.02.178l1.817.012zm-1.17.181l.393.896h.194l-.392-.895zm2.092-3.49a1.06 1.06 0 0 0-.63-.2h-.015l-1.564.021a1.06 1.06 0 0 0-.487.123a.94.94 0 0 0-.35.28c-.055.079-.245.417-.176.6h1.8l1.608-.014a.45.45 0 0 0 .091-.415a.65.65 0 0 0-.277-.395m-3.153.148a1 1 0 0 1 .358-.3a5 5 0 0 0-.565.049c-.089.023-.2.062-.225.117s0 .1.035.2a4 4 0 0 0 .2.366a1.5 1.5 0 0 1 .197-.432m6.744-7.503h2.486v.337h-2.486zm0-1.783h2.486v.343h-2.486zM5.258 5.035l-.983-.13v3.9h.983zM5.12 8.558h-.683V5.205l.683.07zm10.452.244h1.287V4.95h-1.287zm.21-3.6h.845v3.356h-.846zm-1.523 3.6h1.252V4.95h-1.252zm.272-3.6h.777v3.356h-.777zm-7.05 3.6h2V5.035h-2zm.284-3.5H9.2v3.256H7.764zm-2.277 3.5h1.935V5.035H5.487zm.26-3.5h1.4v3.256h-1.4zM2.352 2.476h.318v6.548h-.318zm.376 6.548h.37l.03-5.917l-.387-.566zm.426 0h.832v-4.5l-.8-1.323Zm2.186-4.26L4.09 4.58v4.444h1.252zm-.024 4.1h-1.1v-4.03l1.1.145zm4.241-4.097H5.4v4.257h4.16zM9.542 8.86H5.43V4.98h4.113zm4.15.155l.33-.034V4.706l-.33.212zm3.281-4.333H14.11v4.3h2.863zm-.06 4.178h-2.71V4.891h2.71zM5.057 11.077l.356-.042a.13.13 0 0 0 .092-.06l.174-.3q-.235.042-.472.064l-.376.036a3 3 0 0 1-.287.012H4.31l.188.23a.13.13 0 0 0 .09.045zM4.7 10.67c0-.074-.04-.126-.076-.126s-.075.052-.075.126v.027h.148zm-.442-.115a.136.136 0 0 0 .2.12a.24.24 0 0 1 .06-.167a.135.135 0 0 0-.262.051zm.776.024a.15.15 0 0 0 .024.084l.141-.013l.145-.016a.2.2 0 0 0 .01-.055a.161.161 0 0 0-.32 0m.581.015a.14.14 0 0 0-.138-.124a.2.2 0 0 0-.055.012a.24.24 0 0 1 .02.1v.043zm-.684-.05a.09.09 0 0 0-.088.088a.1.1 0 0 0 .016.05l.107-.01a.2.2 0 0 1-.019-.093v-.033zm2.463.084v.16l.054.174a.084.084 0 0 0 .08.06l.3-.001a.08.08 0 0 0 .078-.052l.077-.192a.1.1 0 0 0 .006-.032v-.117a.084.084 0 0 0-.083-.084h-.428a.084.084 0 0 0-.084.084m8.724-.049v.308l.013.031a.034.034 0 0 0 .032.023h.338a.04.04 0 0 0 .033-.023v-.339a.035.035 0 0 0-.035-.035h-.34a.035.035 0 0 0-.04.035m.045-.122h.08v-.335h-.08zm.238 0h.092v-.385h-.092v.135zm-.1-.192h.042v.192h-.042zm-9.084-.116l.057.148l.131.177a.2.2 0 0 1 .068-.017l.038-.276l.134-.185l-.045-.061l-.01-.04l-.118-.047l-.148.093l.183.041l-.1.3zm.85-.202l-.024.372l-.072.15a.1.1 0 0 1 .042.021l.08-.164l.283-.24l-.1-.185zm-.41.444l-.02-.048l-.09.114h.067zm-.355-.31l-.04-.093l-.042-.01l-.072.08zm.476-.17l-.06.083l.095.124l-.035.045H7.8l.2-.316l-.256-.135l-.128.06l.022.082zm4.085.545h.115v.25h-.115zm.143-1.003a.7.7 0 0 0-.036-.255a.35.35 0 0 0-.075-.149a.17.17 0 0 0-.093-.06a.16.16 0 0 0-.105.019c-.043.025-.067.072-.084.168a1.5 1.5 0 0 0-.006.325h.058a1.4 1.4 0 0 1 .005-.309c.017-.094.037-.118.056-.129a.1.1 0 0 1 .065-.013a.12.12 0 0 1 .061.043a.3.3 0 0 1 .062.124a.7.7 0 0 1 .034.238a1 1 0 0 1-.072.3a.57.57 0 0 0-.054.291a2 2 0 0 1 .048.362h.058a2 2 0 0 0-.05-.375a.55.55 0 0 1 .052-.26a1 1 0 0 0 .076-.32m-.34.66l.073.076v-.077l-.074-.072v-.487h-.06v.054l-.019.973h-.033v.342h.16l.004-.337h-.052zM9.905 7.18h3.28v.132h-3.28Zm0-.273h3.28v.132h-3.28Zm0-.536h3.28v.357h-3.28zm1.635 3.51H9.833V6.245h3.45V9.88h-1.368l-.018.087h1.473V6.158H9.746v3.81h1.794zm-8.772.533l.1.554l.157-.059v-.544zm5.302.396l-.028.068h3.452v-.355h.035v-.179H8.158l-.022.02l-.078.172a.2.2 0 0 1 .027.093v.117a.2.2 0 0 1-.014.064m8.567.068v-.534h-.087v.124a.12.12 0 0 1 .074.112v.3zm-13.525 0h1.164l-.153-.187h.1a.22.22 0 0 1-.047-.136a.225.225 0 0 1 .152-.212H3.113zm2.26-.468a.2.2 0 0 1 .1-.026a.23.23 0 0 1 .224.195h.008l.141-.028l-.189.328h1.677l-.019-.063a.2.2 0 0 1-.008-.05v-.136a.17.17 0 0 1 .05-.12l-.12-.165H5.27a.24.24 0 0 1 .103.065m-.777.051h.028a.16.16 0 0 1 .144.112a.18.18 0 0 1 .163-.112a.2.2 0 0 1 .045.006a.25.25 0 0 1 .143-.12h-.653a.22.22 0 0 1 .13.114m11.51.007v-.124h-4.16v.055h.086v.366h-.23v-.366h.042v-.055h-.12v.184h.052v.35h4.26v-.3a.12.12 0 0 1 .07-.11M5.432 11.57v-.179l-2.762-.032l-.058-.248l.18-.078l-.104-.573l-.064-.238h-.35v1.597l2.81.028h.007v.189zm.125-.33H17.83v.13H5.558zm8.016 1.345l-.02-.02l-.128-.075l.567.3v-.544h-.979l-.2-.116h1.174v-.7H10.24v.7h-.116v-.7h-.275v.7h-.116v-.7H7.094v.7H4.767l-.009.006h-.006l.177-.228l-2.655-.026h.246v1.251h12.088zm-4.062-.738h-2.19a.073.073 0 0 1 0-.145h2.19a.073.073 0 1 1 0 .145m6.991-.818h-.338a.12.12 0 0 1-.087-.037L8 10.983l-.008.02a.17.17 0 0 1-.158.106h-.3a.17.17 0 0 1-.163-.12v-.007H5.606l-.02.035a.21.21 0 0 1-.156.1l-.36.047l-.48-.024a.21.21 0 0 1-.154-.077l-.078-.084h-1.25l-.419.205l.028.119l2.655.03l.12-.155h12.3l-.79-.181h-.415a.12.12 0 0 1-.084.032m-6.2.124l-.122-.117h3.12l.326.116zm-7.835 2.086h12.068v.268H2.468zm3.974.377H2.384v.036h3.884v1.17l.174-.004zM6.268 19h-.706l-.038.333h.896l-.152-.347zm-1.012 0h-.218l-.055.333h.235zm1.012-2.914h.174v2.29h-.174zm-3.884 3.247h2.29L4.73 19H2.384zm4.464-5.68h6.116v1.206a1.2 1.2 0 0 1 .591.224v-1.467h-6.91v1.2h.2zm5.087 5.68h.663L12.56 19h-.77zm-4.058 0L7.823 19h-.156l.04.333zM9.943 19h-1.81l.052.333h1.703zm-3.298-2.914h.203v2.293h-.203zm6.32.655l.417 2.592h.176v-3.209l-.594.005zm-6.117 1.943h-.203v.403l.108.246H7.4L7.361 19h-.513zm4.755.65L11.457 19h-.684l-.038.333zm1.361-.682V19h-.098l.04.333h.168zM10.466 19h-.215l-.055.333h.233zm-5.885.898l.074-.449h-2.27v.449zm7.405-.449l.032.073h.602l-.008-.073zm-7.096.449h.264l.051-.449h-.24zm1.581-.449h-.96l-.002.022h.972zm.332 0l.01.022h.602l-.002-.022zm.916 0l.003.022H7.9l-.003-.022zm-.255.449l-.014-.123H5.474l-.013.123zM2.058 2.035v20h20v-20zm19.783 13.262l-1.972-.662l.038-9.314l1.934-.459zm0-10.662l-1.933.458V3.904l1.928-.625zm0-1.585l-2.054.666l-16.182.065l.132.217l15.958-.063l-.043 10.666h-2.036v.218h2.126l2.1.708v6.292H2.275v-1.8h-.007v-6.084h.006v-.282h.11v-.038h-.11v-.109h.194v-.27h-.193v-.11h.246v-1.248h-.247V4.004h.02v-.218h-.02V2.252h19.567ZM9.795 19.897l.074-.449H8.204l.073.45zm-1.827 0l-.02-.123h-.19l.013.123zm2.135 0h.262l.051-.449h-.239zm1.551-.449h-.932l-.008.073h.972zm1.01.45l-.009-.073H10.68l-.008.072zm-7.078-7.78l.002-.694l1.014.003l-.002.694zm1.13.004l.003-.696h.26l-.001.696zm9.146.007H17.5v-.703h-3.39v.703h1.636zm-2.188 1.478h.32v1.261h-.32zm.435-.758l.558.295h-.029v.463h-.529v1.261h1.637v-2.623H14.11zm3.391 2.02v-2.624h-1.638v2.623h1.32zm-1.754.115h-2.072v.2a1 1 0 0 1 .09.105h3.3v-.3h-1.318zM3.108 9.082h-.217l.005 1.22l.083-.017v-.028h.134z"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Nettoyage des Cuisines Professionnelles
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Maintenez les plus hauts standards d'hygiène dans votre
                    établissement grâce à notre service de nettoyage spécialisé
                    pour les cuisines professionnelles. Nous comprenons
                    l'importance d'une cuisine propre et sécurisée pour la santé
                    de vos clients et le respect des normes réglementaires. Nos
                    experts sont formés pour offrir un nettoyage en profondeur,
                    en utilisant des techniques et des produits adaptés aux
                    environnements exigeants.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Nos services incluent :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          Nettoyage Complet des Surfaces
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection des plans de travail :
                          </span>{" "}
                          Nettoyage et désinfection des surfaces de préparation
                          pour éliminer les bactéries et les résidus
                          alimentaires.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des équipements :
                          </span>{" "}
                          Dégraissage et nettoyage minutieux des équipements de
                          cuisson, des fours, des friteuses, des grilles, et des
                          plaques de cuisson.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des éviers et zones de lavage :
                          </span>{" "}
                          Nettoyage et désinfection des éviers, des
                          lave-vaisselle, et des zones de lavage pour prévenir
                          la contamination croisée. Entretien des Sols et Murs
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Dégraissage des sols :
                          </span>{" "}
                          En Nettoyage en profondeur des sols pour enlever les
                          accumulations de graisse, d’huile, et de saletés, en
                          utilisant des produits adaptés aux surfaces
                          industrielles.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des murs et plafonds :
                          </span>{" "}
                          Élimination des taches, éclaboussures, et
                          accumulations de graisse sur les murs et plafonds, y
                          compris dans les zones difficiles d'accès.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des vitres :
                          </span>{" "}
                          Vitres extérieures impeccables pour une visibilité
                          parfaite et un look soigné.
                        </p>
                        <p className="text-sm font-light text-black">
                          Nettoyage des Systèmes d’Aspiration et de Ventilation
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des hottes :
                          </span>{" "}
                          Dégraissage complet des hottes et des filtres pour
                          assurer une extraction efficace et prévenir les
                          risques d'incendie.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des conduits de ventilation :
                          </span>{" "}
                          Désinfection et dégraissage des conduits pour garantir
                          une qualité d'air optimale et un fonctionnement sûr.
                        </p>
                        <p className="text-sm font-light text-black">
                          Entretien des Chambres Froides et Réfrigérateurs
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des surfaces intérieures :
                          </span>
                          Désinfection des étagères, parois, et sols des
                          chambres froides et réfrigérateurs pour éliminer les
                          contaminants et les moisissures.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Entretien des joints et portes :
                          </span>
                          Nettoyage des joints d'étanchéité et des portes pour
                          éviter les fuites et maintenir une température
                          constante.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement du cuir :
                          </span>
                          Nettoyage, hydratation et protection des sièges en
                          cuir pour prévenir l'usure et conserver leur
                          souplesse.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Gestion des Déchets et Entretien des Poubelles
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des poubelles et des zones de stockage des
                            déchets :
                          </span>
                          Désinfection des poubelles et des zones de stockage
                          des déchets pour prévenir les mauvaises odeurs et les
                          infestations de nuisibles.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Pourquoi choisir notre service de nettoyage des
                          cuisines professionnelles ?
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Conformité aux normes sanitaires :
                          </span>
                          Nous respectons strictement les normes HACCP (Hazard
                          Analysis and Critical Control Points) et autres
                          régulations pour assurer un environnement sûr et
                          hygiénique.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Personnel qualifié :
                          </span>
                          Nos équipes sont formées aux meilleures pratiques de
                          nettoyage pour les environnements alimentaires,
                          garantissant un résultat impeccable à chaque
                          intervention.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Flexibilité des horaires :
                          </span>
                          Nous nous adaptons à vos heures d'ouverture pour
                          minimiser les interruptions et effectuer les
                          nettoyages aux moments les plus opportuns.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Produits professionnels :
                          </span>
                          Nous utilisons des produits nettoyants de qualité
                          professionnelle, efficaces contre la graisse et les
                          bactéries, tout en étant sûrs pour vos équipements et
                          surfaces.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Satisfaction garantie :
                          </span>
                          Nous nous engageons à offrir un service qui dépasse
                          vos attentes, avec des contrôles de qualité rigoureux
                          après chaque intervention.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Confiez-nous l’entretien de votre cuisine
                          professionnelle pour assurer un environnement propre,
                          sain, et conforme aux standards les plus exigeants.
                          Avec notre expertise, vous pouvez vous concentrer sur
                          ce qui compte vraiment : préparer des repas délicieux
                          dans une cuisine parfaitement entretenue
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#4aa9b8"
                      d="M24 6.5c-.329 0-.659.07-.937.245C21.5 7.733 21.5 9.08 21.5 10v.5H17m-8 3h15m-7.5 0V24m-4.5-.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-8v-.25l1.922-7.495A3 3 0 0 1 6.328 6.5H7.5l1.447 2.894a2 2 0 0 0 1.79 1.106H15m-7.65-6s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C9.246 3.5 7.65 4.5 7.65 4.5z"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Service de Désinfection des Locaux
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Protégez la santé de vos employés, clients, et visiteurs
                    grâce à notre service de désinfection professionnelle. Nous
                    offrons des solutions complètes pour éliminer efficacement
                    les virus, bactéries, et autres agents pathogènes de vos
                    locaux, garantissant ainsi un environnement de travail sûr
                    et sain.
                  </p>
                  <div className="mt-1 flex flex-col items-center justify-center space-y-4 sm:space-y-0">
                    <Accordion>
                      <AccordionItem
                        key="1"
                        aria-label="Accordion 1"
                        title="Nos services de désinfection comprennent :"
                        className="text-start text-sm font-bold text-black sm:text-base lg:text-lg xl:text-xl"
                      >
                        <p className="text-sm font-light text-black">
                          Désinfection de Surface
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage et désinfection des surfaces de contact :
                          </span>{" "}
                          Désinfection minutieuse des poignées de porte,
                          interrupteurs, bureaux, tables, et autres surfaces
                          fréquemment touchées pour réduire les risques de
                          transmission.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection des équipements de bureau :
                          </span>{" "}
                          Traitement des ordinateurs, téléphones, imprimantes,
                          et autres équipements pour éliminer les agents
                          pathogènes tout en préservant leur intégrité.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection des sols et moquettes :
                          </span>{" "}
                          Nettoyage et désinfection des sols, tapis, et
                          moquettes pour un environnement sans germes.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Traitement de l'air ambiant :
                          </span>{" "}
                          Utilisation de brumisateurs ou de nébulisateurs pour
                          désinfecter l'air dans les espaces fermés, assurant
                          ainsi une réduction des agents pathogènes en
                          suspension.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des murs et plafonds :
                          </span>{" "}
                          Élimination des taches, éclaboussures, et
                          accumulations de graisse sur les murs et plafonds, y
                          compris dans les zones difficiles d'accès.
                        </p>
                        <p className="text-sm font-light text-black">
                          Nettoyage et désinfection des systèmes de ventilation
                          : Désinfection des conduits de ventilation et des
                          systèmes de climatisation pour prévenir la propagation
                          des germes et assurer une qualité d'air optimale.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des vitres :
                          </span>{" "}
                          Vitres extérieures impeccables pour une visibilité
                          parfaite et un look soigné.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Désinfection des Sanitaires et Espaces Communes
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Nettoyage des sanitaires :
                          </span>{" "}
                          Désinfection en profondeur des toilettes, lavabos, et
                          autres équipements sanitaires pour éliminer les germes
                          et maintenir un haut niveau d'hygiène.
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection des cuisines et espaces de pause :
                          </span>{" "}
                          Nettoyage et désinfection des cuisines,
                          réfrigérateurs, micro-ondes, et autres zones partagées
                          pour prévenir toute contamination croisée.
                        </p>
                        <p className="text-sm font-light text-black">
                          Interventions de Désinfection d'Urgence
                        </p>
                        <p className="text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection après contamination :
                          </span>
                          Interventions rapides en cas de détection de virus ou
                          de bactéries dans vos locaux, avec des protocoles
                          spécifiques pour éliminer toute trace d'infection.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Désinfection préventive :
                          </span>
                          Programmes de désinfection réguliers pour maintenir un
                          environnement sain et réduire les risques de
                          contamination future. Pourquoi choisir notre service
                          de désinfection des locaux ?
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Produits désinfectants de qualité hospitalière :
                          </span>
                          Nous utilisons des désinfectants puissants, approuvés
                          par les autorités sanitaires, capables d'éliminer
                          jusqu'à 99,9% des germes, y compris les virus et
                          bactéries les plus résistants.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Personnel formé et certifié :
                          </span>
                          Nos équipes sont formées aux techniques de
                          désinfection les plus avancées, garantissant une
                          intervention efficace et sécurisée.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Interventions rapides et discrètes :
                          </span>
                          Nous intervenons rapidement pour désinfecter vos
                          locaux, avec un minimum de perturbation pour votre
                          activité.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Solutions adaptées à vos besoins :
                          </span>
                          Nous proposons des plans de désinfection sur mesure,
                          adaptés à la taille de vos locaux et à la nature de
                          votre activité.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Satisfaction garantie :
                          </span>
                          Nous assurons un suivi rigoureux après chaque
                          intervention pour garantir la qualité du service et la
                          satisfaction de nos clients.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          <span className="font-bold">
                            Produits professionnels :
                          </span>
                          Nous utilisons des produits nettoyants de qualité
                          professionnelle, efficaces contre la graisse et les
                          bactéries, tout en étant sûrs pour vos équipements et
                          surfaces.
                        </p>
                        <p className="mt-1 text-sm font-light text-black">
                          Avec notre service de désinfection des locaux, offrez
                          à vos employés et visiteurs la tranquillité d'esprit
                          de travailler dans un environnement sain et protégé.
                          Confiez-nous la désinfection de vos espaces pour
                          prévenir les risques sanitaires et assurer un lieu de
                          travail sûr et hygiénique.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#4aa9b8"
                      d="M2 21v-2q.95 0 1.425-.5T5.3 18t1.925.5t1.425.5t1.425-.5T12 18t1.925.5t1.425.5t1.425-.5T18.7 18t1.875.5T22 19v2q-1.475 0-1.937-.5T18.7 20t-1.425.5t-1.925.5t-1.925-.5T12 20t-1.425.5t-1.925.5t-1.925-.5T5.3 20t-1.363.5T2 21m0-4.5v-2q.95 0 1.425-.5t1.875-.5t1.938.5t1.412.5q.9 0 1.425-.5T12 13.5t1.925.5t1.425.5t1.425-.5t1.925-.5t1.875.5t1.425.5v2q-1.475 0-1.937-.5t-1.363-.5t-1.388.5t-1.962.5q-1.425 0-1.937-.5T12 15.5q-.95 0-1.412.5t-1.938.5t-1.963-.5t-1.387-.5t-1.362.5T2 16.5M16.7 3q1.05 0 1.775.738T19.2 5.5q0 1.05-.725 1.775T16.7 8t-1.775-.725T14.2 5.5q0-1.025.725-1.763T16.7 3m-8.05 9q-.525 0-.925-.162T6.9 11.4l3.325-3.325l-1-1L5.2 5.5V3l5.5 2l6.4 6.4q-.425.275-.825.438T15.35 12q-.9 0-1.425-.5T12 11t-1.925.5t-1.425.5"
                    />
                  </svg>
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Service de Nettoyage et d’Entretien de Piscine
                </h3>
                <div className="inline-block">
                  <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Le service de nettoyage et d'entretien de piscine garantit
                    une eau propre, saine et sécurisée tout au long de l'année.
                    Nous offrons des solutions complètes, incluant le nettoyage
                    des filtres, la vérification du système de filtration,
                    l'élimination des débris, ainsi que le traitement chimique
                    de l'eau pour un équilibre parfait (pH, chlore, etc.). Nos
                    techniciens assurent également l’inspection des équipements
                    et la maintenance des structures (carrelage, margelles,
                    liners), afin de prévenir tout problème potentiel. Grâce à
                    un entretien régulier, nous vous assurons une piscine
                    impeccable et prête à l’usage, avec un confort optimal pour
                    vos moments de détente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
