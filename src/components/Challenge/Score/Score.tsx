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
  IonItemDivider,
} from "@ionic/react";
import React from "react";
import "./Score.css";
import { createBrowserHistory } from "history";

const Score: React.FC = (props: any) => {
  const score = props.location.state;
  console.log("score in score: ", score);
  const history = createBrowserHistory({ forceRefresh: true });

  const returnHome = () => {
    history.push("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Score Results</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardContent>
            <p className="message">
              You scored {score}/10 in your most recent challenge.
            </p>
            <IonItemDivider className="divider"></IonItemDivider>
            <IonButton expand="block" onClick={returnHome}>
              CONTINUE
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Score;
