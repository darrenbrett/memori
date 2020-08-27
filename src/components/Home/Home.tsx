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
import React, { Suspense } from "react";
import "./Home.css";
import NextRound from "./NextRound/NextRound";
import User from "./../../models/user";

import { fetchProfileData } from "./fetchUser";

const resource = fetchProfileData();

const Home: React.FC = () => {
  let user: User;

  const lowScoreMessage = () => {
    let lowScoreMessage = null;
    if (user.roundsCompleted > 0 && user.lastScore < 6) {
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
      return lowScoreMessage;
    }
  };

  const ProfileDetails = () => {
    user = resource.user.read();
    console.log("user: ", user);
    let profileDetails = (
      <IonGrid className="grid">
        <IonRow>
          <IonCol className="user-overview">
            {user?.displayName} Overview
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Rounds Completed: {user?.roundsCompleted}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol> Player Level: {user?.level} </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Latest Round Score: {user?.lastScore}/10</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Total Points: {user?.points}</IonCol>
        </IonRow>
        <IonItemDivider className="divider"></IonItemDivider>
        {lowScoreMessage()}
        <NextRound />
      </IonGrid>
    );
    return profileDetails;
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
        <Suspense fallback={<IonTitle>Loading profile...</IonTitle>}>
          <ProfileDetails />
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

export default Home;
