async function getPromise() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=10');
    const data = await response.json();

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.justifyContent = 'center';
    container.style.gap = '20px';
    document.body.appendChild(container);

    data.forEach((item, index) => {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = '300px';
      box.style.height = '400px';
      box.style.border = '1px solid #000';
      box.style.display = 'flex';
      box.style.flexDirection = 'column';
      box.style.alignItems = 'center';
      box.style.justifyContent = 'space-around';
      box.style.padding = '10px';
      box.style.boxSizing = 'border-box';
      box.style.textAlign = 'center';

      const name = document.createElement('p');
      name.textContent = `Title: ${item.title}`;
      name.style.fontSize = '15px';
      name.style.margin = '5px 0';
      box.appendChild(name);

      const city = document.createElement('p');
      city.textContent = `Price: $${item.price}`;
      city.style.fontSize = '15px';
      city.style.margin = '5px 0';
      box.appendChild(city);

      const image = document.createElement('img');
      image.src = item.image;
      image.style.width = '150px';
      image.style.height = '150px';
      image.style.objectFit = 'contain';
      box.appendChild(image);

      const rate = document.createElement('p');
      rate.textContent = `Rating: ${item.rating.rate}`;
      rate.style.fontSize = '15px';
      rate.style.margin = '5px 0';
      box.appendChild(rate);

      const count = document.createElement('p');
      count.textContent = `Count: ${item.rating.count}`;
      count.style.fontSize = '15px';
      count.style.margin = '5px 0';
      box.appendChild(count);

      container.appendChild(box);

      box.addEventListener('mouseover', () => {

        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'black';
        
});

box.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = '';
  document.body.style.color = '';
});
    });
  } catch (error) {
    console.error('Ошибка:', error);
  }
}



getPromise();
