import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import NextRound from "./NextRound/NextRound";

const Home: React.FC = () => {
  let user = {
    displayName: "Sammy",
    userName: "Sam",
    roundsCompleted: 0,
    level: "rookie",
    lastScore: 0,
    points: 0,
  };

  const lowScoreMessage = () => {
    let lowScoreMessage = null;
    if (user.roundsCompleted > 0 && user.lastScore < 6) {
      console.log("low score warning: ", user.lastScore);
      lowScoreMessage = (
        <div>
          <IonCard>
            <IonCardContent>
              <p>Sorry, you didn't qualify for another round today.</p>
              <p>Try again tomorrow!</p>
            </IonCardContent>
          </IonCard>
        </div>
      );
    }
    return lowScoreMessage;
  };

  return (
    <IonPage>
      <IonHeader className="header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid className="grid">
          <IonRow>
            <IonCol className="user-overview">
              {user.displayName || user.userName} Overview
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Rounds Completed: {user.roundsCompleted}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol> Player Level: {user.level || 66} </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Latest Round Score: {user.lastScore}/10</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>Total Points: {user.points}</IonCol>
          </IonRow>
          <IonItemDivider className="divider"></IonItemDivider>
          {lowScoreMessage()}
          <NextRound />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
