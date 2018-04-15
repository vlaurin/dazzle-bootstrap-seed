import React, { Component } from 'react';
import DazzleDashboard from 'react-dazzle';
import HelloWorld from './widgets/HelloWorld';
import Container from './Container';
import SmashingFrame from './frames/SmashingFrame';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faAnchor from '@fortawesome/fontawesome-free-solid/faAnchor';

class Dashboard extends Component {

    constructor() {
        super();

        this.state = {
            widgets: {
                Widget1: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #1',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faCoffee,
                        colour: 'red',
                    }
                },
                Widget2: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #2',
                        subtitle: 'This is some rather long content to make widgets of different heights.',
                    },
                    frameSettings: {
                        icon: faClock,
                        colour: 'orange',
                    }
                },
                Widget3: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #3',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faAnchor,
                        colour: 'yellow',
                    }
                },
            },
            layout: {
                rows: [
                    {
                        columns: [
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget1'}, {key: 'Widget3'}],
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
                    frameComponent={SmashingFrame}
                    widgets={this.state.widgets}
                    layout={this.state.layout}
                />
            </Container>
        );
    }
}

export default Dashboard;
