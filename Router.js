import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {Scene, Router, Drawer, Actions} from 'react-native-router-flux';
import TicTacToe from './src/Tictactoe';

class RouterComponent extends Component{
    
    render(){
    return (
        <Router>
            <Scene key="root" hideNavBar>
                    {/*===========TIC TAC TOE===========*/}
                    <Scene key="tictactoe" component={TicTacToe} options={{swipeEnabled: false}}/>
            </Scene>
        </Router>
        );
    }
};

export default connect(null)(RouterComponent); 