INSTALLATION
============

- Necessite serveur XAMP/WAMP ou autre serveur APACHE/PHP
- Installer comme n'importe quel site web

PARTICULARITE
=============

1 - Administration de la feuille :

  -> L'administration de l'annuaire se fait via l'adressage ip de la feuille de rel�ve.
     Ajouter [url releve]/admin

  -> La cr�ation de groupes de contacts est n�cessaire � la cr�ation de contact.
     /!\ ATTENTION /!\
     La suppression d'un groupe de contacts ne supprime pas l'ensemble des contacts qui en d�pendent.
     Les contacts restent dans le document XML.

  -> Changement du logo :
     La fonction de changement de logo n'est pas fonctionnelle.
     Il appartient � l'utilisateur de modifier ce dernier pour l'int�grer. Le fichier est le "logo_CROSS.jpg" � la racine de la page.
     Si vous changez de format, pensez � le faire �galement dans le fichier index.htm, largeur de l'image ne doit exc�der 260px.
     Pensez �galement � modifier la couleur de fond dans le design.css
     

2 - Feuille de rel�ve

  -> Les sections �quipe de service, �quipes de quart, et alertes a�ro sont modifiables directement dans les tableaux.
  -> Le nom des a�ronefs n'est modifiables que dans la feuille index.htm � partir de la ligne 130.
  -> Bug sur les listes d�roulantes: elles necessites une premi�re selection pour une mise � jour, 
     en effet le chargement de ces derni�res n'entraine pas l'actualisation des champs d�pendants.
     D'autre part, il est � prendre en compte que l'actualisation de l'annuaire n'est pas encore g�r�. 
     Pr�f�rez une incr�mentation exhaustive avant utilisation de la feuille de rel�ve, 
     alternativement, une actualisation de la feuille sera n�cessaire.

		 
Actualisation automatique
=========================

L'actualisation des donn�es se fait automatiquement par le biais de requ�tes HTTP redondantes, pas besoin de faire d'actualisation, il faudra donc faire attention qu'il n'y ai pas de
fonctionnalit� antispam sur le serveur pour que les requ�tes ne soient pas bloqu�es, en effet au debut de l'�laboration du projet, il m'est apparut que l'actualisation ne se faisait 
plus automatiquement au bout de quelques minutes, en effet, le server d�tectant une menace dans les requ�tes HTTP allongeait les temps de r�ponse.