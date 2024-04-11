# Fonction Roger Rabbit

## Description
La fonction `roger_rabbit` implémentée dans ce code prend en entrée un entier `n`. Elle génère une séquence de chaînes binaires jusqu'à la valeur `n` et retourne cette séquence dans un tableau.

## Implémentation
La fonction commence par initialiser un tableau vide `result`. Ensuite, elle itère de 1 à `n`. Pour chaque itération, elle convertit l'indice actuel en binaire en utilisant une boucle `while`. À chaque itération, elle divise l'indice par 2 et ajoute le reste binaire à la chaîne `binary`. Une fois que le calcul binaire est terminé, la chaîne `binary` est ajoutée au tableau `result`. Si l'indice est 0, alors '0' est ajouté au tableau.

Enfin, la fonction retourne le tableau `result` contenant la séquence de chaînes binaires.

## Approche choisie
Cette approche a été choisie pour sa simplicité et son efficacité. En utilisant une boucle simple pour itérer de 1 à `n`, la fonction convertit chaque nombre en binaire de manière itérative. Cela évite la nécessité de stocker toutes les valeurs binaires jusqu'à `n` en mémoire, ce qui pourrait être coûteux en termes de ressources pour de grandes valeurs de `n`.

## Complexité
La complexité de cette fonction est linéaire, O(n), où n est la valeur de `n`. Cette complexité est satisfaisante car l'algorithme itère simplement sur chaque nombre jusqu'à `n` et effectue une opération de conversion binaire à chaque itération. Ainsi, la fonction peut gérer des valeurs de `n` importantes de manière efficace.

## Pour tester le code
Pour tester le fonctionnement de la fonction `roger_rabbit` :

```javascript
let n = 3;
console.log(roger_rabbit(n));
