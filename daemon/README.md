
# Fonction daemon

## Description

Daemon est une fonction qui prend un tableau de nombres et un indice k en entrée. Elle vérifie si l'élément à l'indice k est supérieur ou égal à tous les éléments précédents et inférieur ou égal à tous les éléments suivants. Si cette condition est vraie, la fonction renvoie true; sinon, elle renvoie false.

## Fonctionnement 

La fonction prend un tableau de nombres `numbers`èset un indice (k) comme arguments.
Elle récupère la valeur de l'élément à l'indice k dans le tableau, car c'est cet élément que nous devons vérifier.
Ensuite, elle parcourt les éléments avant et après l'indice k pour vérifier si la valeur à l'indice k est plus grande que tous les éléments avant et plus petite que tous les éléments après.
Si elle trouve un élément avant k plus grand que la valeur à k, ou un élément après k plus petit que la valeur à k, elle retourne false.
Si aucune de ces conditions n'est vérifiée, elle retourne true, indiquant que la condition est satisfaite.


## Complexité 

La complexité de la fonction `daemon` est linéaire par rapport à la taille du tableau `numbers`, ce qui signifie qu'elle a une complexité en temps de O(n), où n est la longueur du tableau.

L'algorithme itère une fois à travers les éléments avant l'indice k et une fois à travers les éléments après l'indice k. Dans chaque itération, il effectue une comparaison avec l'élément à l'indice k, ce qui prend un temps constant.

Puisque la fonction ne fait qu'itérer à travers le tableau une seule fois sans itérations imbriquées ou d'autres opérations coûteuses, sa complexité temporelle est proportionnelle à la taille du tableau, soit O(n). Cela rend la fonction efficace pour de grandes entrées, car son temps d'exécution ne croît pas de manière significative avec la taille du tableau.

Cette efficacité permet d'utiliser la fonction daemon de manière optimale même avec des tableaux de données volumineux, ce qui la rend particulièrement adaptée à des applications nécessitant des performances élevées.

# pour testé 
```Javascript 
console.log(daemon([100, 97, 101, 109, 111, 110], 1)); `false`
console.log(daemon([100, 97, 101, 109, 111, 110], 2)); `true`
console.log(daemon([100, 97, 101, 109, 111, 110], 3)); `true`