// fetch

fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((Response) => Response.json()) //json문자열을 javascript객체로 바꾸겠다.
  .then((data) => {
    console.log(data); // A-A'라는 모양으로 바꾸겠다
    data
      .map((elem) => {
        // firstName과 LastName이라는 속성을 Name으로 바꾸겠다
        const newElem = {
          no: elem.id,
          name: elem.first_name + "/" + elem.last_name,
          email: elem.email,
          salary: elem.salary,
        };
        return newElem;
      })
      .forEach((elem) => console.log(elem.no + ": " + elem.name));
  })
  .catch(console.log);
