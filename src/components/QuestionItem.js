import React from "react";

function QuestionItem({ question, deleteQuestion, updateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleUpdateCorrectAnswer = (event) => {
    const newCorrectIndex = parseInt(event.target.value);
    // Pass the new correctIndex to the parent component for updating
    updateCorrectAnswer(id, newCorrectIndex); 
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleUpdateCorrectAnswer}>
          {options}
        </select>
      </label>
      <button onClick={() => deleteQuestion(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
