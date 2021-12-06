import React, { useState, useEffect } from "react";
import { QuizAp, Start } from "../components";

function QuizTest({ title }) {
  const [start, setStart] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <div className="pt-40 pb-[120px] bg-[#014386] mb-[-120px]">
        <div className="container">
          <div className="w-full md:w-5/6 mx-auto">
            <h1 className="text-[40px] font-bold mb-8 text-white mx-auto">
              What Anime Character are You? Create an Anime Quiz with AidaForm!
            </h1>
            <div className="text-lg text-white mx-auto mb-8">
              Personality tests are not all about extraversion and
              intuitiveness. Matching movie characters, animals, cocktails, or
              places to personality has been people’s favorite pastime since the
              invention of internet quiz mechanics, and Buzzfeed capitalizes on
              that all the time. Catch that Buzzfeed vibe and create your own
              anime character quiz in AidaForm. Entertaining your audience helps
              you grow your community, sell ad spaces and merch – and making an
              anime personality quiz is a great way to entertain people.
              <br />
              <br />
              You might have taken anime personality tests before, but how do
              you make them? AidaForm helps you with the tech so you can bring
              out the otaku in you and compose any anime-type quiz in minutes
              using our template.
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-[120px]">
        <div className="w-full bg-[#faf0fc] shadow-lg rounded-lg">
          {start ? <QuizAp /> : <Start setStart={setStart} />}
        </div>
      </div>
    </>
  );
}

export default QuizTest;
