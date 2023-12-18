window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "53100541249d4b9480b880ba0005fd7d",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-gamma.vercel.app/token.html",
      },
      "https://oauth-master-class-gamma.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then(async (data) => {
        const result = await fetchYandexData(data.access_token);

        authorize(result);

        console.log(result, data);
      })
      .catch((error) => console.log("Что-то пошло не так: ", error));
  };
  };
};
