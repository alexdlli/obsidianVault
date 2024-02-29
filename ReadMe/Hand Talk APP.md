<h1 align="center">Hand Talk APP</h1>
<p align="center">App da Hand Talk</p>
## Descrição ℹ️

Aplicativo da Hand Talk construído em React Native.
## Dependências 🚧

Caso ainda não tenha o seu ambiente de React Native configurado, **recomendamos** que consulte essa [Documentação](https://react-native.rocketseat.dev/) e siga todos os passos, principalmente com versões específicas.

> Depois do ambiente configurado, você vai precisar de mais duas ferramentas:

1. [Nvm](https://github.com/nvm-sh/nvm)
2. [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Como rodar o projeto 🔄

Vamos começar definindo a instalação da versão do Node para o projeto.

1. Execute para instalar a versão do Node definida no arquivo `.nvmrc`:

```bash
nvm install
```

2. Agora, use a versão do Node do projeto:

```bash
nvm use
```

-  2.1 Caso o app seja seu produto principal, você pode definir essa versão do Node como padrão:

```bash
nvm alias default
```

3. Agora, precisamos instalar as dependências do projeto:

```bash
yarn install
```

4. Vamos validar se seu ambiente está correto:

```bash
npx react-native doctor
```
>Este passo é importante para validar se seu ambiente está correto. Se tiver dúvidas, sinta-se à vontade para chamar qualquer um da equipe do app para auxiliar.

5. Vamos instalar as dependências do iOS:

```bash
cd ios && pod install && cd ../
```

6. Com tudo pronto, podemos rodar nosso bundler:

```bash
yarn start
```

7. Em outro terminal, rode o comando da plataforma que deseja iniciar:
	> Caso não tenha definido a versão do app do Node como padrão vai precisar rodar um `nvm use` novamente
	
```bash
yarn android || yarn ios
```
## Comitando novas funções 📝

No app, utilizamos o padrão de commits e branches chamado conventional commits. Existe uma extensão para o VSCode que pode te auxiliar na adaptação e super recomendamos o uso da mesma. Com ela, seus commits vão ficar assim:

```
feat: create function to update password
```
> **feat** indica uma nova feature, recurso, componente ou coisas novas.

```
fix: bug in textInput at home
```
> **fix** é a correção de um bug ou erro de lógica.

Você pode saber mais na [documentação do conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Testes unitarios ✅

Enquanto não temos um CI, precisamos rodar testes de forma local

1. Rode o script de testes:

```bash
yarn test
```

Estamos criando uma cultura de testes no app, então sempre que possível, **incremente os testes**.

## Testes do APP ✨

Depois de fazer alterações grandes no App, precisamos liberar para **testes internos**.

-  Para a galera do android, você vai precisar de um **apk**. Você consegue gerar um assim:

```bash
yarn apk
```
>Com esse apk voce pode compartilhar com o pessoal via chat, colocando o apk dentro do drive de APKs 

- Para o iOS, temos um pouco mais de dificuldade, e você vai precisar de permissões dentro do dash da Apple da HT. Você pode acompanhar esse processo diretamente na [documentação do RN](https://reactnative.dev/docs/publishing-to-app-store).

## Mudando a versão do APP 🆕

Por padrão, vamos precisar fazer 3 alterações, duas em arquivos e uma no xcode.

### Mudando a versão no `package.json`:

Você vai encontrar o `package.json` na raiz do projeto. Entre nele e altere o valor da chave `version`:

```json
{
	"name": "handtalk",
	"version": "Altere aqui a versão",
	...
}
```
### Mudando a versão no android

Você vai precisar navegar na seguinte estrutura de pastas: `android/app/build.gradle`. Dentro desse arquivo, navegue até a opção _**defaultConfig**_ e altere os valores das chaves `versionCode` e `versionName`:

```gradle
defaultConfig {
	...
	versionCode 313 // Incremente em 1 esse número
	
	versionName "Altere aqui a versão"
	...
}
```

### Mudando a versão do IOS

Como sempre, a Apple deixa esse processo depender do Xcode. Para isso, você pode olhar diretamente na [documentação da Apple](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution/#Set-the-supported-destinations) sobre como atualizar a `version` e `build string`, ou pergunte para alguém do time de app.
## Passos finais 🎉

Lembre-se sempre de atualizar este `README.md` para cada nova atualização ou outras informações que forem necessárias.
