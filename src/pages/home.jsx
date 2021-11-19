import React, { Component } from 'react';
import Banner from '../components/Banner';
import HelpingManager from '../components/HelpingManager';
import HelpingManagerEnd from '../components/HelpingManagerEnd';
import WhoWeAre from '../components/WhoWeAre';
import GetStart from '../components/GetStart';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Banner />
        <HelpingManager />
        <HelpingManagerEnd />
        <WhoWeAre />
        <GetStart />
      </>
    );
  }
}

export default Home;
