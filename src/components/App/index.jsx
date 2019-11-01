import React from 'react'



export default function App({listDatas}){

         

        return(
            
            <div>
               
               
                
                {
                    listDatas.map((item, key)=>(
                        <div key={key}>
                            {item.title}
                        </div>
                    ))
                }
                
                
            </div>
        )
   
}