# Frontend Mentor - Ping coming soon page solution

Esta é uma solução para o [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.


<div align="center">

![Visualização do design para o desafio de codificação Ping coming soon page](./src/images/design/desktop-design.jpg)

![Visualização do design para o desafio de codificação Ping coming soon page](./src/images/design/desktop-hover-error-states.jpg)

![Visualização do design para o desafio de codificação Ping coming soon page](./src/images/design/mobile-design.jpg)

![Visualização do design para o desafio de codificação Ping coming soon page](./src/images/design/mobile-error-state.jpg)

</div>

## Bem-vindo! 👋

### O que aprendi

Mais uma prática bem-sucedida com o HTML, CSS e Js! show 😎

```Js
function removeIText() {
    const classError = selectInputEmail.classList.value;
    const resolutionWidth = window.innerWidth;

    if (classError.includes("error") && (resolutionWidth > 660)) {
        selectInputEmail.classList.remove("error");
        selectSectionSec.style.marginTop = "87px";
        selectInputEmail.nextElementSibling.remove("error-message");
    } else if (classError.includes("error") && (resolutionWidth <= 660)){
        selectInputEmail.classList.remove("error");
        selectSectionSec.style.marginTop = "110px";
        selectInputEmail.nextElementSibling.remove("error-message");
    } else {
        return;
    };
};
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
