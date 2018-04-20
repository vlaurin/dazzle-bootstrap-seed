import React, { Component } from 'react';
import DazzleDashboard from 'react-dazzle';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faAnchor from '@fortawesome/fontawesome-free-solid/faAnchor';
import faBatteryFull from '@fortawesome/fontawesome-free-solid/faBatteryFull';
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs';
import faCodeBranch from '@fortawesome/fontawesome-free-solid/faCodeBranch';
import faTrain from '@fortawesome/fontawesome-free-solid/faTrain';
import faBell from '@fortawesome/fontawesome-free-solid/faBell';
import HelloWorld from './widgets/HelloWorld';
import Container from './Container';
import SmashingFrame from './frames/SmashingFrame';

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
                        subtitle: 'Hello World',
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
                Widget4: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #4',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faBatteryFull,
                        colour: 'green',
                    }
                },
                Widget5: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #5',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faCogs,
                        colour: 'aqua',
                    }
                },
                Widget6: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #6',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faCodeBranch,
                        colour: 'blue',
                    }
                },
                Widget7: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #7',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faTrain,
                        colour: 'purple',
                    }
                },
                Widget8: {
                    type: HelloWorld,
                    props: {
                        title: 'Widget #8',
                        subtitle: 'Hello World',
                    },
                    frameSettings: {
                        icon: faBell,
                        colour: 'background',
                    }
                },
            },
            layout: {
                rows: [
                    {
                        columns: [
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget1'}, {key: 'Widget5'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget2'}, {key: 'Widget6'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget3'}, {key: 'Widget7'}],
                            },
                            {
                                className: 'col-md',
                                widgets: [{key: 'Widget4'}, {key: 'Widget8'}],
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
