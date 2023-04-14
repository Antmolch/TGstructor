import React, {useState} from 'react';
import plusIcon from '../img/plus-svg.svg'
import exitIcon from '../img/exit.svg'
import '../css/message.css'
import Communication from './Communication'
import Modal from '../Modal/Modal';

export function Message(props){
    var bot = props.bot;
    const start_block = props.start_block;
    const command_id = props.id;
    const message_index = bot.message_commands.findIndex(x => x.id === command_id);
    const command_index = bot.commands.findIndex(x => x.id === command_id);
    const last_id = bot.commands[bot.commands.length - 1].id;
    const active_button = props.active_button;

    const [modalActive, setModalActive] = useState(false);
    
    const onChange = (bot) => {
        if(start_block)
            props.onChangeBot(bot);
        else
            props.onChange(bot)
    }

    const addBlock = () => {
        console.log(active_button)
        if (active_button === "none")
            console.log("Не выбран блок для добавления")
        else if (active_button === "mail")
            console.log("Нельзя добавлять рассылку в это место")
        else if (active_button === "message"){
            bot.commands[command_index].link.push(last_id + 1);
            bot.commands.push({
                id: last_id + 1,
                type: "message",
                call: [],
                link: []
            });
            bot.message_commands.push({
                id: last_id + 1,
                name: "Без имени",
                message: "",
                media: []
            })
            console.log("работаем")
            onChange(bot);
        }
        
    }

    const deleteBlock = (cmd_id) => {
        if (bot.commands[bot.commands.findIndex(x => x.id === cmd_id)].link[0] !== null){
            //удаление блоков по ссылкам
            bot.commands[bot.commands.findIndex(x => x.id === cmd_id)].link.map((id) => {
                bot = deleteBlock(id);
            });
        }
        if (bot.commands[bot.commands.findIndex(x => x.id === cmd_id)].type === "message")
            bot.message_commands = bot.message_commands.filter(x => x.id !== cmd_id);
        else if (bot.commands[bot.commands.findIndex(x => x.id === cmd_id)].type === "mail")
            bot.mail_commands = bot.mail_commands.filter(x => x.id !== cmd_id);
        bot.commands = bot.commands.filter(x => x.id !== cmd_id);
        return bot;
    }

    const onDeleteBlock = () => {
        if (props.prev_id !== null)
            //удаление ссылки на блок
            bot.commands[bot.commands.findIndex(x => x.id === props.prev_id)].link = bot.commands[bot.commands.findIndex(x => x.id === props.prev_id)].link.filter(x => x !== command_id);
        deleteBlock(command_id);
        onChange(bot);
    }

    return(
        <div className='block'>
            <div className="message-block" onClick={() => setModalActive(true)}>
                <div className="message-field">
                    <div>
                        <p className='text-5'>{bot.message_commands[message_index].name}</p>
                        <div onClick={e => e.stopPropagation()}><a className='delete-block-button' href='#' onClick={() => onDeleteBlock()}><img src={exitIcon}/></a></div>
                    </div>
                    
                    <div className='message-text'><p className='text-6-gray'>{bot.message_commands[message_index].message !== "" ? bot.message_commands[message_index].message : "Пустой блок"}</p></div>
                </div>
                <button onClick={() => addBlock()} className="add-message-button"><img src={plusIcon} alt="Добавить"/></button>
            </div>
            <div className='inline-bot-block'>
                {bot.commands[command_index].link.map((id) => (
                        bot.commands[bot.commands.findIndex(x => x.id === id)].type === "message" &&
                            <div key={id} className="bot-block">
                                <Message 
                                    onChange={onChange} 
                                    bot={bot} 
                                    id={id} 
                                    start_block={false} 
                                    active_button={props.active_button}
                                    prev_id={command_id}/>
                            </div>
                    ))}
                {/* Код для блока подключения человека к чату
                {bot.commands[command_index].link.map((id) => (
                        id !== null &&
                        bot.commands[bot.commands.findIndex(x => x.id === id)].type === "communication" &&
                            
                            <div key={id} className="bot-block">
                                <Communication onChange={onChange} bot={bot} id={id} start_block={false} active_button={props.active_button}/>
                            </div>
                    ))}*/}
            </div>
            <Modal 
                active={modalActive} 
                setActive={setModalActive}>

            </Modal>
        </div>
    );
}

export default Message