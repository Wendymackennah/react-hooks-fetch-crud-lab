import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"; // Assuming you have a QuestionItem component

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions when component mounts
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* Map through questions array and render QuestionItem components */}
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
