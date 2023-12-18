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
        buttonSize: "xs",
        buttonView: "main",
        buttonTheme: "dark",
        buttonBorderRadius: "20",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
