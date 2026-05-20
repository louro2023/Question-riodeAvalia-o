# Avaliação Inicial | Psicóloga Fernanda Moura

Sistema web estático para clientes preencherem o questionário de avaliação inicial, gerar um PDF personalizado e compartilhar o arquivo pelo recurso nativo de compartilhamento do navegador.

## Como abrir localmente

Na pasta do projeto, execute:

```powershell
python -m http.server 8793 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8793
```

## Como publicar

Envie todos os arquivos desta pasta para uma hospedagem estática, como Netlify, Vercel, GitHub Pages ou o painel do seu provedor.

Para o botão de compartilhamento anexar o PDF em celulares, a página precisa estar em `HTTPS`. Em navegadores que não permitem compartilhar arquivos, o sistema baixa o PDF e abre o WhatsApp para o envio manual.

## Arquivos principais

- `index.html`: estrutura da página.
- `styles.css`: visual, responsividade e tema.
- `app.js`: campos do questionário, salvamento local, geração de PDF e compartilhamento.
- `assets/therapy-room.png`: imagem temática da página.
- `vendor/`: bibliotecas locais usadas para PDF e ícones.
