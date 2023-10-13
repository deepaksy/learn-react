import { Component } from "react";

const WithCounter = BaseComponent =>{
    class newComponent extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        incrementCount = () =>{
            this.setState(prevState=>({
                count:prevState.count+1
            }))
        }
        render(){
            return(
                <BaseComponent count={this.state.count} incrementCount={this.incrementCount}/>
            )
        }
    }
    return newComponent
}

export default WithCounter