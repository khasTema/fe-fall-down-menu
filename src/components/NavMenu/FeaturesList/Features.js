import React from 'react';
import { ReactComponent as Calendar } from '../../../images/icon-calendar.svg';
import { ReactComponent as ToDo } from '../../../images/icon-todo.svg';
import { ReactComponent as Reminders} from '../../../images/icon-reminders.svg';
import { ReactComponent as Planning } from '../../../images/icon-planning.svg';

function Features({show}) {
  return (
    <ul className="menu__block" style={show ? {display: 'block'} : {display: 'none'}}>
      <li className="block__item">
        <a href="/#" className="item__link">
          <ToDo/> Todo List
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          <Calendar/> Calendar
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          <Reminders/> Reminders
        </a>
      </li>
      <li className="block__item">
        <a href="/#" className="item__link">
          <Planning/> Planning
        </a>
      </li>
    </ul>
  )
}

export default Features