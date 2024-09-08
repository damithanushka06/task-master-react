import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const TaskNotification = (props) => {
    const location = useLocation()
    const [initialMessage, setInitialMessage] = useState(location.state.initialMessage);


    const handleChangeMessage  = () => {
      setInitialMessage('Updated message');
    }

    return (
        <div>
            <h1>Task Notification</h1>
            <p>{initialMessage}</p>
            <Button onClick={handleChangeMessage}>Update Message</Button>
        </div>
    );
};

export default TaskNotification;
