import React, {useState, useRef, useEffect} from 'react';
import './style.css'
import { useDetectOutsideClick } from "./UseDetectOutsideClick";


export function Bot(props){
    const bot = props.bot;
    const [statusBot, setStatusBot] = useState(bot.status);
    const number = props.number;
    const [isActive, setIsActive] = useState(false);


    return(
        <div className="bot">
            <a href="#" onClick={() => props.onClickBot(bot.id)}>
                <div>
                    <p className="text-4">{bot.name}</p>
                    <p className="text-5">{bot.unique_name}</p>
                </div>
            </a>
            
            <div>
                <p className="text-4">{bot.chats.length}</p>
                <p className="text-5">Подписчики</p>
            </div>
            <p className="text-4" id="bot-status">{statusBot === false ? "Остановлен" : "Подключён"}</p>
            <button className="menu-trigger" onClick={() => setIsActive(!isActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
            </button>
            {isActive && <nav className={`menu ${isActive ? "active" : "inactive"}`}>
                <ul className="text-5">
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