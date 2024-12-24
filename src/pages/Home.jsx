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
  const [month, setMonth] = useState([]);
  const [date, setDate] = useState([]);


  
  const event    


  // useEffect 사용
  useEffect(() => {
    const fetchDate = async () => {
      let { data, error } = await supabase.from("expenses").select("*");
      data.filter =


      
        // .select()
        // .filter()
        console.log(data);
    };
    fetchDate();




  }, []);









  return (
    <Container>
      <MonthNavigation />
      <CreateExpense />
      <ExpenseList />
    </Container>
  );
}

export default Home;
