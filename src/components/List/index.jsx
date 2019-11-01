import React from 'react'

export default class List extends React.Component{

    constructor(props){
        super(props)
    }



    render(){
        const {listData} = this.props

      
        return(

            <div>

                {
                    console.log( typeof listData)
                }

                {
                   
                        console.log(listData)
                   
                }

            </div>
        )
    }
}