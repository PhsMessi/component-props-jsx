import { useState } from "react";

export default function App() {
  return (
    <div className="container">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1231,
    question: "who is the author of the book titled 'Atomic Habits?' ",
    answer: "James Clear",
  },
  {
    id: 1441,
    question: "what is the most used programming language for the web?",
    answer: "PHP",
  },
  {
    id: 1562,
    question: "Who won the Formula 1 in 2021?",
    answer: "Max Verstappen",
  },
];

function FlashCards() {
  const [selected, setSelect] = useState(null);

  const showAnswer = (id) => {
    setSelect(id);
  };
  return (
    <div className="lists">
      {questions.map((item) => (
        <div
          // onClick={(e) => setSelect(item.id)}
          onClick={() => showAnswer(item.id)}
          key={item.id}
          className={item.id === selected ? "item-selected" : "item"}
        >
          <p>{item.id === selected ? item.answer : item.question}</p>
        </div>
      ))}
    </div>
  );
}
