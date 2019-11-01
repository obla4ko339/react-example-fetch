import React from 'react'
import App from '../../components/App';




export default class Requestapi extends React.Component{


    constructor(props){
        super(props)

        this.state = {
            dataList:null
        }

        this.setListData = this.setListData.bind(this)
        console.log("constructor")
    }

    setListData(result){
        this.setState({
            dataList:result
        }) 

        console.log(result)
       
        
    }

    componentDidMount(){
        fetch("https://cors-anywhere.herokuapp.com/http://kultura-to.ru/dateList.php?reactdata=2019-11-14")
        .then(response=>response.json())
        .then(result=>this.setListData(result))
        .catch(error=>error)

        console.log("componentDidMount")
    }
    

    render(){
        const {dataList} = this.state

        if(!dataList) return null
       

        return(
            
            <div>
               {console.log("render")}
                <App listDatas = {dataList} />

            </div>
        )
    }
}