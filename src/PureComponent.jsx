import { createRef, PureComponent } from "react";


class PureCompo extends PureComponent{
    constructor(){
        super();
        this.state = {
            name : ""
        }

        this.counter = 0
        this.MyInput = createRef()
    }

    handleSetChangeName = ()=>{
        this.setState({
            name : this.MyInput.current.value 
        })
    }

    componentDidMount(){
        this.MyInput.current.focus();
    }

    render(){
        return(
            <>
            <div className = "main">
                <h2 className = "header">کلمه مورد نظر خود را بنویسید</h2>
                <input ref = {this.MyInput} className = "input" type = "text" placeholder ="کلمه خود را تایپ کنید"
                 value = {this.state.value}></input>
                <div className = "box-btn">
                   <button onClick = {this.handleSetChangeName} className = "save-btn">ثبت</button>
                   <button onClick = {()=>{this.MyInput.current.value = ""}} className = "hiden-btn">مخفی</button>
                </div>
                <span className ="span">{this.counter++}</span>
            </div>
            
            </>
        )
    }
}

export default PureCompo;