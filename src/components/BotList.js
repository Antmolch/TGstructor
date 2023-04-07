import React from 'react';
import Bot from './Bot'

class BotList extends React.Component{
    constructor(props){
        super(props);
        this.onClickBot = this.props.onClickBot.bind(this);
        
    }
    bots = this.props.bots;
    onClickBot(bot){
        this.props.onChangeBot(bot);
    };
    onClickStatus = (id) => {
        this.props.onChangeStatus(id);
    }
    
    render(){
        if (this.bots.length > 0)
            return(
                <div className="bot-list">
                    {this.bots.map((el) => (<div key={el.id}> 
                        <Bot onClickStatus={this.onClickStatus} onClickBot={this.onClickBot} bot={el} number={this.bots.indexOf(el) + 1}/>
                    </div>))}
                </div>
            );
        else    
            return(
                <div className="bot-list">
                    <h2>Список ботов пуст</h2>
                    <button className="">Создать</button>
                </div>
            );
    }
}

export default BotList