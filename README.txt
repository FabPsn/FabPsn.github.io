INSTALLATION
============

- Necessite serveur XAMP/WAMP ou autre serveur APACHE/PHP
- Installer comme n'importe quel site web

PARTICULARITE
=============

1 - Administration de la feuille :

  -> L'administration de l'annuaire se fait via l'adressage ip de la feuille de relève.
     Ajouter [url releve]/admin

  -> La création de groupes de contacts est nécessaire à la création de contact.
     /!\ ATTENTION /!\
     La suppression d'un groupe de contacts ne supprime pas l'ensemble des contacts qui en dépendent.
     Les contacts restent dans le document XML.

  -> Changement du logo :
     La fonction de changement de logo n'est pas fonctionnelle.
     Il appartient à l'utilisateur de modifier ce dernier pour l'intégrer. Le fichier est le "logo_CROSS.jpg" à la racine de la page.
     Si vous changez de format, pensez à le faire également dans le fichier index.htm, largeur de l'image ne doit excéder 260px.
     Pensez également à modifier la couleur de fond dans le design.css
     

2 - Feuille de relève

  -> Les sections équipe de service, équipes de quart, et alertes aéro sont modifiables directement dans les tableaux.
  -> Le nom des aéronefs n'est modifiables que dans la feuille index.htm à partir de la ligne 130.
  -> Bug sur les listes déroulantes: elles necessites une première selection pour une mise à jour, 
     en effet le chargement de ces dernières n'entraine pas l'actualisation des champs dépendants.
     D'autre part, il est à prendre en compte que l'actualisation de l'annuaire n'est pas encore géré. 
     Préférez une incrémentation exhaustive avant utilisation de la feuille de relève, 
     alternativement, une actualisation de la feuille sera nécessaire.

		 
Actualisation automatique
=========================

L'actualisation des données se fait automatiquement par le biais de requêtes HTTP redondantes, pas besoin de faire d'actualisation, il faudra donc faire attention qu'il n'y ai pas de
fonctionnalité antispam sur le serveur pour que les requêtes ne soient pas bloquées, en effet au debut de l'élaboration du projet, il m'est apparut que l'actualisation ne se faisait 
plus automatiquement au bout de quelques minutes, en effet, le server détectant une menace dans les requêtes HTTP allongeait les temps de réponse.