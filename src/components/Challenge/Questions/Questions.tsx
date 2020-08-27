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
import React, { useState } from "react";
import "@ionic/react/css/core.css";
import axios from "axios";
import { useHistory } from "react-router";
import { APIConfig } from "./../../../environments/environment.prod";

const questions = [
  {
    id: 1,
    question: "What is the closest planet to the sun?",
    choices: ["Mercury", "Mars", "Venus", "Earth"],
    answer: "Mercury",
    choice: "",
  },
  {
    id: 2,
    question: "What is known as 'the Red Planet'?",
    choices: ["Jupiter", "Mars", "Venus", "Saturn"],
    answer: "Mars",
    choice: "",
  },
  {
    id: 3,
    question: "What planet has the 'Giant Red Spot'?",
    choices: ["Neptune", "Venus", "Jupiter", "Mars"],
    answer: "Jupiter",
    choice: "",
  },
];
const Questions: React.FC = () => {
  const [locQuestions, setQuestions] = useState(questions);
  const [answers, setAnswers] = useState<string[]>([]);

  let score = 0;

  const history = useHistory();

  const areAllQuestionsAnswered =
    answers.filter(Boolean).length === locQuestions.length;

  const getChoice = (qId: any, qChoice: any) => {
    setAnswers((currentAnswers) => {
      const result = [...currentAnswers];
      result[qId] = qChoice;
      return result;
    });
  };

  const getScore = () => {
    locQuestions.forEach((q) => {
      if (q.answer === answers[q.id]) {
        score++;
      }
    });
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
    const body = {
      username,
      lastCompletedSet,
      lastCompletedTopic,
      pointsToAdd,
    };
    result = await axios.post(`${APIConfig.url}/${req}`, body);
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
            <IonList>
              {questions.map((q, questionIndex) => (
                <IonRadioGroup key={q.id}>
                  <IonListHeader>
                    <IonLabel className="question">{q?.question}</IonLabel>
                  </IonListHeader>
                  {q.choices.map((choice, optionIndex) => (
                    <IonItem key={choice[optionIndex]}>
                      <IonLabel>{choice}</IonLabel>
                      <IonRadio
                        slot="start"
                        value={choice}
                        onClick={() => getChoice(q.id, choice)}
                      ></IonRadio>
                    </IonItem>
                  ))}
                </IonRadioGroup>
              ))}
            </IonList>
            <IonItemDivider className="divider"></IonItemDivider>
            {areAllQuestionsAnswered ? (
              <IonButton expand="block" onClick={() => submitAnswers()}>
                SUBMIT ANSWERS
              </IonButton>
            ) : null}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
