import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({expenses}) => {
    const [selectedYear, setSelectedYear] = useState('2021');


    const onSelectedYear = (yearSelected) => {
        setSelectedYear(yearSelected)
    }

    const filteredData = expenses.filter((item) => {
        return item?.date.getFullYear().toString() === selectedYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={selectedYear} selectedYear={onSelectedYear}/>
            <ExpensesChart expenses={filteredData}/>
            <ExpensesList expensesData={filteredData}/>
        </Card>
    )
}

export default Expenses
