---
title: "Você está usando shadcn/ui do jeito errado."
date: "2025-05-29"
author: "Rodrigo Carvalho"
summary: "Aprenda a personalizar corretamente o shadcn/ui e criar interfaces únicas e memoráveis."
---

Sites modernos são bonitos, limpos e acessíveis, mas muitos parecem... iguais. O motivo? O uso padrão do *shadcn/ui*. Assim como aconteceu com o Bootstrap no passado, o *shadcn/ui* está criando interfaces genéricas. Mas esse não é o problema — o problema é como ele está sendo usado.

Aqui, vou mostrar por que isso acontece e como usar o *shadcn/ui* corretamente para criar interfaces únicas.

## Por que tudo parece igual?

Sites construídos com *shadcn/ui* frequentemente seguem o mesmo modelo: botões, cards e formulários padronizados. Isso lembra a era do Bootstrap, quando todos os sites pareciam cópias. O erro? As pessoas usam o *shadcn/ui* sem personalização ou o personalizam incorretamente, mantendo os estilos padrão.

## O que é Shadcn/UI?

Ao contrário do Bootstrap ou do MUI, o *shadcn/ui* **não é uma biblioteca**. É uma ferramenta para você construir **sua própria biblioteca de componentes**. Baseado no **Radix UI** — primitivas acessíveis e sem estilos — e estilizado com **Tailwind CSS**, ele entrega o código-fonte completo dos componentes. Você pode editar e moldar tudo como quiser.

### Comparação com Bootstrap e MUI

- **Bootstrap**: Interfaces genéricas, difíceis de personalizar sem CSS adicional.
- **MUI**: Código abstraído em `node_modules`. A personalização usa `sx` ou `disablePortal`, mas sem controle total.
- **Shadcn/UI**: Código aberto, editável e seu. Um botão é apenas uma função construída com Radix UI e Tailwind, pronta para ajustes.

## Por que os sites parecem iguais?

Falta de personalização. Muitos desenvolvedores:

- Usam os componentes padrão sem alterações.
- Mudam apenas as cores do tema do *shadcn/ui*.
- Ignoram o potencial de uma personalização mais profunda.

Mudar as cores não é suficiente. Largura, altura, fontes e animações precisam ser ajustadas para criar uma identidade única.

## Como fazer do jeito certo

### 1. Comece pelo `globals.css`

Defina os estilos globais no `globals.css`. Por exemplo, ajuste o `border-radius` de todos os componentes com uma linha:

```css
:root {
  --radius: 0.75rem;
}
```

Essa pequena mudança já transforma a aparência geral.

### 2. Personalize além das cores

O tema do *shadcn/ui* altera as cores, mas não tamanhos, fontes ou animações. Para criar algo único, ajuste:

- **Tamanhos**: Largura, altura e padding.
- **Fontes**: Escolha uma tipografia que represente sua marca.
- **Estilos**: Adicione sombras, gradientes ou transições.

### 3. Entenda o Radix UI

O *shadcn/ui* usa o **Radix UI**, que oferece primitivas acessíveis. Estude-as para personalizar comportamentos e aparência com precisão.

### 4. Crie sua própria biblioteca

Copie os componentes do *shadcn/ui* para o projeto e edite-os. Quer um botão com uma animação única? Modifique o código. Quer um card diferente? Ajuste as classes do Tailwind.

## Dicas extras

- **Ajuste o CN**: Ele facilita personalizações avançadas.
- **Outras bibliotecas**: Explore `21st`, `Magic UI` e `Aceternity` para buscar inspiração.
- **Tailwind CSS**: Domine suas classes para fazer ajustes rápidos.

## Conclusão

O *shadcn/ui* é incrível, mas somente quando usado do jeito certo. Ele oferece uma base sólida — cabe a você torná-la única. Não o use como uma biblioteca pronta. Edite os componentes, ajuste o `globals.css` e explore o Radix UI.
