import PropTypes from "prop-types";
import "./HistoryView.css";
import MainView from "./MainView";

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem("diary") || "{}");

  // Object.keys(answers); //==> ['18','19']
  // Object.values(answers); //==> ['abc','123']
  // Object.entries(answers); //==> [['18','abc'],['20', '123']]

  // Object.keys(answers).map((key) => {
  //   const value = answers[key];
  //   key, value;
  //   return (
  //     <div>
  //       {key}: {value}
  //     </div>
  //   );
  // });

  // Object.entries(answers).map(([key, value]) => {
  //   return (
  //     <div>
  //       {key}: {value}
  //     </div>
  //   );
  // });

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          className="back-btn"
          onClick={() => {
            setView("main");
          }}
        >
          &lt;
        </button>
        <h4>다이어리 기록</h4>
      </div>
      {Object.entries(answers).map(([key, value]) => (
        <div key={key} className="diary-item">
          <div className="diary-date">{key}일</div>
          <div>{value}</div>
        </div>
      ))}
    </>
  );
}

HistoryView.propTypes = {
  setView: PropTypes.func,
};

export default HistoryView;
