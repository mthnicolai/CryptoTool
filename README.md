# CryptoTool

CryptoTool é uma aplicação CLI (Command Line Interface) desenvolvida em Node.js que permite criptografar e descriptografar mensagens utilizando um dicionário personalizado de substituição de caracteres. 

##  Funcionalidades

- Exibir o alfabeto e seus valores criptografados
- Criptografar textos com base em um dicionário de substituição
- Descriptografar textos utilizando o dicionário reverso
- Interface interativa no terminal utilizando readline
- Uso de bibliotecas como `chalk` para estilização e `figlet` para exibição do título

##  Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript
- **readline**: Módulo para entrada e saída no terminal
- **chalk**: Biblioteca para colorir a saída no terminal
- **figlet**: Biblioteca para gerar texto ASCII estilizado

##  Como Utilizar

1. **Clone este repositório:**
   ```sh
   git clone https://github.com/mthnicolai/CryptoTool.git
   ```

2. **Acesse a pasta do projeto:**
   ```sh
   cd CryptoTool
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Execute o programa:**
   ```sh
   node index.js
   ```

##  Como Funciona

###  Exibir o Alfabeto Criptografado
Ao iniciar o programa, o usuário pode visualizar o alfabeto e seus valores criptografados antes de prosseguir com a criptografia ou descriptografia.

###  Criptografia
O programa solicita um texto para criptografar e substitui cada caractere pelo valor correspondente no dicionário. Caso o caractere não esteja no dicionário, ele permanece inalterado.

###  Descriptografia
O usuário insere um texto criptografado, e o programa converte cada conjunto de caracteres de volta ao seu valor original utilizando um dicionário reverso.

##  Problemas Encontrados e Soluções

###  Loop infinito em opções inválidas
- **Problema:** O usuário poderia inserir opções inválidas, causando erros ou loops inesperados.
- **Solução:** Implementação de validações e recursividade para reexibir as opções caso a entrada não seja válida.

###  Identificação correta de caracteres na descriptografia
- **Problema:** A descriptografia não funcionava corretamente, pois os caracteres eram processados um a um.
- **Solução:** Implementação de um buffer temporário que armazena os caracteres até formar uma combinação válida no dicionário reverso.

##  Estrutura do Código

O código é organizado da seguinte forma:

- **`index.js`**: Arquivo principal que gerencia a execução do programa
- **`dictionary.js`**: Contém o dicionário de substituição de caracteres

##  Exemplo de Uso

```
🚀 CryptoTool
Bem-vindo ao programa de criptografia de texto!

Deseja ver nosso alfabeto? (s/n): s
🔐 Alfabeto e seus valores criptografados:
a -> @
b -> #
c -> $
...

Deseja criptografar ou descriptografar um texto? (1 - Criptografar / 2 - Descriptografar): 1
Insira o texto que deseja criptografar: hello
Texto criptografado: &3!!9

Deseja fechar o programa? (s/n): s
🚀 Programa encerrado. Obrigado por usar o CryptoTool!
```

##  Possiveis Melhorias
- Implementar suporte a diferentes métodos de criptografia
- Adicionar opção para salvar textos criptografados em arquivos
- Criar uma interface gráfica para facilitar o uso

##  Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!
