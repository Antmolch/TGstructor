import React from 'react';
import Bot from './Bot'

class BotList extends React.Component{
    constructor(props){
        super(props);
        this.onClickBot = this.props.onClickBot.bind(this);
        
    }
    bots = this.props.bots;
    onClickBot(id){
        this.props.onChangeBot(id);
    };
    onClickStatus = (id) => {
        this.props.onChangeStatus(id);
    };
    onDelete = (id) => {
        this.props.onDeleteBot(id);
    }

    
    render(){
        if (this.props.bots.length > 0)
            return(
                <div className="bot-list">
                    {this.bots.map((el) => (<div key={el.id}> 
                        <Bot onDelete={this.onDelete} onClickStatus={this.onClickStatus} onClickBot={this.onClickBot} bot={el} number={this.bots.indexOf(el) + 1}/>
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