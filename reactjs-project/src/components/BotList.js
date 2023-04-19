import React from 'react';
import Bot from './Bot'
import './css/bot-list.css'
import plusIcon from './img/plus-svg.svg'

class BotList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bot_name: ''
        }
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

    onCreateBot = () => {

    }

    onChangeNewBotName = (event) => {
        this.setState({
            bot_name: event.target.value
        })
    }

    
    render(){
        if (this.props.bots.length > 0)
            return(
                <div className="bot-list">
                    <div className='header-bot-list'>
                        <p className='text-2'>Ваши чат-боты</p>
                        <div className='add-bot-field'>
                            <input className='text-3' type='text' placeholder='Введите название чат-бота' value={this.state.bot_name} onChange={this.onChangeNewBotName}/>
                            <button onClick={this.onCreateBot()}>
                                <img src={plusIcon} alt='Действия'/>
                                <p className="text-3">Создать бота</p>
                            </button>
                        </div>
                    </div>
                    {this.bots.map((el) => (<div key={el.id} style={{margin: "0px", width: "100%"}}> 
                        <Bot onDelete={this.onDelete} onClickStatus={this.onClickStatus} onClickBot={this.onClickBot} bot={el} number={this.bots.indexOf(el) + 1}/>
                    </div>))}
                </div>
            );
        else    
            return(
                <div className="bot-list">
                    <div className='header-bot-list'>
                        <p className='text-2'>Ваши чат-боты</p>
                        <div className='add-bot-field'>
                            <input className='text-3' type='text' placeholder='Введите название чат-бота'/>
                            <button>
                                <img src={plusIcon} alt='Действия'/>
                                <p className="text-3">Создать бота</p>
                            </button>
                        </div>
                    </div>
                    <p className='text-2' style={{width: "85%", textAlign: "center"}}>Список ботов пуст</p>
                </div>
            );
    }
}

export default BotList