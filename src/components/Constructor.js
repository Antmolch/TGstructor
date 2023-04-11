import React from 'react';
import './css/constructor.css'
import Message from './Constructor/Message'

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
                {this.state.bot.commands.length === 0 ? 
                <Message />
                :
                <Message />
                }
            </div>
        );
    }
}

export default Constructor