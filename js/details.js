async function getDetails(){
   const URLParams = new URLSearchParams(window.location.search);
   const id =URLParams.get('id');
   const response = await axios.get(`https://dummyjson.com/products/${id}`);
   const {title,category,rating,thumbnail,description,price,discountPercentage,stock,images}=response.data;
   document.querySelector('h3').textContent=description;
   document.querySelector('.title').textContent=title;
   document.querySelector('img').src=thumbnail;
   document.querySelector('.rate').textContent+=rating;
   document.querySelector('.cat').textContent+=category;
   document.querySelector('.price').textContent+=price;
   document.querySelector('.dis').textContent+=discountPercentage;
   document.querySelector('.stock').textContent+=stock;
}
getDetails();