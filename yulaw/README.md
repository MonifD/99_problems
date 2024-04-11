# yulaw

## Description
La fonction `yulaw` implémente un algorithme pour retourner une chaîne de caractères contenant uniquement les caractères uniques présents dans la chaîne d'entrée.

Elle prend un seul paramètre en entrée : 
- `s`: une chaîne de caractères dans laquelle nous recherchons les caractères uniques.

La fonction parcourt la chaîne de caractères et utilise un objet pour stocker le nombre d'occurrences de chaque caractère. Ensuite, elle retourne une chaîne de caractères composée des clés de l'objet, ce qui représente les caractères uniques de la chaîne d'entrée.

## Implémentation
La fonction commence par initialiser un objet vide `occurrences` pour stocker les occurrences de chaque caractère.

Ensuite, elle utilise la méthode `split('')` pour diviser la chaîne de caractères `s` en un tableau de caractères individuels. 

Elle parcourt ensuite ce tableau de caractères à l'aide d'une boucle `for...of`. Pour chaque caractère, elle vérifie s'il existe déjà dans l'objet `occurrences`. Si c'est le cas, elle incrémente le compteur d'occurrences de ce caractère. Sinon, elle initialise le compteur à 1.

Enfin, la fonction retourne une chaîne de caractères composée des clés de l'objet `occurrences`, ce qui représente les caractères uniques de la chaîne d'entrée.

## Complexité
La complexité de cette fonction dépend de la longueur de la chaîne d'entrée `s`. La création de l'objet `occurrences` prend un temps proportionnel à la longueur de la chaîne, de même que le parcours de la chaîne pour compter les occurrences de chaque caractère. Ainsi, la complexité temporelle est linéaire, O(n), où n est la longueur de la chaîne d'entrée.

## Pour tester la fonction
Pour tester la fonction `yulaw`, vous pouvez décommenter les exemples d'utilisation dans le code en retirant les barres obliques (`//`) devant les appels de fonction, puis exécuter le fichier.
