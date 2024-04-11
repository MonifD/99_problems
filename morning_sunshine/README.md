# morning_sunshine

## Description
Ce code implémente une fonction `morning_sunshine` qui prend un tableau de nombres en entrée et retourne un nouveau tableau contenant les nombres dans l'ordre inverse, mais uniquement les nombres qui sont strictement plus grands que tous les nombres précédents dans le tableau.

Par exemple, si nous avons [12, 3, 22, 2, 4], la sortie sera [22, 12, 4], car 22 est plus grand que tous les nombres précédents, et 12 est plus grand que tous les nombres précédents à partir de 3. Et 4 est pris en compte car il est plus grand que le chiffre d'après ( qu'il n'y a pas). 

## Implémentation
La fonction commence par initialiser `max_value` à `-Infinity`et crée un tableau vide result pour stocker les nombres sélectionnés.

## Approche choisie
Pour l'implémentation de la fonction morning_sunshine, l'approche a été choisie pour sa simplicité, sa lisibilité et son efficacité. L'algorithme offre une complexité temporelle linéaire, ce qui le rend efficace même pour de grandes entrées. En parcourant le tableau d'entrée de la fin au début, la fonction conserve uniquement les éléments qui sont strictement plus grands que les précédents, ce qui reflète directement le problème posé. De plus, cette approche utilise un minimum de mémoire supplémentaire, ce qui optimise l'utilisation des ressources système.

Ensuite, la fonction itère sur le tableau d'entrée en sens inverse à l'aide d'une boucle `for`. Pour chaque élément, elle compare le nombre actuel avec `max_value`. Si le nombre est plus grand, il est ajouté à `result` et max_value est mis à jour. Cela garantit que seuls les nombres plus grands que ceux précédemment rencontrés sont inclus dans le résultat.

Enfin, la fonction retourne le tableau `result`, inversé, car les résultats sont collectés à l'envers pendant l'itération.

## Complexité 
La complexité de cette fonction est linéaire, O(n), où n est la longueur du tableau d'entrée. Cette complexité est due à la simple itération à travers le tableau une seule fois.

## Pour tester le code
```javascript
console.log(morning_sunshine([12, 3, 5, 2, 4])); 
console.log(morning_sunshine([5, 4, 3, 2, 1])); 
console.log(morning_sunshine([1, 2, 3, 4, 5])); 