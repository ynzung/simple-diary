import PropTypes from "prop-types";
import "./HistoryView.css";
import MainView from "./MainView";

function HistoryView({ setView }) {
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
      <div className="diary-item">
        <div className="diary-date">(날짜)</div>
        <div>(내용)</div>
      </div>
    </>
  );
}

HistoryView.propTypes = {
  setView: PropTypes.func,
};

export default HistoryView;
