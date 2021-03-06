import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Platforms from './components/platforms';
import About from './components/about';
import Services from './components/services';
import Meetups from './components/meetups';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Devcash from './components/devcash';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Platforms data={this.state.landingPageData.Platforms} />
        <About data={this.state.landingPageData.About} />
        {/* <Services data={this.state.landingPageData.Services} /> //this could be useful later*/}
        <Devcash/>
        <Meetups /> 
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
