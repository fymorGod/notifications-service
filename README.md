<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Microservices - NodeJs Arquitetura Service-Oriented

- Tecnologias Utilizadas
    - Nest.Js
    - Node.Js
    - Prisma.io
    - SQlite
    - Jest
---
<br>

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

  ```
  {
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
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
    "noFallthroughCasesInSwitch": false
     }
  }
  ```