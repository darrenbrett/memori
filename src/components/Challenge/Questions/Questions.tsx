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
        <IonCard>
          <IonCardContent>
            <IonList>
              {questions.map((q) => (
                <IonRadioGroup value="biff" key={q.id}>
                  <IonListHeader>
                    <IonLabel class="question">{q?.question}</IonLabel>
                  </IonListHeader>
                  {q.choices.map((choice, index) => (
                    <IonItem key={choice[index]}>
                      <IonLabel>{choice}</IonLabel>
                      <IonRadio
                        slot="start"
                        value={choice}
                        onClick={() => getSelection()}
                      ></IonRadio>
                    </IonItem>
                  ))}
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
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
