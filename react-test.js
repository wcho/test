import React from 'react';

class Hello extends React.Component {
    render() {
        return <div>Hello</div>; // BAD_RENDER_RETURN_VALUE alarm because 'render()' does not return this React element.
    }
}
