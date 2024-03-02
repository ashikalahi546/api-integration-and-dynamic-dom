const loadNews = async () => {
  const responsive = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await responsive.json();
  const allData = data.data;
  allData.news_category.forEach((items) => {
    console.log(items);

    const buttonContainer = document.getElementById("button-container");
    const newdiv = document.createElement("div");
    newdiv.innerHTML = `  <button onclick = "loadNews2('${items.category_id}')" class="btn">${items.category_name}</button>`;
    buttonContainer.appendChild(newdiv);
  });
};

// const clicks = (click) =>{
// console.log(click)
// }






const loadNews2 = async (cardId) => {
  console.log(cardId);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${cardId}`
  );
  const data = await res.json();
  const allData = data.data;
  const allCardContainer = document.getElementById("all-card-container");
  allCardContainer.innerHTML = "";
  allData.forEach((items) => {
    console.log(items);

    const newdiv = document.createElement("div");
    newdiv.classList = `card  bg-base-100 shadow-xl`;
    newdiv.innerHTML = `  
    <figure><img src="${items.image_url}" alt="Shoes" /></figure>
    <div class="card-body">
      <h2>
      ${items.title}
  
      </h2>
      <p>${items.rating.number}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
    </div>
  `;
    allCardContainer.appendChild(newdiv);
  });
};

const searchText =() => {
    const inputField = document.getElementById('input-field').value;
 if(inputField){
    loadNews2(inputField)
 }else{
alert('please Enter a vaild cardId')
 }
}

loadNews();
loadNews2();
