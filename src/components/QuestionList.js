import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onSetQuestions }) {
  function handleDeleteQuestion(questionId) {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(() => {
        const remainingQuestions = questions.filter(q => q.id !== questionId);
        onSetQuestions(remainingQuestions);
      });
  }

  function handleAnswerChange(questionId, correctIndex) {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "correctIndex": correctIndex,
      }),
    }).then(response => response.json());
  }

  const questionItems = questions.map(question => (
    <QuestionItem
      onAnswerChange={handleAnswerChange}
      onDeleteQuestion={handleDeleteQuestion}
      key={question.id}
      question={question}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;
