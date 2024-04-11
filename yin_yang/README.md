# Fonction yin_yang

## Description

La fonction `yin_yang` vérifie si chaque caractère "ouvrant" dans une chaîne de caractères possède un caractère "fermant" correspondant situé après lui dans la chaîne, et si les paires de caractères sont correctement imbriquées. Elle prend également en charge les guillemets simples et doubles.

Si c'est bien le cas, elle retourne true. Sinon, elle retourne false.

## Contrainte

La fonction `yin_yang` garantit que chaque caractère "ouvrant" de la chaîne possède un caractère "fermant" correspondant situé après lui dans la chaîne, et que les paires de caractères correspondants sont correctement imbriquées. De plus, elle a une complexité en temps de O(n), où n est la longueur de la chaîne reçue.

## Implémentation

La fonction `yin_yang` utilise une approche de pile pour vérifier la validité des parenthèses, crochets, accolades et guillemets dans une chaîne donnée. Elle parcourt la chaîne caractère par caractère, en utilisant une pile pour suivre les caractères "ouvrants" rencontrés. Lorsqu'elle rencontre un caractère "fermant", elle vérifie s'il correspond au caractère "ouvrant" au sommet de la pile. Si c'est le cas, elle retire le caractère du sommet de la pile. À la fin du parcours de la chaîne, si la pile est vide, cela signifie que toutes les paires de caractères sont correctement imbriquées, et la fonction retourne true, sinon elle retourne false.

## Complexité

La complexité temporelle de cette solution est de O(n), où n est la longueur de la chaîne reçue en paramètre. Cette complexité est atteinte car le temps d'exécution de la fonction est proportionnel à la taille de l'entrée, ce qui satisfait aux contraintes du sujet.

## Pour tester le code

```javascript
const result = yin_yang(s);
console.log(result);
```
