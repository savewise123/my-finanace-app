import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  background-color: #ffffff;

  border-radius: 16px;

  padding: 20px;
`;

const ExpenseItemList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;

const ExpenseItem = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 15px 20px;

  border-radius: 8px;

  background-color: #fffffff2;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s ease-in-out;

  cursor: pointer;

  text-decoration: none;

  &:hover {
    transform: scale(1.02);
  }

  /* 자식 요소 */
  span {
    font-size: 16px;
    color: #333;
  }

  span:last-child {
    font-weight: bold;
    color: #007bff;
    flex-shrink: 0;
  }
`;

const ExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    &:first-child {
      margin-bottom: 5px;
      color: #666;
      font-size: 14px;
    }

    &:last-child {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
`;

export default function ExpenseList() {
  return (




    
    <Section>
      <ExpenseItemList>
        <ExpenseItem as={Link} to={`/expenses/${1}`}>
          <ExpenseDetails>
            <span>2024-12-22</span>
            <span>{"식비 - 버거킹"}</span>
          </ExpenseDetails>
          <span>{10000} 원</span>
        </ExpenseItem>
        <ExpenseItem as={Link} to={`/expenses/${1}`}>
          <ExpenseDetails>
            <span>2024-12-23</span>
            <span>{"도서 - 딥다이브 자바스크립트"}</span>
          </ExpenseDetails>
          <span>{18000} 원</span>
        </ExpenseItem>
      </ExpenseItemList>
    </Section>
  );
}
