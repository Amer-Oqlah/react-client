import axios from "axios"

export const getList = () => {  // get all tasks 
    return axios
    .get('/api/tasks',{
        headers : {'content-Type':'application/json'}
    })
    .then(res =>{
        return res.data
    })
}

export const addItem = title => { //add task 
    return axios
    .post('/api/tasks',{
        title:title
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