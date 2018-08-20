import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

export default class Accordion extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        activeKey: '1'
      };
    }
  
    handleSelect(activeKey) {
      this.setState({ activeKey });
    }
  
    render() {
      return (
        <PanelGroup
          accordion
          id="accordion-controlled-example"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <Panel eventKey="1">
            <Panel.Heading>
              <Panel.Title toggle><i className="fas fa-calendar-alt"></i>2016</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible><a href="#">January (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">February (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">April (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">May (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">June (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">July (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">September (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">October (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">November (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">December (20)</a></Panel.Body>
          </Panel>
          <Panel eventKey="2">
            <Panel.Heading>
              <Panel.Title toggle><i className="fas fa-calendar-alt"></i>2015</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible><a href="#">January (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">February (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">April (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">May (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">June (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">July (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">September (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">October (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">November (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">December (20)</a></Panel.Body>
          </Panel>
          <Panel eventKey="3">
            <Panel.Heading>
              <Panel.Title toggle><i className="fas fa-calendar-alt"></i>2014</Panel.Title>
            </Panel.Heading>
            <Panel.Body collapsible><a href="#">January (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">February (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">April (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">May (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">June (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">July (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">September (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">October (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">November (20)</a></Panel.Body>
            <Panel.Body collapsible><a href="#">December (20)</a></Panel.Body>
          </Panel>
        </PanelGroup>
      );
    }
  }
  
