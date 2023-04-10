import React, { Component } from 'react';
import logo from './img/Vector.svg'
import './css/header.css'
import userIcon from './img/user-icon.svg'
import menuIcon from './img/Menu.svg'
class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isOpen: false
        };
    
        this.toggleDropdown = this.toggleDropdown.bind(this);
      }
    
      toggleDropdown() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    
  render() {
    return (
      <header className='header'>
        <img src={logo} className='logo'/>
        <div className='button-container'>{/* контейнер с элементами в правой части шапки */}
          <img src={userIcon} className='userIcon'/>
          <p className='userName'>{this.props.userName}</p>
          <button className='buttonList' onClick={this.toggleDropdown}>
            <img src={menuIcon} />
          </button>         
          {this.state.isOpen && (
            <div className='dropdown-container'>
              <ul>
                <li>
                    <a href="#">Настройки</a>
                </li>
                <li>
                    <a href='#'>Выход</a>
                </li>
                
              </ul>
            </div>
          )}
        
        </div>
      </header>
    );
  }
}


export default Header;