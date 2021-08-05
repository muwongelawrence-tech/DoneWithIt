import { create } from "apisauce";

 const apiClient = create({
   baseURL:"http://10.0.2.2:5000/api"
});

export default apiClient;

// apiClient.get("/products").then(response => {
//     if(!response.ok){
//         response.problem;
//     }
// });