import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [currentPage, setCurrentPage] = useState("List");
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuestionData(data);
      });
  }, []);

  function handleNewQuestion(newQuestion) {
    setQuestionData([...questionData, newQuestion]);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setCurrentPage} />
      {currentPage === "Form" ? (
        <QuestionForm onSubmitQuestion={handleNewQuestion} />
      ) : (
        <QuestionList questions={questionData} onSetQuestions={setQuestionData} />
      )}
    </main>
  );
}

export default App;
