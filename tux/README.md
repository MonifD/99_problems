# Fonction tux

## Description
La fonction `tux` prend en paramètre un tableau `numbers` contenant des entiers. Elle recherche un point de pivot dans le tableau et retourne l'indice de ce pivot. Un point de pivot est défini comme un index où tous les éléments à sa gauche sont inférieurs ou égaux à l'élément à cet index, et tous les éléments à sa droite sont supérieurs à cet élément. Si aucun pivot n'est trouvé, la fonction retourne -1.

## Implémentation
La fonction commence par vérifier si le tableau contient 2 éléments ou moins. Si c'est le cas, la fonction retourne -1 car il n'y a pas suffisamment d'éléments pour qu'il puisse y avoir un pivot.

Ensuite, la fonction initialise un tableau `rightMin` pour stocker les minimums de droite. Elle parcourt le tableau `numbers` de droite à gauche pour remplir ce tableau `rightMin` avec les minimums trouvés à partir de chaque index.

Ensuite, la fonction parcourt à nouveau le tableau `numbers` de gauche à droite. À chaque index, elle vérifie si l'élément à cet index est inférieur ou égal au minimum de droite à cet index. Si c'est le cas, elle retourne cet index comme point de pivot.

Si aucun pivot n'est trouvé pendant la boucle, la fonction retourne -1 pour indiquer qu'aucun pivot n'a été trouvé dans le tableau.

Analysons la complexité de cet algorithme.

La première partie du code a une complexité de O(n) où n est la taille du tableau d'entrée. Il parcourt le tableau une fois pour initialiser le tableau rightMin, ce qui prend un temps proportionnel à la taille du tableau.

Ensuite, il parcourt le tableau d'entrée une deuxième fois, ce qui prend également un temps linéaire.

Par conséquent, la complexité totale de cet algorithme est de O(n). Il s'agit donc d'un algorithme linéaire en fonction de la taille du tableau d'entrée.

## Complexité
La complexité de cette fonction est en O(n), où n est la longueur du tableau `numbers`. Cette complexité est satisfaisante car la fonction parcourt le tableau une seule fois pour remplir le tableau `rightMin` et une autre fois pour rechercher le pivot.

## Exemple

Pour utiliser cette fonction, vous pouvez l'importer dans votre projet JavaScript comme suit :

```javascript
const { tux } = require('./tux.js');

console.log(tux([])); // Output: -1
console.log(tux([1])); // Output: 0
console.log(tux([1,3])); // Output: 0
console.log(tux([1,1,1])); // Output: -1
console.log(tux([100, 97, 101, 109, 111, 110])); // Output: 1
console.log(tux([116, 117, 120])); // Output: 0
console.log(tux([97, 98, 97, 99, 117, 108, 101])); // Output: 1




