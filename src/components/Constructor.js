import React from 'react';
import './css/constructor.css'

class Constructor extends React.Component{
constructor(props){
    super(props);
    this.state = {
        bot: this.props.bot
    }
}

    render(){
        console.log(this.state.bot)
        return(
            <div className="constructor-block">
                <div className='start-block'></div>

                <div className=""></div>
            </div>
        )
    }
}

export default Constructor