import { createRef, PureComponent } from "react";
import PureCompo from "./PureComponent";


class ParentCompo extends PureComponent{
    render(){
        return(
            <>
              <PureCompo ref = {this.MyComponentRef}/>
            </>
        )
    }
}

export default ParentCompo;