# testing-astro

Olá, neste repositório vou experimentar o framework com conceito de Islands chamado Astro.

Docs: https://docs.astro.build/en/getting-started/

## Já é diferenciado no create

Aparece uma ANIMAÇÃO NO CONSOLE!

Olha só

![Print do console](/README/console.png "Print do Console")
![Print do console](/README/console2.png "Print do Console")
![Print do console](/README/console3.png "Print do Console")

## Rodando o projeto

Pra rodar o projeto é bem simples, entre na pasta criada por ele e rode no console `npm run dev`

Vai perceber porém, que o código não vai ser reconhecido pelo VSCode, bem assim:

![Print do código](/README/code.png "Print do código")

### Solução: Extensão oficial Astro

Para conseguir ter o apoio da IDE para arquivos astro, baixe a extensão
[Clicando neste link](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

Agora os arquivos ficam desse jeito:

![Print do código](/README/code2.png "Print do código")

## Observações

- Astro não consegue executar os componentes de MUI (Material UI) por causa das dependências das libs `Emotion` por exemplo
- É preciso configurar padrões de filenames no arquivo `astro.config.mjs` quando usar múltiplas integrações como Preact + React por exemplo:

---

```js
export default defineConfig({
  site: "https://astro.jhonatec.dev",
  integrations: [
    react({
      include: /(?!\.preact)\.[j,t]sx$/,
    }),
    preact({
      include: /\.preact\.jsx$/,
    }),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
```

>
> ### ⚠️ Obs - Ainda estou testando o Regex acima ⚠️
>