export const fetchProfileData = () => {
  let userPromise = fetchUser();
  return {
    user: wrapPromise(userPromise),
  };
};

const wrapPromise = (promise: any) => {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

const fetchUser = () => {
  console.log("fetch user...");
  return new Promise((resolve) => {
    const username = "smithy@s.com";
    const apiUrl = `http://localhost:3000/api`;
    const req = `/users/stats/${username}`;
    fetch(`${apiUrl}${req}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        resolve({
          displayName: data.displayName || data.username,
          lastCompletedTopic: data.lastCompletedTopic,
          roundsCompleted: data.roundsCompleted,
          level: data.level,
          lastScore: data.lastScore,
          points: data.points,
        });
      });
  });
};
