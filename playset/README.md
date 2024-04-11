### PLAYSET

## Consigne

La fonction `playset` est une fonction Javascript qui a pour objectif de vérifier la présence de doublons dans une chaîne de caractères s. Si des caractères sont répétés, la fonction renvoie true, sinon elle renvoie false.

## contrainte

la contrainte de la fonction `playset` parcourir la chaîne de caractères une seule fois. À chaque itération de la boucle, l'algorithme effectue des opérations constantes comme l'accès et la mise à jour du dictionnaire d'occurrences. Ces opérations constantes permettent de maintenir une complexité en temps de O(n) car elles ne dépendent pas de la taille de la chaîne de caractères.

En conclusion, la fonction playset doit être optimisée pour parcourir la chaîne de caractères de manière efficace, en maintenant un dictionnaire d'occurrences pour vérifier la présence de doublons. Cette approche assure une complexité en temps de O(n), assurant ainsi des performances optimales pour des chaînes de caractères de différentes longueurs.

## implementation

la fonction playset a une complexité en temps de O(n), ce qui en fait une approche efficace pour déterminer si une chaîne de caractères contient des caractères en double, en parcourant la chaîne une seule fois.
A chaque itération de la boucle, elle effectue des opérations constantes comme l'accès et la mise à jour du dictionnaire `occurrences`.

# Pour procéder

J'ai initialisé un dictionnaire vide, puis j'ai séparé la chaîne en caractères. Pour chaque caractère, je vérifie s'il est présent dans le dictionnaire. Si c'est le cas, j'incrémente sa valeur de 1 ; sinon, je le déclare avec une valeur de 1.

# Exemples

playset("abcde") renvoie false
playset("abbcdde") renvoie true
playset("abcdeab") renvoie true

# Lancement du code

Il faut d'abord décommenter les cas de test.

Ensuite, exécutez la commande suivante dans votre terminal :

node solution.js

Le code sera exécuté et vous obtiendrez le résultat suivant :

    false;
    true;
    true;
