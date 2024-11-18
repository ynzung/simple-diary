import PropTypes from "prop-types";
import HistoryView from "./HistoryView";
import "./MainView.css";
import { useEffect, useState } from "react";

function MainView({ setView }) {
  const now = new Date();
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const current = year + "년 " + month + "월 " + date + "일";

  const answers = JSON.parse(localStorage.getItem("diary") || "{}")[date];

  const [questions, setQuestions] = useState({});
  const [input, setInput] = useState(
    JSON.parse(localStorage.getItem("diary") || "{}")[date]
  );

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hackurity01/simple-diary/main/src/questions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <>
      <div className="header">
        <div>{current}</div>
        <div>
          <button
            className="history-btn"
            onClick={() => {
              setView("history");
            }}
          >
            기록 보기
          </button>
        </div>
      </div>

      <div className="question">{questions[date]}</div>
      <div className="content">
        <textarea
          value={input}
          onChange={(e) => {
            const value = e.target.value;
            setInput(e.target.value);
            localStorage.setItem(
              "diary",
              JSON.stringify({ ...answers, [date]: value })
            );
          }}
        />
      </div>
    </>
  );
}

MainView.propTypes = {
  setView: PropTypes.func,
};

export default MainView;
