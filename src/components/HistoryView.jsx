import PropTypes from "prop-types";
import "./HistoryView.css";
import MainView from "./MainView";

function HistoryView({ setView }) {
  const answers = JSON.parse(localStorage.getItem("diary") || "{}");

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
