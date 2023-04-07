import React from 'react';

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
            <div></div>
        )
    }
}

export default Constructor