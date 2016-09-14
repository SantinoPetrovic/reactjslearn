import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AppleBox from './AppleBox';
import Apple from './Apple';

@DragDropContext(HTML5Backend)
export default class Content extends Component {
  render() {
    return (
      <div style={{ marginLeft:'20px' }}>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <AppleBox />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Apple name='1 Apple' value='1' />
          <Apple name='2 Apples' value='2' />
          <Apple name='3 Apples' value='3' />
        </div>
      </div>
    );
  }
}