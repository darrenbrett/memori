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
} from "@ionic/react";
import React from "react";
import "./Challenge.css";

const Challenge: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Challenge</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonCardContent>
            <p className="message">
              In your first challenge you'll have one minute to read a very
              short story and then answer a few multiple choice questions about
              what you've read.
            </p>
            <p className="attention">Ready?</p>
            <IonButton routerLink="/story" expand="block">
              GO TO STORY
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Challenge;
