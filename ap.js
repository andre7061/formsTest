const form = document.querySelector('form');
const pasword = form.querySelector('#password')
const pasword2 = form.querySelector('#password2');
const spanEror = form.querySelector('.eror');
const btn = form.querySelector('button');
const content = document.querySelector('.output')

pasword2.addEventListener('input',()=>{
   if (!pasword.value.includes(pasword2.value)){
    spanEror.classList.add('eror_active')
    btn.setAttribute('disabled','');
    btn.classList.add('btn_disabled')
   } else if(pasword.value === pasword2.value){
    btn.removeAttribute('disabled','')
    btn.classList.remove('btn_disabled')
   }
   else{
    spanEror.classList.remove('eror_active')
    
   }
})
const creatNode=(name,val)=>{
    const item = document.createElement('p');
    item.textContent=name + ":";
    const span =document.createElement('span');
    span.textContent = val
    item.append(span)
    content.append(item)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()
 const list = this.querySelectorAll('input');
 list.forEach(el=>{
    // if((el.name =='city')){
        creatNode(el.name,el.value)
   // }
 })
   const select= this.querySelector('#select');
   creatNode(select.name,select.value)
   console.log(select.value)
})