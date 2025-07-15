import "./Modality.css";

function Modality() {
  return (
    <section className="container mx-auto px-4 py-8 max-w-4xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Conditions Générales d’Utilisation (CGU)
      </h1>
      <p className="mb-6 italic">
        Service de location de vaisseaux – Externatic
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Objet</h2>
        <p>
          Les présentes Conditions Générales d’Utilisation (CGU) régissent
          l’accès et l’utilisation de la plateforme
          <strong> Externatic </strong> (ci-après « la Plateforme »), un service
          de location de vaisseaux spatiaux destiné aux utilisateurs
          particuliers ou professionnels. En accédant à la Plateforme et en
          utilisant ses services, l’utilisateur accepte expressément et sans
          réserve l’ensemble des présentes CGU.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Accès à la Plateforme</h2>
        <p>
          L’accès est ouvert à toute personne majeure ou autorisée.
          L’utilisateur doit disposer d’une connexion Internet et d’un terminal
          compatible. L’éditeur peut suspendre ou restreindre l’accès à tout
          moment, notamment en cas de maintenance ou de non-respect des
          conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. Description du service
        </h2>
        <ul className="list-disc pl-6">
          <li>Consulter la flotte de vaisseaux disponibles à la location</li>
          <li>Réserver un vaisseau selon ses caractéristiques</li>
          <li>Gérer ses réservations depuis son espace personnel</li>
          <li>Payer en ligne les frais de location</li>
        </ul>
        <p>
          La disponibilité est affichée en temps réel, sous réserve de
          validation finale.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Compte utilisateur</h2>
        <p>
          La création d’un compte est obligatoire pour réserver. L’utilisateur
          doit fournir des informations exactes. Il est responsable de ses
          identifiants et doit signaler toute utilisation frauduleuse.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Réservations et annulations
        </h2>
        <p>
          Les réservations sont effectives après paiement et confirmation par
          e-mail.
        </p>
        <p className="mt-2">Conditions d’annulation :</p>
        <ul className="list-disc pl-6">
          <li>Jusqu’à 48h avant : annulation gratuite</li>
          <li>Entre 48h et 24h : 50% remboursé</li>
          <li>Moins de 24h : aucun remboursement</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Utilisation des vaisseaux
        </h2>
        <p>L’utilisateur s’engage à :</p>
        <ul className="list-disc pl-6">
          <li>Respecter les consignes techniques du vaisseau</li>
          <li>Ne pas effectuer de transport illégal</li>
          <li>Restituer le vaisseau dans son état initial</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Responsabilité</h2>
        <p>
          Externatic n’est pas responsable des retards dus à des événements
          extérieurs (tempêtes solaires, etc.), de l’utilisation incorrecte d’un
          vaisseau ou de la perte de données embarquées.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Propriété intellectuelle
        </h2>
        <p>
          Tous les contenus sont protégés. Toute reproduction ou exploitation
          sans autorisation écrite est interdite.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Données personnelles</h2>
        <p>
          Les données sont traitées conformément à notre Politique de
          confidentialité. L’utilisateur peut exercer ses droits à tout moment.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          10. Modifications des CGU
        </h2>
        <p>
          Les CGU peuvent être modifiées à tout moment. L’utilisateur sera
          informé via la Plateforme. L’utilisation continue du service vaut
          acceptation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Droit applicable</h2>
        <p>
          Les CGU sont régies par le droit français. En cas de litige, les
          tribunaux de Paris sont compétents sauf disposition légale contraire.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">12. Contact</h2>
        <p>
          Pour toute question, contactez-nous :
          <br />📧{" "}
          <a
            href="mailto:support@externatic.space"
            className="text-blue-600 underline"
          >
            support@externatic.space
          </a>
          <br />📍 42, Rue des Étoiles, 69000 Lyon, France
        </p>
      </section>
    </section>
  );
}

export default Modality;
