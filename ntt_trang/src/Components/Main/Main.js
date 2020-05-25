import React from 'react';
import TopMenu from '../Menu/TopMenu'


class Main extends React.Component {
    render() {
        return (
            <div class="main-panel main-panel-height" style="height: 100vh;">
                <TopMenu />
            </div>
        )
    }
};

export default Main;