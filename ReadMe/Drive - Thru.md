<h1 align="center">Drive-thru</h1>
<p align="center">Site drive thru</p>
## Descrição ℹ️

Site da Hand Talk destinado a deleção de dados dos users cadastrados no Hand Talk App
## Dependências 🚧

**É necessário** possuir o **[firebase](https://firebaseopensource.com/projects/firebase/firebase-tools/)** e estar devidamente **logado** no contexto da Hand Talk.
Para isso, faça:

- Logue no firebase

```bash
firebase login
```

Depois do firebase configurado, você vai precisar de mais duas ferramentas:

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
> Esse passo é **importante** e **precisa** ser executado **cada vez** que voce acessar esse projeto.

-  2.1 Caso o app seja seu produto principal, você pode definir essa versão do Node como padrão:

```bash
nvm alias default lts/iron
```

3. Agora, precisamos instalar as dependências do projeto:

```bash
yarn install | yarn
```

4. Com tudo pronto, podemos rodar nosso bundler:

```bash
yarn dev
```
## Comitando novas funções 📝

No drive-thru, utilizamos o padrão de commits e branches chamado conventional commits. Existe uma extensão para o VSCode que pode te auxiliar na adaptação e super recomendamos o uso da mesma. Com ela, seus commits vão ficar assim:

```
feat: create function to update password
```
> **feat** indica uma nova feature, recurso, componente ou coisas novas.

```
fix: bug in textInput at home
```
> **fix** é a correção de um bug ou erro de lógica.

Você pode saber mais na [documentação do conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Mudando a versão do drive-thru 🆕

Por padrão, vamos precisar fazer 1 alteração, no `package.json`.
### Mudando a versão no `package.json`:

Você vai encontrar o `package.json` na raiz do projeto. Entre nele e altere o valor da chave `version`:

```json
{
	"name": "drive-thru",
	"version": "Altere a versão aqui",
	...
}
```

## Realizando Deploys


## Passos finais 🎉

Lembre-se sempre de atualizar este `README.md` para cada nova atualização ou outras informações que forem necessárias.
