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
                Widget1: {
                    type: HelloWorld,
                    title: 'Widget #1',
                    frameSettings: {
                        cardClass: 'border-primary',
                        headerClass: 'bg-primary text-light',
                    }
                },
                Widget2: {
                    type: HelloWorld,
                    title: 'Widget #2',
                    frameSettings: {
                        cardClass: 'border-light',
                        headerClass: 'bg-light text-dark',
                    }
                },
                Widget3: {
                    type: HelloWorld,
                    title: 'Widget #3',
                    frameSettings: {
                        cardClass: 'border-danger',
                        headerClass: 'bg-danger text-light',
                    }
                },
            },
            layout: {
                rows: [
                    {
                        columns: [
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget1'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget2'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget3'}],
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
