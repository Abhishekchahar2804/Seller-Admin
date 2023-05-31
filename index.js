const form =document.getElementById('my-form');

const electronicList=document.getElementById('electronicItems');
const foodList = document.getElementById('foodItems');
const skincareList = document.getElementById('skincareItems');

form.addEventListener('submit',AddItem);


function AddItem(e){
    e.preventDefault();

    const name=document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('types').value;

    const obj = {
        Name:name,
        Price:price,
        Category:category
    }
    axios.post('https://crudcrud.com/api/1f017542281e4bcfbf230fc0d96b4064/Items',obj)
        .then((res)=>{

            showItem(obj);
        })
        .catch((err)=>console.log(err))

}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/1f017542281e4bcfbf230fc0d96b4064/Items')
        .then((res)=>{
            console.log(res);
            for(var i=0;i<res.data.length;i++){
                
                showItem(res.data[i]);
            }
        })
        .catch((err)=>console.log(err));
})

function showItem(obj){
    const newItem=document.createElement('li');
    newItem.appendChild(document.createTextNode(obj.Name+" "+obj.Price+" "+obj.Category));

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('delete'));

    deleteBtn.onclick=(e)=>{
        var id = obj._id;
        axios.delete('https://crudcrud.com/api/1f017542281e4bcfbf230fc0d96b4064/Items/'+id)
            .then((res)=>{})
            .catch((err)=>console.log(err));
        const li=e.target.parentElement;
        if(obj.Category=="electronic"){
            electronicList.removeChild(li);
        }
        else if(obj.Category=="food"){
            foodList.removeChild(li);
        }
        else{
            skincareList.removeChild(li);
        }
    }

    newItem.appendChild(deleteBtn);
    if(obj.Category=="electronic"){
        electronicList.appendChild(newItem);
    }
    else if(obj.Category=="food"){
        foodList.appendChild(newItem);
    }
    else{
        skincareList.appendChild(newItem);
    }
}