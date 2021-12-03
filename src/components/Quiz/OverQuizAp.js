import React, { useState, useEffect } from "react";
import QuizPer from "./QuizPer";

function OverQuizAp({ score, number, person }) {
  const [nextQuiz, setNextQuiz] = useState(false);

  const [sumType, setSumType] = useState([]);

  useEffect(() => {
    // sum score in array by type_id
    let sum = {};
    score.forEach((item) => {
      if (sum[item.type_id]) {
        sum[item.type_id] += item.score;
      } else {
        sum[item.type_id] = item.score;
      }
    });
    setSumType(
      Object.keys(sum).map((key) => ({
        type_id: key,
        score: sum[key],
      }))
    );
  }, [score]);
  return (
    <>
      {nextQuiz === false ? (
        <div className="text-center">
          <h1 className="mt-16 text-5xl mb-4">Finish Question type 1</h1>
          <p className="text-2xl mb-12">
            You have finished all question type 1.
          </p>
          <button
            className="block border border-[#616A94] rounded-2xl px-8 py-2 text-base outline-none select-none mt-4 cursor-pointer hover:bg-[#616A94] mx-auto"
            onClick={() => setNextQuiz(true)}
          >
            Next Quiz
          </button>
        </div>
      ) : (
        <QuizPer aptitudeScore={[...sumType]} person={person} />
      )}
    </>
  );
}

export default OverQuizAp;
