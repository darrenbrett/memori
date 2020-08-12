import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonCardTitle,
  IonCardHeader,
  IonItemDivider,
  useIonViewWillLeave,
} from "@ionic/react";
import React from "react";
import "./Story.css";

const Story: React.FC = () => {
  let ticker;
  const runTimer = () => {
    let i = 0;
    const timeout = 10;
    setTimeout(function tick() {
      ticker = i++;
      ticker.toString();
      console.log(ticker);

      const timeRunner = setTimeout(tick, 1000);
      if (i === timeout) {
        clearTimeout(timeRunner);
      }
    });
  };

  runTimer();

  const resetTicker = () => {
    ticker = "";
  };

  useIonViewWillLeave(resetTicker);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            Short Story - Time: <span className="timer">{ticker}</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="story-title">On To Madison</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              In your first challenge you'll have one minute to read a very
              short story and then answer a few multiple choice questions about
              what you've read.
            </p>
            <IonItemDivider className="divider"></IonItemDivider>
            <p className="attention">Ready?</p>
            <IonButton routerLink="/questions" expand="block">
              GO TO QUESTIONS
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Story;
