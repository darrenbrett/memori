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
} from "@ionic/react";
import React from "react";

const Questions: React.FC = () => {
  const submitAnswers = () => {
    console.log("submitAnsers() is firing...");
  };
  const questions = [
    {
      id: "abc",
      question: "What is the closest planet to the sun?",
      choices: ["Mercury", "Mars", "Venus", "Earth"],
    },
    {
      id: "def",
      question: "What is known as the red planet?",
      choices: ["Jupier", "Mars", "Venus", "Saturn"],
    },
    {
      id: "ghi",
      question: "What planet has the 'Red Spot'?",
      choices: ["Neptune", "Venus", "Jupiter", "Mars"],
    },
  ];

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
        <form>
          <IonList>
            {questions.map((q) => (
              <IonRadioGroup value="biff" key={q.id}>
                <IonListHeader>
                  <IonLabel class="question">{q?.question}</IonLabel>
                </IonListHeader>
                <IonItem>
                  <IonLabel>{q?.choices[0]}</IonLabel>
                  <IonRadio
                    slot="start"
                    value={q?.choices[0]}
                    onClick={() => getSelection()}
                  ></IonRadio>
                </IonItem>
                <IonItem>
                  <IonLabel>{q?.choices[1]}</IonLabel>
                  <IonRadio
                    slot="start"
                    value={q?.choices[1]}
                    onClick={() => getSelection()}
                  ></IonRadio>
                </IonItem>
                <IonItem>
                  <IonLabel>{q?.choices[2]}</IonLabel>
                  <IonRadio
                    slot="start"
                    value={q?.choices[2]}
                    onClick={() => getSelection()}
                  ></IonRadio>
                </IonItem>
                <IonItem>
                  <IonLabel>{q?.choices[3]}</IonLabel>
                  <IonRadio
                    slot="start"
                    value={q?.choices[3]}
                    onClick={() => getSelection()}
                  ></IonRadio>
                </IonItem>
              </IonRadioGroup>
            ))}
          </IonList>
          <IonItemDivider className="divider"></IonItemDivider>
          <IonButton
            expand="block"
            type="submit"
            onClick={() => submitAnswers()}
          >
            SUBMIT ANSWERS
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
