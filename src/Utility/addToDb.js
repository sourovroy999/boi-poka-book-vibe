import { toast } from "react-toastify";

const getStoredReadList=()=>{
    // read-list
    const storedListStr=localStorage.getItem('read-list');
    if(storedListStr){
        const storedList=JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return[];
    }

}

const addToStoredReadList=(id)=>{
    const storedList=getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'already existed in the list');
        
    }
    else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr)

        //ideally triger toast from component
        toast('this book added to the read list')
    }
}






// add to wish list


const getStoredWishList=()=>{
    const storedListStr=localStorage.getItem('wish-list');
    if(storedListStr){
        const storedList=JSON.parse(storedListStr)
        return storedList;
    }
    else{
        return[];
    }
}

const addToStoredWishList=(id)=>{
    const storedList=getStoredWishList();
    if(storedList.includes(id)){
        console.log(id, 'already existed in the list');

    }
    else{
        storedList.push(id)
        const storedListStr=JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
        toast('this book added to the wish list')
    }

   
}
export {addToStoredWishList, addToStoredReadList, getStoredReadList}