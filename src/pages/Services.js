import React, { Component } from 'react';

import ServicesSection from '../sections/ServicesSection'
import SidingSection from '../sections/SidingSection'

class Services extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        //this.state = { counter: 0 };
        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        // const { match} = this.props
        //  console.log(match.params.section)
    }

    renderContent(){
        const { match} = this.props

        switch(match.params.section) {
            case 'siding':
              return <SidingSection />
            default:
              return <ServicesSection />
          }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }

}
export default Services