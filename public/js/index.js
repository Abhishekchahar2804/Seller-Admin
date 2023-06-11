// const form =document.getElementById('my-form');

const add = document.querySelector('.add');

const electronicList=document.getElementById('electronicItems');
const foodList = document.getElementById('foodItems');
const skincareList = document.getElementById('skincareItems');

add.addEventListener('click',AddSeller);


async function AddSeller(e){
    e.preventDefault();

    const name=document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('types').value;

    const obj = {
        name:name,
        price:price,
        type:type
    }
    const res = await axios.post('http://localhost:3000/add-seller',obj)
    showItem(res.data.newSeller);
}

window.addEventListener("DOMContentLoaded",async ()=>{
    const res =await axios.get('http://localhost:3000/all-seller')
    for(var i=0;i<res.data.allSeller.length;i++){
                
        showItem(res.data.allSeller[i]);
    }
})

function showItem(obj){
    const newItem=document.createElement('li');
    newItem.appendChild(document.createTextNode(obj.name+" "+obj.price+" "+obj.type));

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));

    deleteBtn.onclick=async (e)=>{
        var id = obj.id;
        const li=e.target.parentElement;
        if(obj.type=="electronic"){
            electronicList.removeChild(li);
        }
        else if(obj.type=="food"){
            foodList.removeChild(li);
        }
        else{
            skincareList.removeChild(li);
        }
        await axios.delete('http://localhost:3000/delete-seller/'+id)
        
    }

    newItem.appendChild(deleteBtn);
    if(obj.type=="electronic"){
        electronicList.appendChild(newItem);
    }
    else if(obj.type=="food"){
        foodList.appendChild(newItem);
    }
    else{
        skincareList.appendChild(newItem);
    }
}