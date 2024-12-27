import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import { useState, useEffect } from "react";
import supabase from "../utils/supabase";

const Container = styled.main`
  max-width: 800px;

  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 20px;

  margin: 0 auto;
`;

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  console.log(expenses);
  const filteredExpenses = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });
  console.log(filteredExpenses);

  return (
    <Container>
      <MonthNavigation
        setSelectedMonth={setSelectedMonth}
        selectedMonth={selectedMonth}
      />
      <CreateExpense setExpenses={setExpenses} expenses={expenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Container>
  );
}

export default Home;
