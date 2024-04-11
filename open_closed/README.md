# open_closed

## Description
Ce code implémente une fonction `open_closed` qui prend une chaîne de caractères en entrée contenant n'importe quelle combinaison de parenthèses, de crochets ou de guillemets (simples ou doubles). Et retourne un résultat booléen après avoir vérifier que chaque caractère "ouvrant" de la chaîne possède bien un caractère "fermant" correspondant situé après lui dans la chaîne (et inversement : tout caractère "fermant" doit posséder un caractère "ouvrant" correspondant situé avant lui).

Si c'est bien le cas, elle devra retourner true. Sinon, elle devra retourner false.

Par exemple, si nous avons "()" en entrée, la sortie sera "true", car nous avons dans la chaîne un caractère "ouvrant" suivi d'un "fermant", alors que "(()" en entrée,la sortie sera "false", car un des caractère "ouvrant" n'a pas de caractère "fermant".  

## Implémentation
La fonction commence par initialiser dictionnaire d'occurences `brackets`, un compteur pour tout les caractères, "ouvrant".

## Approche choisie
Pour l'implémentation de la fonction `open_closed`, l'approche a été choisie pour sa simplicité, sa lisibilité et son efficacité. L'algorithme offre une complexité temporelle linéaire, ce qui le rend efficace même pour de grandes entrées. En parcourant la chaîne de caractgère, la fonction commence par sépare la chaîne de caractères entrer en caractères simple et les stock dans 
une liste. 

Ensuite, la fonction itère sur le tableau à l'aide d'une boucle `for`. Pour chaque élément, elle compte les caractères 'ouvrant' à l'aide du compteur `brackets`.

Puis elle vérifi si le compte des caractères 'ouvrant' est à 0 quand on rencontre un caractères 'fermant', la fonction rend 'false', si non si le compte est suppérieur à 0 on continu est on supprime 1 du compteur des caractères 'ouvrant', ce qui nous permet de passer au caractère suivant. 

Et fini par simplement compter les guillemts simples et doubles, si rencontrer.

Enfin, la fonction retourne true, en fonction du compteur si tout ses valeurs sont égale à 0, ou la division par 2 n'a pas de reste vérifier avec le 'modulo 2' '%2', le modulo 2 nous permet de savoir si on a un numbre paire de guillemets et donc tout les guillemets ouvert sont fermer.

## Complexité 
La complexité de cette fonction est linéaire, O(n), où n est la longueur du chaîne de caractère d'entrée. Cette complexité est due à la simple itération à travers le tableau une seule fois.

## Pour tester le code
```javascript

console.log(open_closed("(test)")); // true
console.log(open_closed("(])"));    // false
console.log(open_closed("]["));     // false
console.log(open_closed("([])"));   // true
console.log(open_closed("("));      // false
console.log(open_closed("(()"));    // false
