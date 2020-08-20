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
import axios from "axios";
import { useHistory } from "react-router";
import { APIConfig } from "./../../../environments/environment.prod";

const Questions: React.FC = () => {
  let score = 0;
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

  const getSelection = (
    questionIndex: number,
    optionIndex: number,
    choice: string
  ) => {
    if (answers.length < 1) {
      answers.push({ questionIndex, optionIndex, choice });
    }
    for (const i of answers) {
      if (i.questionIndex === questionIndex) {
        const filteredArr = answers.filter(
          (i: Answers) => i.questionIndex !== questionIndex
        );
        filteredArr.push({ questionIndex, optionIndex, choice });
        answers = [...filteredArr];
      } else if (i.questionIndex !== questionIndex) {
        answers.push({ questionIndex, optionIndex, choice });
      }
    }
  };

  const getScore = () => {
    for (const u of answers) {
      for (const q of questions) {
        if (u.questionIndex + 1 === q.id && u.choice === q.answer) {
          score++;
        }
      }
    }
    return score;
  };

  const submitAnswers = async () => {
    getScore();
    await updateUser();
    history.push("/score", score);
  };

  const updateUser = async (
    username = "smithy@s.com",
    lastCompletedSet = "1",
    lastCompletedTopic = "starter",
    pointsToAdd = score
  ) => {
    let result: object;
    const req = `users/update-user-stats`;
    console.log("Updating user...");
    const body = {
      username,
      lastCompletedSet,
      lastCompletedTopic,
      pointsToAdd,
    };
    console.log("body sending: ", body);
    result = await axios.post(`${APIConfig.url}/${req}`, body);
    console.log("result: ", result);
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
              <IonButton
                expand="block"
                onClick={submitAnswers}
                routerLink="/score"
              >
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
