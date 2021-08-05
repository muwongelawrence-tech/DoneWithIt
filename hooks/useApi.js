import { useState } from 'react';

export default useApi = () => {

    const [ data ,setData]  = useState([]);
    const [error ,setError] = useState(false);
    const [loading ,setLoading] = useState(false);


    function loader(){
        return new Promise((resolve, reject)=> {
          //Asynchronous work simulating a database connection for 4 seconds.
          setTimeout(() => {
           console.log( " loading.....");
           resolve(1);
        },8000);
    
        });
        
    }

    async function request(apiFunc) {
          //const response =  await listingsApi.getListings();
              setLoading(true);
              //simulate an Api call
              const response =  await loader();
              setLoading(false);
    
            if(!apiFunc) return setError(true);
    
            setError(false);
    
           setData(apiFunc);
    };
    

    return { request ,data, loading, error };
}