# Configuração do Ambiente

Branch => **develop-life**

Necessario instalar as seguintes ferramentas:

1. NodeJS => **v10.+**
2. Visual Studio Code

## Configurando o FRONTEND

Necessário abrir o projeto no **VSCODE**, e instalar as recomendações de extensões que aparecer no canto inferior direito. Logo depois rodar o comando para instalar as dependências:

```
npm install --verbose
```

Para subir o frontend rode o seguinte comando:

```
npm start
```

No seu navegador apenas acesse a url `http://localhost:4200`.

## Adicionar os atalhos no sidebar (menu)

Dentro de `src/app/navigation/navigation.ts` será adicionado os menu que aplicação irá precisar. Por default já tem um exemplo, que é a rota de `/inicio`.

## Parametrização do sistema

No arquivo `src/environments/environment.ts` deve ser informado os dados do sistema, como nome, ministerio, e entre outros.

## Comandos NG Cli

Para criar um componente:

```
ng g c nome-do-componente
```

Para criar uma directiva:

```
ng g d nome-da-diretiva
```

Para criar um pipe:

```
ng g p nome-do-filtro
```

Para criar um service:

```
ng g s nome-do-servico
```

Para criar um module:

```
ng g m nome-do-module
```

Caso queria criar algum desses em alguma path personalizada, apenas passar antes do nome-do-... a path de onde você deseja criar.

Links de apoio:

[Sobre o GitFlow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

[Como usar GitFlow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)

[FlexLayout](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

[FlexLayout](https://github.com/angular/flex-layout/wiki/Responsive-API)

[Angular Material](https://material.angular.io/components/categories)

[NgRx](https://ngrx.io/guide/store)
