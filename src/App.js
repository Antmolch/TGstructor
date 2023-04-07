import React, {useState, useEffect} from 'react';
import './normalize.css'
import FunctionsBlock from './components/FunctionsBlock'
import Constructor from './components/Constructor'
import BotList from './components/BotList'

class App extends React.Component{
  constructor(props){
    super(props);
    this.status = this.props.status;
    this.bots = [
            {
            id: 0,
            name: "Яша",
            unique_name: "@Yashka_Nyashka",
            token: "1234898454521315",
            url: "http://alexey/csharp/constructor/",
            status: false,
            commands: [
              {
                id: 0,
                type: "message",
                call: [
                  {
                  id: 0,
                  command_call: "/start"
                  },
                  {
                    id: 1,
                    command_call: "Привет"
                  }
                ],
                link: [{follow_command_id: 1}, {follow_command_id: 2}]
              },
              {
                id: 1,
                type: "message",
                call: [
                  {
                  id: 2,
                  command_call: "/whatsup"
                  },
                  {
                    id: 3,
                    command_call: "Что нового?"
                  }
                ],
                link: [null]
              },
              {
                id: 2,
                type: "communication",
                call: [
                  {
                  id: 4,
                  command_call: "/helpme"
                  },
                  {
                    id: 5,
                    command_call: "Не понимаю"
                  }
                ],
                link: [null]
              },
              {
                id: 3,
                type: "mail",
                call: [null],
                link: [4]
              },
              {
                id: 4,
                type: "message",
                call: [
                  {
                    id: 6,
                    command_call: "/moreinfo"
                  },
                  {
                    id: 7,
                    command_call: "Подробнее"
                  }
                ],
                link: [null]
              }
            ],
            mail_commands: [
              {
                id: 3,
                date: "2023-05-02 15:00",
                message: "Сегодня в Технопарке ИрНИТУ проходит защита проектов Академии IT 2-го потока",
                media: [
                {
                  id: 0,
                  file: ""
                }]
              }],
            message_commands: [
              {
                id: 0,
                name: "Приветствие",
                message: "Прошёл целый год, а все вы только похорошели",
                media: [
                  {
                    id: 1,
                    file: ""
                  }
                ]
              },
              {
                id: 1,
                name: "Дела",
                message: "Да вот, защищаем проект. Пол года то... Пол года сё... Вот и готово)",
                media: [null]
              },
              {
                id: 4,
                name: "Подробности о мероприятии",
                message: "Да вот, защищают проекты будущие специалисты IT сферы компании En+. Вон как их много...",
                media: [null]
              }],
            communication_commands: [
              {
                id: "2",
                name: "Связь с нами",
                user: ["@Antmolch", "@hzxto"]
              }],
            chats: [
              {
                id: 0,
                name: "@Antmolch",
              },
              {
                id: 1,
                name: "@hzxto",
              }]
            },
          
            {
              id: 1,
              name: "Гоша",
              unique_name: "@Gosha_Yosha",
              token: "12348ghrbr21315",
              url: "http://alexey/csharp/constructor/",
              status: true,
              commands: [null],
              mail_commands: [null],
              message_commands: [null],
              communication_commands: [null],
              chats: [
                {
                  id: 0,
                  name: "@Antmolch",
                },
                {
                  id: 1,
                  name: "@hzxto",
                }]
            }];
    this.onChangeBot = this.onChangeBot.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
  }

  

  onChangeBot(bot){
    console.log(bot)
  }
  onChangeStatus(id){
    let numberBot = this.bots.findIndex(x => x.id === id);
    this.bots[numberBot].status = !this.bots[numberBot].status
  }
  render(){
    if (this.status === "constructor")
      return(
        <div className="bot-constructor">
          <FunctionsBlock />
          <Constructor />
        </div>
      )
    else
      return(
        <div className="bot-list-field">
          <BotList onChangeStatus={this.onChangeStatus} onClickBot={this.onChangeBot} bots={this.bots}/>
        </div> 
      )
  }
}

export default App