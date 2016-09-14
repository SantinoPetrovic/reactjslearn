import React, { PropTypes, Component } from 'react';
import Itemtypes from './Itemtypes';
import { DropTarget } from 'react-dnd';
const style = {
  border: '1px solid black',
  height: '200px',
  width: '200px',
  marginBottom: '15px',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

const boxTarget = {
  drop(props, monitor) {
    return { 
      getItems : monitor.getItem()
    };
    console.log(getItems);
  }
};



@DropTarget(Itemtypes.TASK, boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  lastDroppedTask: monitor.getItem()

}))
export default class AppleBox extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
    lastDroppedTask: PropTypes.object
  };

  render() {
    const { canDrop, isOver, connectDropTarget, lastDroppedTask, getItems } = this.props;
    const isActive = canDrop && isOver;
    const theAppleBox = 0;
    let backgroundColor = 'white';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor }}>
        {lastDroppedTask &&
          <p>Last dropped: {JSON.stringify(Number(lastDroppedTask.value))}</p>
        }
      </div>
    );
  }
}