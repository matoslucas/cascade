import React from 'react';
import { Sticky, StickyContainer } from 'mdbreact';

class StickyExample extends React.Component {
    render() {
    const wrapper = { height: '3500px', backgroundColor: 'rgba(0,0,0,.15)' }
    const background = {width: '100%', backgroundColor: '#fff', height: '3000px', lineHeight: '1.5'}
    const headerStyle = { width: '100%', background: '#2f93ce', color: '#fff', padding: '10px 20px', margin: '0'};
    const mainWrapper = { width: 960, margin: '0 auto', };
    const sidebar = { float: 'left', width: '230px', padding: '10px 15px'};
    const article = { width: '458px', padding: '0 20px', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc',float: 'left'}
    const footer = {background: '#67686b', color: '#fff', textAlign: 'center', height: '700px', display: 'block'};
    return('hola'
    );
  }
};

export default StickyExample;