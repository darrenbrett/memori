import React from "react";
import {
  IonLabel,
  IonButtons,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonRange,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonBackButton,
} from "@ionic/react";

import "./Auth.css";

import { useForm, Controller } from "react-hook-form";

const Auth: React.FC = () => {
  const { handleSubmit, control, errors } = useForm();

  /**
   *
   * @param data
   */
  const onSubmit = (data: any) => {
    debugger;
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>React Hook Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>Details</p>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <IonItem>
            <IonLabel>Gender</IonLabel>
            <Controller
              render={({ onChange, onBlur, value }) => (
                <IonSelect placeholder="Select One" onIonChange={onChange}>
                  <IonSelectOption value="FEMALE">Female</IonSelectOption>
                  <IonSelectOption value="MALE">Male</IonSelectOption>
                </IonSelect>
              )}
              control={control}
              name="gender"
              rules={{ required: "This is a required field" }}
            />
          </IonItem>
          {/* <ErrorMessage
            errors={errors}
            name="gender"
            as={<div style={{ color: "red" }} />}
          /> */}

          <IonItem>
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
          {/* <ErrorMessage
              errors={errors}
              name="email"
              as={<div style={{ color: "red" }} />}
            /> */}
          <IonItem>
            <Controller
              render={({ onChange, onBlur, value }) => (
                <IonRange
                  min={-200}
                  max={200}
                  color="secondary"
                  onIonChange={onChange}
                >
                  <IonLabel slot="start">-200</IonLabel>
                  <IonLabel slot="end">200</IonLabel>
                </IonRange>
              )}
              control={control}
              name="rangeInfo"
              rules={{ required: "Please Select A Value" }}
            />
          </IonItem>
          {/* <ErrorMessage
              errors={errors}
              name="rangeInfo"
              as={<div style={{ color: "red" }} />}
            /> */}
          <div>
            <IonButton type="submit">submit</IonButton>
          </div>
        </form>
        {/*<div className="ion-padding">
            ERRORS: <pre>{JSON.stringify(errors, null, 1)}</pre>
          </div> */}
      </IonContent>
    </IonPage>
  );
};

export default Auth;
