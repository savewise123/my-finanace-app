import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MonthDisplay = () => {
  return (
    <div>
      <h1>Months of the Year</h1>
      <ul>
        {months.map((month, index) => (
          <li key={index}>{month}</li>
        ))}
      </ul>
    </div>
  );
};

function Home() {
  const [date, setDate] = useState([]);
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState([]);
  const [content, setContent] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    const newItem = { Item };
    resetForm(); // 입력 필드 초기화
  };

  // 🟠 resetForm: 입력 필드를 초기화하는 함수
  const resetForm = () => {
    setDate("");
    setItem(0);
    setPrice(0);
    setContent(0);
  };

  return (
    <div>
      홈
      <form onSubmit={handleSubmit} className="expense-form">
        <label>
          날짜
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
            required
          />
        </label>
        <label>
          항목
          <input
            type="number"
            value={item}
            onChange={(e) => setItem(+e.target.value)}
          />
        </label>
        <label>
          금액
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </label>
        <label>
          내용
          <input
            type="number"
            value={content}
            onChange={(e) => setContent(+e.target.value)}
          />
        </label>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
}

export default App;
