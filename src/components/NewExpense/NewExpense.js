import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = ({onAddExpense = null} = {}) => {
    const [isShowAdd, setIsShowAdd] = useState(false)


    const onSaveExpenseData = (expenseData) => {
        if (!expenseData) return

        const expenseDataEntered = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseDataEntered)
    }
    return (
        <div className='new-expense'>
            {isShowAdd ?
                <ExpenseForm onCancel={() => {
                    setIsShowAdd(false)
                }}
                             onSaveExpenseData={onSaveExpenseData}/> :
                <div className='new-expense__add-new'>
                    <button type='submit'
                            onClick={() => {
                                setIsShowAdd(true)
                            }}>
                        Add New Expense
                    </button>
                </div>
            }


        </div>
    )
}

export default NewExpense
