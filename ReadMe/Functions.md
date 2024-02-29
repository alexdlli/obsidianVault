<h1 align="center">Functions</h1>
<p align="center">Microserviços da Hand Talk</p>
## Descrição ℹ️

Microserviços que atendem as **regras de negócios** relacionadas ao **Hand Talk Plugin** e **Hand Talk App**.

## Dependências 🚧

**É necessário** possuir o **[firebase](https://firebaseopensource.com/projects/firebase/firebase-tools/)** e estar devidamente **logado** no contexto da Hand Talk.

Para isso, faça:

1. Logue no firebase

```bash
firebase login
```

2. Instale as dependencias

```bash
npm i | npm install
```

## Como rodar o projeto 🔄

O **primeiro passo** é verificar os projetos que voce **tem acesso do firebase**

1. Execute para listar os projetos que voce tem acesso

```bash
firebase projects:list
```

> Voce precisa ter acesso a dois projetos `handtalk-firebase-dev` e `ht-fb-e3130`. Caso **não apareça** esses projeto, **peça permissão para o @RodrigoBastos**.

2. Para rodar o projeto execute:

```bash
npm run dev
```

> PS: No momento da escrita desse readme o processo de rodar o projeto de forma local **não esta funcionando**, assim que resolvido **atualize** esse `readme` com as informações necessárias para rodar o projeto, plis ^^

## Criando novas funções 📝

Escreva sua função dentro da estrutura da pasta `functions` e ao final adicione a mesma dentro do `index.ts` localizado dentro da pasta `src`, exemplo:

```typescript
import { somaDoisNumerosHandler } from "./functions/somaDoisNumeros";

// Importar no final do arquivo ou pos funções de schedule
/**
 * Soma dois números
 * Utilizada para somar dois números inteiros no app
 */
export const somaDoisNumeros = functions
  .runWith({ timeoutSeconds: 540 })
  .https.onRequest(somaDoisNumerosHandler);
```

## Testando ✅

Agora precisamos selecionar o **ambiente de stage** para testar enviar a função para os testes.

1. Rode o script de build para validar os erros e gerar o arquivo dist

```bash
npm run build
```

2. Usando o seu firebase cli execute:

```bash
firebase use handtalk-firebase-dev
```

3. Agora envie a function para o ambiente de dev com o comando:

```bash
firebase deploy --only functions:somaDoisNumeros
```

> Lembrando que aqui voce deve usar o nome da função criada no passo anterior

3. Teste a função e siga para o passo de produção

## Produção ✨

Agora que a sua função esta **devidamente testada**, e pos a **aprovação** do seu **PR**, voce pode subir a sua alteração para produção

1. Usando o seu firebase cli execute

```bash
firebase use ht-fb-e3130
```

> Isso vai alterar seu ambiente para produção

2. Agora envie a function para o ambiente de produção com o comando:

```bash
firebase deploy --only functions:somaDoisNumeros
```

> Lembrando que aqui voce deve usar o nome da função criada no passo anterior

## Passos finais 🎉

Lembre-se sempre de atualizar esse `readme.md` para cada nova atualização no firebase cli, ou outras informações que forem necessárias, alem de atualizar a **version** no `package.json` ^^
