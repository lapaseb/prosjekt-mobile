![Prosjekt](http://visitapp.ch/images/logo_prosjekt.png)

#Mise en place de l'environnment de développement

1. Installation de NodeJS -> https://nodejs.org/
2. [Facultatif] Installation de GitHub Desktop -> https://desktop.github.com/
3. Installer Bower, Gulp, Cordova et ionic : `npm install -g bower gulp cordova ionic`

##Récupération de l'application et initialisation des outils de développement (bower, gulp, sass)

1. Sur GitHub Desktop -> Bouton "+" en haut à gauche -> clone -> lapaseb/prosjekt-mobile -> séléctionner le dossier de destination

2. Executer les commandes suivantes dans le terminal. Controlez que vous travaillez dans le dossier de l'application.

<pre>npm install bower gulp gulp-concat gulp-minify-css gulp-rename gulp-sass gulp-util shelljs
ionic setup sass
bower update
ionic serve --lab</pre>

Un onglet dans votre navigateur devrait s'ouvrir avec votre application.

##Build de l'application sur Android

1. Exécuter la commande suivante

<pre>
ionic platform add android
ionic build android
</pre>