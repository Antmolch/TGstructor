import React, {useState, useRef, useEffect} from 'react';
import './css/bot.css'
import ThreeDots from './img/three-dots-vertical.svg'
import { useDetectOutsideClick } from "./UseDetectOutsideClick";


export function Bot(props){
    const bot = props.bot;
    const [statusBot, setStatusBot] = useState(bot.status);
    const number = props.number;
    const [isActive, setIsActive] = useState(false);


    return(
        <div className="bot">
            <a className="name-bot" href="#" onClick={() => props.onClickBot(bot.id)}>
                <div>
                    <p className="text-3">{bot.name}</p>
                    <p className="text-4">{bot.unique_name}</p>
                </div>
            </a>
            
            <div className="folowers-bot">
                <p className="text-3">{bot.chats.length}</p>
                <p className="text-4">Подписчики</p>
            </div>
            <div className='status-bot'><p className="text-3" id="bot-status">{statusBot === false ? "Остановлен" : "Подключён"}</p></div>
            <button className="menu-trigger" onClick={() => setIsActive(!isActive)}>
                <img src={ThreeDots}/>
            </button>
            {isActive && <nav className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul className="text-4">
                    <li>
                    <a href="#" onClick={() => props.onClickBot(bot.id)}>Изменить</a>
                    </li>
                    <li>
                    <a href="#" onClick={() => {
                        setStatusBot(!statusBot);
                        props.onClickStatus(bot.id);
                    }}>{statusBot === false ? "Подключить" : "Остановить"}</a>
                    </li>
                    <li>
                    <a href="#" onClick={() => props.onDelete(bot.id)}>Удалить</a>
                    </li>
                </ul>
                </nav>}
        </div>
    );
}


export default Bot