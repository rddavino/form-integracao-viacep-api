
# Formulário integrado com API ViaCep 

![Formulário integrado com API ViaCep](https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-novas-entradas_114360-5261.jpg?t=st=1723855808~exp=1723859408~hmac=ba14d9dc837bcf626a4dd33c6f0479347fb71d85423f8e45ede429ae1a6b38ac&w=996)

Este projeto é um formulário de contato que coleta dados pessoais, e-mail e endereço. Ele se integra com a API ViaCep para preencher automaticamente os campos de endereço com base no CEP fornecido. 

O formulário foi desenvolvido utilizando React com Vite. O gerenciamento dos formulários é realizado com React Hook Form, enquanto Yup é usado para a validação dos campos. A estilização é feita com Tailwind CSS, garantindo um design moderno e responsivo. O deploy do projeto foi realizado com Vercel, proporcionando uma publicação extremamente rápida e descomplicada.

## Índice - [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)
- [Contato](#contato)

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

Primeiro, clone o repositório do projeto para a sua máquina local. Use o seguinte comando:

```bash
git clone https://github.com/rddavino/form-integracao-viacep-api.git
```
Em seguida, acesse o diretório do projeto que você acabou de clonar:
```bash
cd form-integracao-viacep-api
```
Por fim, instale as dependências do projeto com o comando:
```bash
npm install
```
Após instalar as dependências, inicie o servidor de desenvolvimento com o seguinte comando:
```bash
npm run dev
```
Para ver o projeto em execução localmente, abra o navegador e digite http://localhost:5173 

## Funcionalidades

### Formulário de Contato Simples
Permite que os usuários preencham dados pessoais, como nome, sobrenome e e-mail, além de informações de endereço.

### Preenchimento automático do Endereço
A integração com a API ViaCep permite o preencher automaticamente os campos de endereço (logradouro, bairro e localidade) com base no CEP informado pelo usuário.

### Validação de Campos
As validações são realizadas em tempo real para garantir que todos os campos estejam corretamente preenchidos antes do envio do formulário. As validações incluem:

- Campos obrigatórios
- Formato válido de e-mail
- Limite de caracteres

### Feedback ao Usuário
Exibe uma modal (caixa de diálogo) informando ao usuário que suas informações foram enviadas com sucesso.

### Responsividade
O formulário é projetado para ser responsivo, garantindo uma boa experiência em diferentes tamanhos de tela e dispositivos.

## Licença


Este projeto não possui uma licença específica. Todos os direitos reservados ao autor. 

Se você deseja usar, modificar ou distribuir este projeto, por favor, entre em contato com o autor para obter permissão.

