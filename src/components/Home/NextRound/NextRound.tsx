import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import React from "react";
import "./NextRound.css";

const NextRound: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          {/* <p className="attention">Ready?</p> */}
          <IonButton routerLink="/challenge">PLAY NEXT ROUND</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default NextRound;
