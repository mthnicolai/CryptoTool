import { dictionary } from './dictionary.js';

import readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';

// Criar a interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  const reversedDictionary = {};
for (const key in dictionary) {
    reversedDictionary[dictionary[key]] = key;
};

function printAlphabet() {
    console.log(chalk.yellow("\n🔐 Alfabeto e seus valores criptografados:"));
    for (const key in dictionary) {
        console.log(chalk.magenta(`${key} -> ${dictionary[key]}`));
    }
    console.log(""); 
};

function showTitle() {
    console.clear();
    console.log(chalk.bold(figlet.textSync("CryptoTool", { font: "Big" })));
    console.log(chalk.blue.bold("Bem-vindo ao programa de criptografia de texto!\n"));
}

function showMainMenu(){
    showTitle();
    askToShowAlphabet();
    handleChoice()

};

function handleChoice(){

    rl.question("Deseja criptografar ou descriptografar?(criptografar = 1/descriptografar = 2):", (response_s) =>{
        if (response_s.toLocaleLowerCase()=== "1") {
            Cryptography();
        } else if(response_s.toLocaleLowerCase()=== "2") {
            decrypt();
        } else{
            console.log(chalk.red.bold("Opção invalida! Apenas 1 ou 2!\n"))
            handleChoice();
        }
    })
};

function exitProgram(){
    rl.question(chalk.yellow.bold("Deseja fechar o programa?(Sim = s/ Não = n):"), response_c2 =>{
        if (response_c2.toLocaleLowerCase() === "s") {
            console.log(chalk.blue.bold("🚀 Programa encerrado. Obrigado por usar o CryptoTool!")); 
            rl.close();           
        } else if(response_c2.toLocaleLowerCase()=== "n") {
            handleChoice();
        } else{
            console.log(chalk.red.bold("Opção invalida! Apenas S ou N!\n"))
            exitProgram();
        }
    })

    };

    function askToShowAlphabet(){
        rl.question(chalk.yellow.bold("Deseja ver nosso alfabeto?\n"), (responce_p) =>{
            if (responce_p.toLocaleLowerCase()=== "s") {
                printAlphabet();
                handleChoice();
            } else if(responce_p.toLocaleLowerCase()=== "n") {
                handleChoice();
            } else {
                console.log(chalk.red.bold("Opção invalida! Apenas S ou N!\n"))
                askToShowAlphabet();
            }
        })
    };

function Cryptography(text){
    
    rl.question(chalk.blue.bold("Insira o texto que deseja criptografar:\n"), (response_c) =>{
        let result = '';
  
        for (let char of response_c) {// Verifica se o caractere está no dicionário
          result += dictionary[char] || char; // Se não estiver, mantém o mesmo
        }
      console.log(chalk.green.bold("Texto criptografado:", result))

      exitProgram();

    })
    
};

function decrypt() {
    rl.question(chalk.blue.bold("Insira o texto que deseja descriptografar:\n "), (response_d) => {
        let result = '';
        let buffer = '';

        for (let char of response_d) {
            buffer += char; // Juntando os caracteres

            if (reversedDictionary[buffer]) { // Se a sequência existir no dicionário reverso
                result += reversedDictionary[buffer]; // Adiciona a letra descriptografada
                buffer = ''; // Reseta o buffer
            }
        }

        console.log(chalk.green.bold("Texto descriptografado:", result));
        exitProgram();
        
            }
)};



showMainMenu();