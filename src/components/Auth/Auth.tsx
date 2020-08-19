import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router";
import "./Auth.css";

const Auth: React.FC = () => {
  let loading: boolean = false;
  const history = useHistory();
  const onLogin = () => {
    console.log("onLogin() firing...");
    history.push("/home");
  };

  const loadSpinner = () => {
    let spinner;
    if (loading) {
      spinner = (
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSpinner></IonSpinner>
            </IonCol>
          </IonRow>
        </IonGrid>
      );
    }
    return spinner;
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Log in</IonTitle>
          </IonToolbar>
        </IonHeader>
        {loadSpinner()}
        <IonCard>
          <IonCardContent>
            <IonItem className="no-line">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" required></IonInput>
            </IonItem>
            <IonItem lines="none" class="no-line">
              <p>Should be a valid email address.</p>
            </IonItem>
            <IonItem className="no-line">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" required></IonInput>
            </IonItem>
            <IonItem lines="none" class="no-line">
              <p>Should be at least 6 characters in length.</p>
            </IonItem>

            <IonButton
              color="primary"
              // type="submit"
              onClick={() => onLogin()}
              class="btn"
              expand="block"
            >
              Log in
            </IonButton>
            <p className="ion-text-center">Please try again.</p>
            <IonButton
              color="primary"
              type="submit"
              fill="clear"
              class="btn"
              expand="block"
            >
              <a href="/home">Switch to sign up</a>
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
