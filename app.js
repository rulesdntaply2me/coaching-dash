const foodDB=[
['Blank','Zero',100,0,0,0,0],['Protein','93% Lean Ground Beef Cooked',100,172,26,0,8],['Protein','99% Lean Ground Turkey',100,120,28,0,1],['Protein','Chicken Breast Cooked',100,165,31,0,3.6],['Protein','Chicken Breast Raw',100,120,23,0,2.6],['Protein','Chicken Thigh Cooked Skinless',100,179,25,0,8],['Protein','Cod',100,82,18,0,0.7],['Protein','Egg Whites',100,52,11,0.7,0.2],['Protein','Eggs Whole',50,72,6,0.4,5],['Protein','Greek Yogurt 0% Plain',100,59,10,3.6,0.4],['Protein','Salmon',100,208,20,0,13],['Protein','Shrimp',100,99,24,0.2,0.3],['Protein','Sirloin Steak Lean',100,183,27,0,8],['Protein','Tuna Canned in Water',100,116,26,0,1],['Protein','Turkey Breast Deli Low Sodium',100,105,19,2,2],
['Carbs','Bagel Plain',100,250,10,49,1.5],['Carbs','Brown Rice Cooked',100,112,2.6,23,0.9],['Carbs','Cream of Rice Dry',45,160,3,36,0],['Carbs','Jasmine Rice Cooked',100,130,2.7,28,0.3],['Carbs','Oats Dry',100,389,17,66,7],['Carbs','Pasta Cooked',100,158,5.8,31,0.9],['Carbs','Potato White Baked',100,93,2.5,21,0.1],['Carbs','Quinoa Cooked',100,120,4.4,21,1.9],['Carbs','Rice Cakes Plain',9,35,0.7,7.3,0.3],['Carbs','Sweet Potato Cooked',100,90,2,21,0.2],['Carbs','White Rice Cooked',100,130,2.4,28,0.3],['Carbs','Whole Wheat Bread',40,100,4,18,1.5],
['Fats','Almond Butter',16,98,3.4,3.4,8.9],['Fats','Almonds',28,164,6,6,14],['Fats','Avocado',100,160,2,8.5,14.7],['Fats','Butter',14,102,0.1,0,11.5],['Fats','Cashews',28,157,5,9,12],['Fats','Chia Seeds',28,138,4.7,12,8.7],['Fats','Olive Oil',14,119,0,0,13.5],['Fats','Peanut Butter',16,95,3.5,3.2,8],['Fats','Walnuts',28,185,4.3,3.9,18.5],
['Vegetables','Asparagus',100,20,2.2,3.9,0.1],['Vegetables','Broccoli',100,35,2.4,7.2,0.4],['Vegetables','Carrots',100,41,0.9,10,0.2],['Vegetables','Cucumber',100,15,0.7,3.6,0.1],['Vegetables','Green Beans',100,31,1.8,7,0.1],['Vegetables','Lettuce Romaine',100,17,1.2,3.3,0.3],['Vegetables','Spinach',100,23,2.9,3.6,0.4],['Vegetables','Zucchini',100,17,1.2,3.1,0.3],
['Fruits','Apple',100,52,0.3,14,0.2],['Fruits','Banana',100,89,1.1,23,0.3],['Fruits','Blueberries',100,57,0.7,14.5,0.3],['Fruits','Grapes',100,69,0.7,18,0.2],['Fruits','Orange',100,47,0.9,12,0.1],['Fruits','Strawberries',100,32,0.7,7.7,0.3],
['Dairy','Cottage Cheese Low Fat',100,82,11,3.4,2.3],['Dairy','Fairlife Skim Milk',240,80,13,6,0],['Dairy','Greek Yogurt 2% Plain',100,73,9.9,3.9,2],['Dairy','Mozzarella Part Skim',28,80,7,1,6],['Dairy','String Cheese Light',28,50,6,1,2.5],
['Sauces','BBQ Sauce',17,29,0,7,0],['Sauces','Buffalo Sauce',15,5,0,1,0],['Sauces','Ketchup',17,20,0,5,0],['Sauces','Mustard Yellow',5,3,0.2,0.3,0.2],['Sauces','Salsa',30,10,0,2,0],['Sauces','Soy Sauce Low Sodium',15,10,1,1,0],
['Supplements','Creatine Monohydrate',5,0,0,0,0],['Supplements','Protein Powder Plant',32,130,24,4,2.5],['Supplements','Protein Powder Whey',31,120,24,3,1.5],
['Snacks','Greek Yogurt Bar',50,100,5,16,2],['Snacks','Popcorn Air Popped',100,387,13,78,4.5],['Snacks','Pretzels',100,380,10,80,3],['Snacks','Quest Style Protein Bar',60,200,20,22,7],['Snacks','Rice Krispy Treat',22,90,1,17,2],
['Drinks','Almond Milk Unsweetened',240,30,1,1,2.5],['Drinks','Black Coffee',240,2,0,0,0],['Drinks','Electrolyte Drink Zero',500,0,0,0,0],['Drinks','Orange Juice',240,110,2,26,0],['Drinks','Water',240,0,0,0,0]
].sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1]));
const $=id=>document.getElementById(id); const storeKey='sclassFitnessClientManagerV2';
let state=JSON.parse(localStorage.getItem(storeKey)||'null')||seed(); let activeId=state.activeId;
function seed(){const today=new Date().toISOString().slice(0,10);return{activeId:'c1',clients:[{id:'c1',name:'Demo Client',age:32,sex:'Male',height:70,weight:210,goal:190,activity:'Moderate',goalType:'Fat Loss',startDate:today,goalDate:'2026-08-01',medical:'None listed',coachNotes:'Aggressive fat loss phase. Keep protein high.',meals:[],checkins:[{date:today,weight:210,steps:8000,adherence:90}]}],biz:{payment:250,software:100,website:50,marketing:250,misc:100}}}
function save(){state.activeId=activeId;localStorage.setItem(storeKey,JSON.stringify(state))} function client(){return state.clients.find(c=>c.id===activeId)||state.clients[0]}
function activityMult(a){return{Sedentary:1.2,Light:1.375,Moderate:1.55,Active:1.725,'Very Active':1.9}[a]||1.55}
function macroTargets(c){let kg=c.weight/2.20462, cm=c.height*2.54; let bmr=10*kg+6.25*cm-5*c.age+(c.sex==='Female'?-161:5); let tdee=bmr*activityMult(c.activity); let goal=c.goalType; let cal=tdee; if(goal==='Fat Loss')cal-=650; if(goal==='Lean Bulk')cal+=250; if(goal==='Muscle Gain')cal+=400; if(goal==='Recomp')cal-=150; let protein=c.weight*(goal==='Muscle Gain'||goal==='Lean Bulk'?1:1.05); let fat=(cal*.25)/9; let carbs=(cal-protein*4-fat*9)/4; return{cal:Math.round(cal),protein:Math.round(protein),carbs:Math.max(0,Math.round(carbs)),fat:Math.round(fat),fiber:Math.round(c.weight*.07+20),sodium:2300}}
function gramAmount(amount,unit,serving){amount=+amount||0; if(unit==='g')return amount; if(unit==='oz')return amount*28.3495; if(unit==='serving')return amount*serving; if(unit==='tbsp')return amount*15; if(unit==='tsp')return amount*5; if(unit==='cup')return amount*240; return amount}
function mealTotals(c){let totals={cal:0,protein:0,carbs:0,fat:0}; (c.meals||[]).forEach(r=>{let f=foodDB.find(x=>x[1]===r.food)||foodDB[0]; let grams=gramAmount(r.amount,r.unit,f[2]); let mult=grams/(f[2]||100); totals.cal+=f[3]*mult; totals.protein+=f[4]*mult; totals.carbs+=f[5]*mult; totals.fat+=f[6]*mult;}); return Object.fromEntries(Object.entries(totals).map(([k,v])=>[k,Math.round(v)]))}
function renderAll(){renderClientSelect();renderClientForm();renderDashboard();renderMeals();renderCheckins();renderBusiness()}
function renderClientSelect(){let sel=$('clientSelect'); sel.innerHTML=state.clients.map(c=>`<option value="${c.id}">${c.name}</option>`).join(''); sel.value=activeId}
function renderClientForm(){let c=client(); ['name','age','sex','height','weight','goal','activity','goalType','startDate','goalDate','medical','coachNotes'].forEach(id=>$(id).value=c[id]||'')}
function renderDashboard(){let c=client(), t=macroTargets(c), a=mealTotals(c); $('dashName').textContent=c.name; $('currentWeight').textContent=c.weight+' lb'; $('goalWeight').textContent=c.goal+' lb'; let rem=Math.abs(c.weight-c.goal).toFixed(1); $('remainingWeight').textContent=rem+' lb'; let weeks=Math.max(1,(new Date(c.goalDate)-new Date())/6048e5); let req=(Math.abs(c.weight-c.goal)/weeks).toFixed(2); let actual=actualWeekly(c); let status=Math.abs(actual)>=req*.8?'On Track':'Behind'; $('goalStatus').textContent=status; ['cal','protein','carb','fat'].forEach(k=>{let key=k==='carb'?'carbs':k; $(k+'Target').textContent=t[key]+(k==='cal'?' cal':'g'); $(k+'Actual').textContent='actual '+a[key]+(k==='cal'?'':'g'); let pct=Math.min(130,((a[key]||0)/(t[key]||1))*100); let bar=$(k+'Bar'); bar.style.width=pct+'%'; bar.style.background=pct>110||pct<80?'var(--red)':pct>95?'var(--green)':'var(--yellow)'}); $('healthFlags').textContent=c.medical||'None listed'; $('coachNotesView').textContent=c.coachNotes||'No notes yet'; $('adjustment').textContent=adjustmentText(c,req,actual)}
function actualWeekly(c){let arr=(c.checkins||[]).slice().sort((a,b)=>new Date(a.date)-new Date(b.date)); if(arr.length<2)return 0; let first=arr[0], last=arr[arr.length-1]; let weeks=Math.max(1,(new Date(last.date)-new Date(first.date))/6048e5); return Math.abs((last.weight-first.weight)/weeks)}
function adjustmentText(c,req,actual){if(c.goalType==='Maintain')return 'Maintain phase: keep calories steady and adjust only if weekly average moves more than 1%.'; if(actual===0)return `Need ${req} lb/week pace. Add more check-ins to calculate actual trend.`; if(actual<req*.75)return 'Behind pace: reduce calories by 150–250 or add 2 cardio sessions this week.'; if(actual>req*1.35)return 'Moving fast: monitor energy/digestion. Consider adding 100–150 calories if performance drops.'; return 'On track: hold calories, keep adherence high, and reassess next check-in.'}
function normalizeMeals(c){
  c.meals=c.meals||[];
  // Convert old positional meal rows into meal-based rows once, if needed.
  if(c.meals.length && c.meals.some(r=>r && r.meal===undefined)){
    c.meals=c.meals.map((r,i)=>({...(r||{}), meal:Math.floor(i/4)+1})).filter(r=>r.food||r.category||r.amount);
  }
}
function getMealRows(c,m){normalizeMeals(c); return c.meals.filter(r=>+r.meal===m)}
function blankMealRow(m){return {meal:m,category:'Blank',food:'Zero',amount:0,unit:'g'}}
function rowMacroHTML(r){
  let f=foodDB.find(x=>x[1]===r.food)||foodDB[0];
  let grams=gramAmount(r.amount,r.unit,f[2]);
  let mult=grams/(f[2]||100);
  return `<span>${Math.round(grams)}g</span><span>${Math.round(f[3]*mult)} cal</span><span>${Math.round(f[4]*mult)} P</span><span>${Math.round(f[5]*mult)} C / ${Math.round(f[6]*mult)} F</span>`;
}
function mealTotal(c,m){
  let total={cal:0,protein:0,carbs:0,fat:0};
  getMealRows(c,m).forEach(r=>{
    let f=foodDB.find(x=>x[1]===r.food)||foodDB[0];
    let grams=gramAmount(r.amount,r.unit,f[2]);
    let mult=grams/(f[2]||100);
    total.cal+=f[3]*mult; total.protein+=f[4]*mult; total.carbs+=f[5]*mult; total.fat+=f[6]*mult;
  });
  return Object.fromEntries(Object.entries(total).map(([k,v])=>[k,Math.round(v)]));
}
function renderMeals(){
  let c=client(); normalizeMeals(c);
  let cats=[...new Set(foodDB.map(f=>f[0]))];
  let html='';
  for(let m=1;m<=6;m++){
    let rows=getMealRows(c,m);
    while(rows.length<2){let nr=blankMealRow(m); c.meals.push(nr); rows.push(nr)}
    let mt=mealTotal(c,m);
    html+=`<div class="meal" data-meal="${m}"><div class="meal-head"><h3>Meal ${m}</h3><button class="add-food primary" type="button">+ Add Food</button></div>`;
    rows.slice(0,7).forEach((r,localIdx)=>{
      let globalIdx=c.meals.indexOf(r);
      let foods=foodDB.filter(f=>f[0]===r.category);
      html+=`<div class="food-row" data-idx="${globalIdx}"><select class="cat">${cats.map(x=>`<option ${x===r.category?'selected':''}>${x}</option>`).join('')}</select><select class="food">${foods.map(x=>`<option ${x[1]===r.food?'selected':''}>${x[1]}</option>`).join('')}</select><input class="amt" type="number" step="0.1" value="${r.amount}"><select class="unit">${['g','oz','serving','tbsp','tsp','cup'].map(u=>`<option ${u===r.unit?'selected':''}>${u}</option>`).join('')}</select>${rowMacroHTML(r)}<button class="remove-food danger" type="button">×</button></div>`;
    });
    html+=`<div class="meal-total"><b>Meal ${m} Total:</b> ${mt.cal} cal | P ${mt.protein}g | C ${mt.carbs}g | F ${mt.fat}g <span>${rows.length}/7 foods</span></div></div>`;
  }
  $('mealPlanner').innerHTML=html;
  save();
  document.querySelectorAll('.food-row').forEach(row=>{
    row.querySelectorAll('select,input').forEach(el=>el.addEventListener('input',mealChange));
    row.querySelectorAll('select,input').forEach(el=>el.addEventListener('change',mealChange));
    row.querySelector('.remove-food').addEventListener('click',removeFoodRow);
  });
  document.querySelectorAll('.add-food').forEach(btn=>btn.addEventListener('click',addFoodRow));
}
function mealChange(e){
  let row=e.currentTarget.closest('.food-row'), idx=+row.dataset.idx, c=client(); normalizeMeals(c);
  let cat=row.querySelector('.cat').value; let foodSel=row.querySelector('.food');
  if(e.target.classList.contains('cat')){
    let options=foodDB.filter(f=>f[0]===cat);
    foodSel.innerHTML=options.map(f=>`<option>${f[1]}</option>`).join('');
    foodSel.value=options[0]?.[1]||'Zero';
  }
  c.meals[idx]={...(c.meals[idx]||{}),meal:+row.closest('.meal').dataset.meal,category:cat,food:foodSel.value,amount:+row.querySelector('.amt').value||0,unit:row.querySelector('.unit').value};
  save(); renderAll();
}
function addFoodRow(e){
  let c=client(); normalizeMeals(c); let m=+e.currentTarget.closest('.meal').dataset.meal;
  if(getMealRows(c,m).length>=7){alert('This meal already has 7 food slots.'); return;}
  c.meals.push(blankMealRow(m)); save(); renderAll();
}
function removeFoodRow(e){
  let c=client(); normalizeMeals(c); let row=e.currentTarget.closest('.food-row'), idx=+row.dataset.idx, m=+row.closest('.meal').dataset.meal;
  if(getMealRows(c,m).length<=1){alert('Keep at least one food row in each meal.'); return;}
  c.meals.splice(idx,1); save(); renderAll();
}
function renderCheckins(){let c=client(); $('checkinRows').innerHTML=(c.checkins||[]).map((r,i)=>`<tr><td>${r.date}</td><td>${r.weight}</td><td>${r.steps||''}</td><td>${r.adherence||''}%</td><td><button onclick="delCheck(${i})" class="danger">x</button></td></tr>`).join(''); let arr=(c.checkins||[]), weights=arr.map(x=>+x.weight); let min=Math.min(...weights,0), max=Math.max(...weights,1); $('trendChart').innerHTML=arr.map(x=>`<div style="height:${20+((x.weight-min)/(max-min||1))*150}px"><small>${x.weight}</small></div>`).join('')}
window.delCheck=i=>{client().checkins.splice(i,1);save();renderAll()}
function renderBusiness(){let b=state.biz; ['payment','software','website','marketing','misc'].forEach(id=>$(id).value=b[id]); let rev=state.clients.length*(+b.payment||0), cost=(+b.software||0)+(+b.website||0)+(+b.marketing||0)+(+b.misc||0); $('bizClients').textContent=state.clients.length; $('revenue').textContent='$'+rev; $('profit').textContent='$'+(rev-cost); $('yearly').textContent='$'+((rev-cost)*12)}
document.querySelectorAll('.nav').forEach(b=>b.onclick=()=>{document.querySelectorAll('.nav,.tab').forEach(x=>x.classList.remove('active')); b.classList.add('active'); $(b.dataset.tab).classList.add('active')});
$('clientSelect').onchange=e=>{activeId=e.target.value;save();renderAll()}; $('saveClient').onclick=()=>{let c=client(); ['name','age','sex','height','weight','goal','activity','goalType','startDate','goalDate','medical','coachNotes'].forEach(id=>c[id]=$(id).value); c.age=+c.age;c.height=+c.height;c.weight=+c.weight;c.goal=+c.goal; save();renderAll()};
$('addClient').onclick=()=>{let id='c'+Date.now(); state.clients.push({id,name:'New Client',age:30,sex:'Male',height:70,weight:180,goal:170,activity:'Moderate',goalType:'Fat Loss',startDate:new Date().toISOString().slice(0,10),goalDate:'2026-08-01',medical:'',coachNotes:'',meals:[],checkins:[]}); activeId=id; save();renderAll()};
$('deleteClient').onclick=()=>{if(state.clients.length===1)return alert('Keep at least one client.'); state.clients=state.clients.filter(c=>c.id!==activeId); activeId=state.clients[0].id; save();renderAll()};
$('addCheckin').onclick=()=>{let c=client(); c.checkins=c.checkins||[]; c.checkins.push({date:$('checkDate').value||new Date().toISOString().slice(0,10),weight:+$('checkWeight').value||c.weight,steps:+$('steps').value||'',adherence:+$('adherence').value||''}); c.weight=+($('checkWeight').value||c.weight); save();renderAll()};
$('clearMeals').onclick=()=>{client().meals=[];save();renderAll()}; $('resetDemo').onclick=()=>{if(confirm('Reset all local Sclass demo data?')){state=seed();activeId=state.activeId;save();renderAll()}}; ['payment','software','website','marketing','misc'].forEach(id=>$(id).oninput=e=>{state.biz[id]=+e.target.value;save();renderBusiness()});
renderAll();
