import styled from "styled-components";

const Section = styled.section`
  background-color: #ffffff;

  border-radius: 16px;

  padding: 20px;
`;

const InputRow = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  align-items: flex-end;
`;

const InputGroupInline = styled.div`
  display: flex;

  flex-direction: column;

  flex: 1;

  min-width: 120px;

  label {
    margin-bottom: 5px;

    font-size: 14px;

    color: #333;

    text-align: left;
  }
  input {
    padding: 8px;

    border: 1px solid #ddd;

    border-radius: 4px;

    font-size: 14px;
  }
`;

const AddButton = styled.button`
  padding: 8px 20px;

  height: 34px;

  margin-top: 10px;

  background-color: #1919bc;

  color: white;

  border: none;

  border-radius: 4px;

  font-size: 14px;

  cursor: pointer;

  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }
`;

export default function CreateExpense() {
  return (
    <Section>
      <InputRow>
        <InputGroupInline>
          <label htmlFor="date">날짜</label>
          <input type="text" id="date" placeholder="YYYY-MM-DD" />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="item">항목</label>
          <input type="text" id="item" placeholder="지출 항목" />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="amount">금액</label>
          <input type="number" id="amount" placeholder="지출 금액" />
        </InputGroupInline>
        <InputGroupInline>
          <label htmlFor="description">내용</label>
          <input type="text" id="description" placeholder="지출 내용" />
        </InputGroupInline>
        <AddButton>저장</AddButton>
      </InputRow>
    </Section>
  );
}
