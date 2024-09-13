
const formatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export const createComponent = (props) => {
  const component = document.createElement("div");
  component.className = "item";
  component.innerHTML = `
        <img id="img-voiture" src="${props.image}" alt="${props.title}">
        <div id="end-container" >
          <div id="title-container">
            <h2 id="title">${props.title}</h2>
            <a href="${props.link}" target="_blank">
              <img src="/chevron-right.svg"/>
            </a>
          </div>
          <p id="description">${props.description}</p>
          <p id="price">${formatter.format(props.price)}</p>
             <p id="final-price">
             <span id="calculed-price">${formatter.format(props.price - (props.price * props.remise) / 100)}<span>
            <span id="remise">-${props.remise}%</span> 
            </p>
        </div>
  `;
  return component;
};
