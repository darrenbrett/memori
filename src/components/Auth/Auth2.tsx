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

import { useForm, Controller } from "react-hook-form";

const Auth2: React.FC = () => {
  const { handleSubmit, control } = useForm({});

  let loading: boolean = false;
  const history = useHistory();

  const onLogin = (data: any) => {
    console.log("onLogin() firing: ", data);
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
            {/* <form onSubmit={handleSubmit((data) => console.log("70: ", data))}> */}
            <form onSubmit={handleSubmit((data) => onLogin(data))}>
              <IonItem className="no-line">
                <IonLabel>Email</IonLabel>
                <Controller
                  render={({ onChange, onBlur, value }) => (
                    <IonInput onIonChange={onChange} />
                  )}
                  control={control}
                  name="email"
                  rules={{
                    required: "This is a required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "invalid email address",
                    },
                  }}
                />
              </IonItem>
              {/* <IonItem lines="none" class="no-line">
                <p>Should be a valid email address.</p>
              </IonItem> */}
              {/* <IonItem className="no-line">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" required></IonInput>
              </IonItem> */}
              <IonItem className="no-line">
                <IonLabel>Password</IonLabel>
                <Controller
                  render={({ onChange, onBlur, value }) => (
                    <IonInput onIonChange={onChange} />
                  )}
                  control={control}
                  name="password"
                  rules={{
                    required: "This is a required field",
                    min: 6,
                    // pattern: {
                    //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    //   message: "invalid email address",
                    // },
                  }}
                />
              </IonItem>
              {/* <IonItem lines="none" class="no-line">
                <p>Should be at least 6 characters in length.</p>
              </IonItem> */}

              <IonButton
                color="primary"
                type="submit"
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
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Auth2;
