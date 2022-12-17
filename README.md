<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
</p>

## Microservices - NodeJs Arquitetura Service-Oriented

- Tecnologias Utilizadas
    - <strong>Nest.Js</strong>
    - <strong>Node.Js</strong>
    - <strong>Prisma.io</strong>
    - <strong>SQlite</strong>
    - <strong>Jest</strong>
<br>

## Como instalar o projeto - terminal
```bash
  -> open the terminal 

  $git clone https://github.com/fymorGod/notifications-service
  
  $cd notifications-service

  -> Open this folder on terminal

  $code .

  -> open terminal in VS Code
  $npm install

  -> Start Project

  $npm run start:dev 

  OBS: Do you can see in package.json others commands to start the project
```

---
## Caso de uso do Projeto
- Aplicação com o objetivo de enviar notificações ao usuário quando alguma operação acontecer.
- Seguindo com possíveis exemplos:
    - Um sistema de Chat, onde a mensagens enviadas chegam como notificação quando o usuário está tanto ativo ao uso do sistema quanto inativo.
    - Um sistema de fórum, onde cada atividade construída gera uma notificação. Afim de avisar ou informar sobre cada ação dentro do fórum.
<br>
---
<br>

## Conceitos 

<p>Dentro do projeto utiliza-se de conceitos escaláveis sobre o âmbito da tecnologia atual. Nesse momento, o princípio SOLID conhecido por fortes práticas na arquitura do software, tendo em vista os conceitos de<strong> Injeção de Dependências e Inversão de Dependências</strong>.
</p>
<p>
  Nesta aplicação, também há o DTO - Data Transfer Object, onde estes objetos tem sua objetividade centrada em <strong>carregar dados</strong> sem qualquer qualquer comportamento.
</p>
<br>

### | Essa classe tem apenas uma função, receber ou  padronizar os dados.
<br>

```bash
import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;

    @IsNotEmpty()
    @Length(5, 240)
    content: string;
    
    category: string;
}
```
___

## | Configurações dentro do projeto
### tsconfig.json

  ```bash
  {
    "compilerOptions": {
      "module": "commonjs",
      "declaration": true,
      "removeComments": true,
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "allowSyntheticDefaultImports": true,
      "resolveJsonModule": true,
      "target": "es2017",
      "sourceMap": true,
      "outDir": "./dist",
      "baseUrl": "./",
      "strict": true,
      "incremental": true,
      "skipLibCheck": true,
      "strictNullChecks": true,
      "noImplicitAny": false,
      "strictBindCallApply": false,
      "strictPropertyInitialization": false,
      "forceConsistentCasingInFileNames": false,
      "noFallthroughCasesInSwitch": false,
      "paths": {
        "@application/*": ["./src/application/*"],
        "@helpers/*": ["./src/helpers/*"],
        "@infra/*": ["./src/infra/*"],
        "@test/*": ["./test/*"]
      }
    }
}

  ```

  ### jest config

  ```bash
  import { Config } from 'jest';
  import { pathsToModuleNameMapper } from "ts-jest";
  import { compilerOptions } from './tsconfig.json';

  const config: Config = {
      "moduleFileExtensions": [
        "js",
        "json",
        "ts"
      ],
      "testRegex": ".*\\.spec\\.ts$",
      "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
      },
      "collectCoverageFrom": [
        "**/*.(t|j)s"
      ],
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),

      "coverageDirectory": "../coverage",
      "testEnvironment": "node"
    };

export default config;
  ```

  ###  | Alguns Patterns utilizados no projeto
  - Mappers
  - Factory Pattern - Utilizado em Testes

  ### Veficando erros nos códigos typescript

  ```bash
    -> Ele faz uma verificaçâo em todos os arquivos typescript dentro da aplicação.
    $npx tsc --noEmit

  ```

---

<br>

## | How to start tests in application - Como rodar os testes na aplicação

```bash
  -> Terminal

  // listen all tests
  $npm run test:watch

  // start only one test
  $ npm run test

  //coverage folder
  $npm run test:cov

  OBS: to many commands, access package.json
```