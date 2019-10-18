import axios from "axios"
import { getProfile } from './components/UserFunctions'

let user_id="";

export const getList = () => {  // get all tasks 
    getProfile().then(res => {
     
            user_id= res.user.id;
            console.log(user_id)
    
    })
    return axios
    .get('/api/tasks',{
        headers : {'content-Type':'application/json'}
    })
    .then(res =>{
        
        let filtered_tasks=[];

         for(let i=0;i<res.data.length;i++){

            if (user_id===res.data[i].user_id){
                filtered_tasks.push(res.data[i])
            }
        }
        return filtered_tasks;
    })
}

export const addItem = title => { //add task 
    console.log(user_id)
    return axios
    .post('/api/tasks',{
        title:title,
        user_id:user_id
    },
    {
        headers:{'content-Type':'application/json'}
    }
    )
    .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
}
export const deleteItem = id => {  // delete task 
     axios.delete(`/api/tasks/${id}`,{
        headers:{'content-Type':'application/json'}
     })
     .then(res => {
        console.log(res)
    })
    .catch(err =>{
        console.log(err)
    })
}
export const updateItem = (title,id) => {  // update task 
    return axios
    .put(`/api/tasks/${id}`,{
        title: title
    },
    {
       headers:{'content-Type':'application/json'}
    })
    .then(res => {
       console.log(res)
   })
   .catch(err =>{
       console.log(err)
   })
}