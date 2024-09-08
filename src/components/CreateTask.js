import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const navigate = useNavigate();

    const goTaskNotification = () => {
        navigate('/task-notifications', { state: { initialMessage: 'Initial Message' } });
    };

    return (
        <div>
            <button onClick={goTaskNotification}>Go to Task Notification</button>
        </div>
    );
};

export default CreateTask;
