import React, { Component, PropTypes } from 'react';
import Itemtypes from './Itemtypes';
import { DragSource } from 'react-dnd';

const style = {
  border: '1px solid black',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'pointer',
  float: 'left',
  width: '200px',
  height: '50px',
  textAlign: 'center'
};

const boxSource = {
  beginDrag(props) {
    // console.log(props);
    return {
      name: props.name,
      value: props.value
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      // console.log(item);
      // window.alert( // eslint-disable-line no-alert
      //   `You dropped ${item.value} into ${item.name}!`
      // );
    }
  }
};

@DragSource(Itemtypes.TASK, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Apple extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    lastDroppedItem: PropTypes.object
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    // const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style}}>
          {name}
        </div>
      )
    );
  }
}