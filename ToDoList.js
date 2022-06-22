import React from "react";
import image from './pics/bin.png'

function TaskStatus(props)  {
    console.log(props);

    const isCompleted = props.completed;

    return (
      <input type={'checkbox'} className={isCompleted ? 'not' : 'completed'} />
    );
}

function TaskName(props)    {
    console.log(props);
    return  (
      <span className={'task-name'}>
        {props.name}
      </span>
    );
}

function TaskBtn(props) {
    console.log(props);
    function handleDeleteClick() {
        console.log('delete');
    }
    return  (
        <button className={'delete'} onClick={handleDeleteClick}>
            <img src={image} alt={'bin.png'} />
        </button>
    )
}

class Task extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: Date.now(),
            completed: true,
            name: '',
            imgUrl: image,
            exist: true
        };
    }

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        return  (
          <div className={this.state.id}>
              <TaskStatus status={this.state.completed} />
              <TaskName name={this.state.name + ' ' + this.state.id} />
              <TaskBtn btn={this.state} />
          </div>
        );
    }
}

class ToDoList extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {empty: true};
        this.state = {length: 0};
        this.state = {tasks: []};
    };

    addTask()   {

    }

    render() {
        return  (
          <div className={'to-do-list'}>
              <div className={'form'}>
                  <input type={'text'} placeholder={'Введите название задания'}/>
                  <button>Добавить задание</button>
              </div>
              <div className={'task-list'}>
                  <Task />
              </div>
          </div>
        );
    }
}

export default ToDoList;