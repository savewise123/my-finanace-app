import styled from "styled-components";

const Section = styled.section`
  background-color: #ffffff;

  border-radius: 16px;

  padding: 20px;
`;

const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  justify-content: center;
`;

const MonthButton = styled.button`
  text-align: center;

  font-family: serif;

  font-size: 18px;

  font-style: normal;

  font-weight: 600;

  line-height: normal;

  display: flex;

  height: 60px;

  padding: 20px;

  width: 104px;

  justify-content: center;

  align-items: center;

  flex-shrink: 0;

  color: ${(props) => (props.selected ? "#fff" : "#000")};

  border-radius: 10px;

  border: none;

  cursor: pointer;

  background: ${(props) => (!props.selected ? "#F6F7FA" : "#2EC4B6")};

  &:hover {
    background: #2ec4b6;

    color: #fff;
  }
`;

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function MonthNavigation() {
  return (
    <Section>
      <MonthWrapper>
        {MONTHS.map((element) => {
          return <MonthButton key={element}>{`${element}월`}</MonthButton>;
        })}
      </MonthWrapper>
    </Section>
  );
}
