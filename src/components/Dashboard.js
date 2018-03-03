import React, { Component } from 'react';
import DazzleDashboard from 'react-dazzle';
import HelloWorld from './widgets/HelloWorld';
import Container from './Container';
import CardFrame from './frames/CardFrame';

class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            widgets: {
                HelloWorld: {
                    type: HelloWorld,
                    title: 'Test widget',
                }
            },
            layout: {
                rows: [
                    {
                        columns: [
                            {
                                className: 'col-md',
                                widgets: [{key: 'HelloWorld'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'HelloWorld'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'HelloWorld'}],
                            },
                        ],
                    },
                ],
            }
        };
    }

    render() {
        return (
            <Container>
                <DazzleDashboard
                    frameComponent={CardFrame}
                    widgets={this.state.widgets}
                    layout={this.state.layout}
                />
            </Container>
        );
    }
}

export default Dashboard;