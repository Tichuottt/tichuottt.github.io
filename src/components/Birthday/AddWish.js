import {useRef} from 'react';
import {FIREBASE_URL} from '../../utils/Const'
import classes from './AddWish.module.css';

const AddWish = (props) => {
    const taskInputRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current.value;

        if (enteredValue.trim().length > 0) {

            try {
                const response = await fetch(
                    FIREBASE_URL + 'bd.json',
                    {
                        method: 'POST',
                        body: JSON.stringify({text: enteredValue}),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Request failed!');
                } else {
                    props?.onAdd(enteredValue)
                    taskInputRef.current.value = ""
                }

            } catch (err) {

            }

        }
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input placeholder={'Ex: Happy birthday Cô High- HCLuong'} type='text' ref={taskInputRef}/>
            <button>{props.loading ? 'Sending...' : 'Add Wishes'}</button>
        </form>
    );
};

export default AddWish;
