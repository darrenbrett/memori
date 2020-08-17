import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRadioGroup,
  IonList,
  IonLabel,
  IonListHeader,
  IonItem,
  IonRadio,
  IonItemDivider,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";

const Questions: React.FC = () => {
  const history = useHistory();

  let questions = [
    {
      id: 1,
      question: "What is the closest planet to the sun?",
      choices: ["Mercury", "Mars", "Venus", "Earth"],
      answer: "Mercury",
    },
    {
      id: 2,
      question: "What is known as 'the Red Planet'?",
      choices: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What planet has the 'Giant Red Spot'?",
      choices: ["Neptune", "Venus", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
  ];

  let answers: Answers[] = [];
  let finalAnswers: Answers[] = [];

  const getSelection = (
    questionIndex: number,
    optionIndex: number,
    choice: string
  ) => {
    let answersArr: Answers[] = [];
    if (answers.length < 1) {
      answers.push({ questionIndex, optionIndex, choice });
      answersArr = [...answers];
    }
    for (const i of answers) {
      if (i.questionIndex === questionIndex) {
        const filteredArr = answers.filter(
          (i: Answers) => i.questionIndex !== questionIndex
        );
        filteredArr.push({ questionIndex, optionIndex, choice });
        answers = [...filteredArr];
        answersArr = [...answers];
      } else if (i.questionIndex !== questionIndex) {
        answers.push({ questionIndex, optionIndex, choice });
        answersArr = [...answers];
      }
      finalAnswers = [...answersArr];
      console.log("finalAnswers: ", finalAnswers);
    }
  };

  const getScore = () => {
    let score = 0;
    for (const u of answers) {
      for (const q of questions) {
        if (u.questionIndex + 1 === q.id && u.choice === q.answer) {
          score++;
        }
      }
    }
    console.log("score: ", score);
    return score;
  };

  const submitAnswers = () => {
    console.log("submitAnsers() is firing...");
    // answersSubmitted = true;
    // form.reset();
    getScore();
    showModal();
    updateUser();
    history.push("/home");
  };

  const showModal = () => {
    console.log("Showing modal...");
  };

  const updateUser = () => {
    console.log("Updating user...");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form id="triviaForm">
              <IonList>
                {questions.map((q, questionIndex) => (
                  <IonRadioGroup value="biff" key={q.id}>
                    <IonListHeader>
                      <IonLabel class="question">{q?.question}</IonLabel>
                    </IonListHeader>
                    {q.choices.map((choice, optionIndex) => (
                      <IonItem key={choice[optionIndex]}>
                        <IonLabel>{choice}</IonLabel>
                        <IonRadio
                          slot="start"
                          value={choice}
                          onClick={() =>
                            getSelection(questionIndex, optionIndex, choice)
                          }
                        ></IonRadio>
                      </IonItem>
                    ))}
                  </IonRadioGroup>
                ))}
              </IonList>
              <IonItemDivider className="divider"></IonItemDivider>
              <IonButton expand="block" onClick={submitAnswers}>
                SUBMIT ANSWERS
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Questions;

export interface Answers {
  questionIndex: number;
  optionIndex: number;
  choice: string;
}
