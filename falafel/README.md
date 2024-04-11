## falafel 

## Explication du sujet 
Le sujet était d'implémenter une fonction `falafel` qui vérifie si l'une des permutations possibles d'une chaîne de caractères est un palindrome.

## Description du code 
J'ai déclaré une fonction `falafel(s)`qui va parcourir toute la logique du code. En premier, j'ai crée un objet `charCount` qui va stocker le nombre de chaque caractère de la chaîne `s`.
Puis, déclarer un `let oddCount` == 0 pour initialisé le compteur à 0. Un premier boucle `for` pour parcourir la chaîne `s` et suivi de la deuxième boucle `for` , pour parcourir la valeur de la chaîne `s`, avec un opérateur `modulo (%)` pour vérifier si  le nombre est impair avec la condition `IF`. J'implémente une autre condition `IF` , pour savoir si `oddCount` est supérieur à 1 donc ça retourne un `FALSE` car cela qui signifie qu'il y a plus d'un caractère ayant un nombre impair d'occurrences.
Si `oddCount` est inférieur ou égal à 1 ça signifie qu'il permet d'avoir une permutation palindrome.

A la fin une `module export` pour exporter la la fonction `falafel` pour qu'elle soit utilisable dans d'autres fichiers javascript. 

## Approche choisie 
Nous avons choisi cette approche car elle permet de résoudre le problème de manière efficace en utilisant la logique des permutations des caractères pour déterminer si une chaîne peut être arrangée en un palindrome. En comptant le nombre d'occurrences de chaque caractère et en vérifiant si au plus un caractère a un nombre impair d'occurrences, nous pouvons déterminer si une permutation palindrome est possible. Donc, cette approche est simple à implémenter et garantit une complexité temporelle linéaire, ce qui la rend efficace pour traiter de grandes chaînes de caractères. De plus, elle satisfait pleinement les contraintes du sujet en permettant de détecter la possibilité de former un palindrome à partir d'une chaîne donnée.

## Compléxité 
La complexité de cette approche est linéaire, O(n), où n est la longueur de la chaîne donnée. Cela est dû au fait que nous parcourons la chaîne une fois pour compter les occurrences de chaque caractère, ce qui prend un temps proportionnel à la longueur de la chaîne.

## Tester le code 
```Javascript 

console.log(falafel("falafel")); 
console.log(falafel("lafela"));   
