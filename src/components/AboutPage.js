import React from 'react';

import headerImage from '../assets/city.jpg'

// Since this component is simple and static, there's no parent container for it.
class  AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ align: 'left', width: window.innerWidth, height: window.innerHeight });
      }

    render(){
        return (
            <img style={{margin: -8, padding:0, width: this.state.width}} src={headerImage} alt="Logo" />
        );
    }
}

export default AboutPage;
