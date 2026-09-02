const wa = '919979450440';
const map = 'https://www.google.com/maps/dir/?api=1&destination=1st+Floor%2C+Sai+Platinum%2C+Sardar+Patel+Ring+Road%2C+Near+Laxmi+Sky+City%2C+Nikol%2C+Ahmedabad%2C+Gujarat+382330';
function waLink(message='Hello Grand Royal Dine, I would like to enquire about a banquet booking. Please share availability and package details.') { return `https://wa.me/${wa}?text=${encodeURIComponent(message)}`; }
function inject() {
  document.querySelectorAll('[data-wa]').forEach(a => a.href = waLink(a.dataset.wa || undefined));
  document.querySelectorAll('[data-map]').forEach(a => a.href = map);
  const y = document.querySelector('[data-year]'); if (y) y.textContent = new Date().getFullYear();
  document.querySelectorAll('[data-menu-link]').forEach(a => a.href = '/assets/menu-2.pdf');
}
document.addEventListener('DOMContentLoaded', () => {
  inject();
  const menuBtn = document.querySelector('.menu-btn'); const nav = document.querySelector('.site-nav');
  if (menuBtn && nav) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.site-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
  document.querySelectorAll('[data-lightbox]').forEach(img=>img.addEventListener('click',()=>{
    const lb=document.querySelector('.lightbox'); const target=document.querySelector('.lightbox img');
    if(lb&&target){target.src=img.src; target.alt=img.alt; lb.classList.add('show');}
  }));
  const lb=document.querySelector('.lightbox'); if(lb) lb.addEventListener('click',()=>lb.classList.remove('show'));
  document.querySelectorAll('[data-package]').forEach(btn=>btn.addEventListener('click',()=>{
    const data=packages[btn.dataset.package]; if(!data) return;
    const modal=document.querySelector('#package-modal');
    modal.querySelector('.modal-title').textContent=data.name;
    modal.querySelector('.modal-price').textContent=data.price;
    modal.querySelector('.modal-body').innerHTML='<ul>'+data.items.map(x=>`<li>${x}</li>`).join('')+'</ul>';
    modal.classList.add('show');
  }));
  document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',()=>document.querySelector('#package-modal')?.classList.remove('show')));
});
const packages={
 p1:{name:'Package 1',price:'₹3XX + GST',items:['Welcome Drink','Soup','Starter (VEG.)','Paneer Main Course','VEG. Main Course','Indian Bread ×2','Dal','Rice','Green Salad','Roasted Papad','Mix Pickle / Green Chutney','Sweet (Regular)','Ice Cream (Regular) (LTD)','Mineral Water Bottle 200ml','Mukhwas']},
 p2:{name:'Package 2',price:'₹3XX + GST',items:['Welcome Drink','Soup','Starter (VEG.)','Baked Dish or Farsan','Paneer Main Course','VEG. Main Course','Indian Bread ×2','Dal','Rice','Salad ×2','Butter Milk','Roasted Papad','Mix Pickle / Green Chutney','Sweet (Regular)','Ice Cream (Regular) (LTD)','Mineral Water Bottle 200ml','Mukhwas']},
 p3:{name:'Package 3',price:'₹4XX + GST',items:['Welcome Drink ×2','Soup ×2','Starter (VEG.) ×2','Baked Dish or Farsan','Paneer Main Course','VEG. Main Course','Kofta Main Course','Indian Bread ×3','Dal','Rice','Salad ×2','Butter Milk or Raita','Roasted Papad','Mix Pickle / Green Chutney','Sweet (Regular)','Ice Cream (Premium) (LTD)','Mineral Water Bottle 200ml','Mukhwas']},
 p4:{name:'Package 4',price:'₹5XX + GST',items:['Welcome Drink ×2','Soup ×2','Starter (2 VEG. & 1 Paneer) ×3','Baked Dish','Farsan or Chaat','Paneer Main Course','VEG. Main Course','Kofta Main Course','Indian Bread ×3','Dal','Rice','Salad ×2','Butter Milk or Raita','Roasted Papad','Mix Pickle / Green Chutney','Sweet (Regular)','Sweet (Premium)','Ice Cream (Premium) (LTD)','Mineral Water Bottle 200ml','Sweet Paan (LTD)']},
 p5:{name:'Special Gujarati',price:'₹3XX + GST',items:['Welcome Drink','Soup','Farsan','Paneer Main Course','Gujarati Main Course','Tawa Roti / Puri / T. Roti ×2','Gujarati Dal or Kadhi','Gujarati Bhat or Pulao','Salad','Butter Milk or Raita','Roasted Papad','Mix Pickle / Green Chutney','Sweet (Regular)','Ice Cream (Premium) (LTD)','Mineral Water Bottle 200ml','Mukhwas']},
 b1:{name:'Breakfast Package 1',price:'₹1XX + GST',items:['Khaman / Mix Pakoda / Poha / French Fries','Hot Tea / Hot Coffee','Hot Snacks (Any One)']},
 b2:{name:'Breakfast Package 2',price:'₹1XX + GST',items:['Dhokla / Fafada / Aloo Parotha / Samosa / Upma','Hot Tea / Hot Coffee','Hot Snacks (Any One)']}
};
