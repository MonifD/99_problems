## Do_a_barrel_roll

# Consigne

Ecrivez une fonction qui reçoit :

en premier paramètre un tableau d'entiers
en second paramètre un entier k
Votre fonction devra effectuer k rotations vers la gauche du tableau.

Une rotation correspond au décalage d'un cran vers la gauche de chaque élément du tableau : le second élément devient le premier, le troisième devient le second, ..., le premier devient le dernier.

La fonction `do_a_barrel_roll` réalise k rotations vers la gauche du tableau passé en paramètre numbers.

# information

Bien évidemment, votre algorithme peut effectuer les k rotations d'un coup, plutôt qu'une par une.

# contrainte

Votre solution devra avoir une complexité en temps de O(n), où n est la longueur du tableau reçu.

# Pour procéder

Voici comment fonctionne cette fonction :

La fonction reçoit un tableau d'entiers numbers et un entier k qui représente le nombre de rotations à effectuer.

Elle commence par une boucle for qui itère k fois. À chaque itération, une rotation vers la gauche est réalisée.

À chaque rotation, le premier élément du tableau est extrait avec la méthode shift(), ce qui permet de le retirer du début du tableau et de le stocker dans la variable firstElement.

Ensuite, cet élément extrait est ajouté à la fin du tableau avec la méthode push(). Ainsi, il devient le dernier élément du tableau.

Une fois que toutes les rotations ont été effectuées, la fonction affiche le tableau résultant dans la console.

La fonction parcourt chaque élément du tableau exactement une fois pour chaque rotation. Ainsi, le temps d'exécution total de la fonction est linéairement proportionnel à la taille du tableau, ce qui correspond à une complexité en temps de O(n).

# Exemples

[0, 1, 2, 3], 1 => [1, 2, 3, 0]
[0, 1, 2, 3], 2 => [2, 3, 0, 1]

# Lancement du code

Il faut d'abord décommenter les cas de test.

Ensuite, exécutez la commande suivante dans votre terminal :

node solution.js

[1, 2, 3, 0]
[2, 3, 0, 1]

Ces résultats correspondent aux sorties de la fonction do_a_barrel_roll pour les exemples de test fournis.cd
