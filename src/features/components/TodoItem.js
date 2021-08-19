import React, { useState } from 'react'
import { selectTodoById, markTodo, DeleteTodo } from "../reducers/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateToDo } from '../apis/todos';
import { notification, Modal, Button, Form, Input, List } from 'antd';
import '../../styles/TodoItem.css';

import {
    EditOutlined
} from '@ant-design/icons';

function TodoItem(props) {
    const todo = useSelector((state) => selectTodoById(state, props.itemId));
    const dispatch = useDispatch();

    function onDelete(event) {
        removeTodo(props.itemId).then(() => {
            dispatch(DeleteTodo(props.itemId));
        });
        event.stopPropagation();
        openNotification('deleted');
    }

    const onMark = () => {
        updateToDo(props.itemId, { done: !todo.done }).then(() => {
            dispatch(markTodo(props.itemId));
        });
        todoStatus = !todo.done;
        openNotification('updated');
    };
    console.log(todo.done);
    var todoStatus = todo.done ? "done" : "";

    const openNotification = (text) => {
        notification.open({
            message: 'List successfully ' + text
        });
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <div className="lists-container">
                <div className={`TodoiItem-todo-${todoStatus}`} >
                    <span onClick={onMark}>{todo.text}</span>
                    <Button type="primary" className="todo-list-delete" onClick={onDelete}>x</Button>
                    <Button type="primary" className={`todo-list-edit-${todoStatus}`} onClick={showModal} icon={<EditOutlined />}></Button>
                </div>
            </div>
            <Form id="myForm"></Form>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input className="edit-input"></Input>
            </Modal>
        </div>
    )
}

export default TodoItem;