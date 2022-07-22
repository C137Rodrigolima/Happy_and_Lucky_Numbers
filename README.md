# Teste Números Felizes e Sortudos

para rodar este exemplo:

- clone este arquivo.
- encontre a pasta do arquivo no seu PC.
- escreva no terminal do PC (ou do code editor preferido):
```
node app.js
``` 

Você verá no console o resultado esperado para os exemplos já implementados, e pode testar outros mais, caso queira.

## Comentários sobre a resolução:

- Utilizei o básico de uma implementação de loop com **While** para descobrir o se o número era um "Número Feliz".
- Para encontrar de maneira mais rápida o "Número Sortudo", levando em consideração que o Array de números sortudos já foi dado no enunciado da questão e que é um array **ordenado**, utilizei uma **Binary Seach**, mas poderia ter sido feito facilmente com o método **includes()** do Javascript.