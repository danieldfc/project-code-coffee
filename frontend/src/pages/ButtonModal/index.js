import React from 'react';

import './style.css';
import LoginModal from '../LoginModal';

export default class ButtonModal extends React.Component {

    state = {
        // Button initial state
        visible: false
    }

    visibleModal = () => {
        this.setState({
            visible: true
        });
        // console.log("true");
    }

    invisibleModal = () => {
        this.setState({
            visible: false
        });
        // console.log("false");
    }
    render() {
        return (
            <>
            <ul className="menu_list">
                <li><a href="/map">Trouver un café</a></li>
                <li onClick={this.visibleModal} type="submit">Se connecter</li>
                <LoginModal 
                visible={this.state.visible}
                invisible={this.invisibleModal}
                />
            </ul>      
            </>
        )
    }
}