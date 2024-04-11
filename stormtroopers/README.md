# Fonction Stormtroopers

## Description
Dans le sujet, on nous a demandé de créer une fonction `stormtroopers` qui prend une liste d'entiers en entrée et renvoie une nouvelle liste contenant uniquement les nombres qui apparaissent une seule fois dans la liste originale. Le prototype de la fonction nous a été fourni et nous avons choisi JavaScript comme langage.

## Implémentation
J'ai défini la fonction `stormtroopers` qui prend en paramètre une liste de nombres entiers.

Ensuite, j'ai commencé par initialiser un objet `countMap`, qui est utilisé pour compter les occurrences de chaque nombre dans la liste `numbers`. J'ai ensuite utilisé une boucle `for` pour parcourir la liste `numbers` et mettre à jour le comptage dans `countMap`. Cette approche est basée sur la création d'un objet de comptage pour stocker le nombre d'apparitions de chaque élément dans la liste d'entrée (liste originale). Enfin, j'ai parcouru cet objet de comptage pour construire la nouvelle liste contenant les éléments avec une seule apparition.

Après avoir compté les occurrences, j'ai parcouru à nouveau `countMap` pour sélectionner les nombres qui n'apparaissent qu'une seule fois et les stocker dans un tableau `result`. Enfin, j'ai retourné ce tableau `result`, contenant la liste des nombres uniques qui n'apparaissent qu'une seule fois dans la liste d'origine.

## L'approche choisie
L'algorithme utilise deux boucles pour parcourir la liste de nombres et l'objet de comptage. Bien que ces boucles ne se chevauchent pas, elles s'exécutent en séquence, ce qui permet à l'algorithme de maintenir une complexité temporelle linéaire par rapport à la taille de la liste de nombres entrée, satisfaisant ainsi la contrainte de complexité temporelle O(n). Cette approche réduit le nombre de passages sur la liste, ce qui contribue à l'efficacité de l'algorithme. De plus, en utilisant un objet de comptage, nous pouvons compter les apparitions de chaque nombre de manière efficace avant de filtrer les nombres uniques.

Cette méthode est relativement facile à maintenir. Une fois l'algorithme mis en place, il est peu probable qu'il nécessite des modifications majeures à l'avenir, à moins que les exigences du problème ne changent de manière significative.

## La complexité
Nous avons trouvé que la complexité temporelle de cette solution est de O(n), où n est la longueur du tableau `numbers` reçu en paramètre. Cette complexité est atteinte car le temps d'exécution de la fonction est proportionnel à la taille de l'entrée, ce qui satisfait aux contraintes du sujet.

## Pour tester le code 
```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const result = stormtroopers(numbers);
console.log(result); 
