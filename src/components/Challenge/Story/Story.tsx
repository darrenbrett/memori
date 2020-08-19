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
} from "@ionic/react";
import React from "react";
import "./Story.css";
import Countdown from "./../Countdown/Countdown";

const Story: React.FC = () => {
  let timed: boolean = true;

  let titleWithTimer = <IonTitle>Short Story</IonTitle>;

  if (timed) {
    titleWithTimer = (
      <IonTitle>
        Time Remaining:
        <span>
          <Countdown minutes={1} />
        </span>
      </IonTitle>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {titleWithTimer}
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
            <p>
              Sed efficitur efficitur elit, a vulputate felis faucibus non.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sagittis, lorem non varius ullamcorper, felis velit aliquam nulla,
              eu semper est lorem ut orci. Donec tristique eros egestas turpis
              elementum molestie. Sed orci odio, mollis eget erat in, semper
              varius est. Sed hendrerit turpis quis felis dictum euismod. Nulla
              facilisi. Morbi pharetra elit eu nulla cursus euismod. Phasellus
              sagittis, metus sit amet blandit placerat, eros quam porttitor
              erat, at tristique ante ex vel risus.
            </p>
            <p>
              Vivamus eu quam quis nulla eleifend vulputate. Proin ac orci sed
              arcu lacinia ultrices vel nec elit. Etiam luctus mi iaculis
              facilisis euismod. Etiam interdum maximus nibh, suscipit mollis
              justo feugiat at. Aliquam ac nulla egestas erat mollis
              consectetur. Nullam vulputate nisi lorem, in volutpat mi dictum a.
              Proin maximus eu lacus sit amet lobortis.
            </p>
            <p>
              Cras ultrices fermentum dapibus. Nam scelerisque, mi id cursus
              congue, neque nisi fringilla enim, vitae congue leo massa ac enim.
              Phasellus ut tristique lectus. Integer eget interdum sem. Nam
              venenatis fermentum metus, sed pulvinar felis. Proin posuere quam
              ac leo commodo ullamcorper.
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
