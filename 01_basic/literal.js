fetch("http://192.168.0.83/HelloJSP/mock.json")
  .then((Response) => Response.json())
  .then((data) => {
    //  console.log(data);
    // 'Male' => 출력 , 'Female' => 출력
    ["Male", "Female"].forEach((gender) => {
      console.log(
        `${gender} => ${data
          // data가 배열이다보니 if문사용 X, but 빽팁안에는 연산식 넣을 수 있음
          .filter((elem) => elem.gender == `${gender}`)
          // 앞에있는 gender를 쓰려할 때, 연산식안에 ${}를 그냥 쓰면 안돼고, 빽팁안에!
          .map((elem) => elem.first_name)
          .join(" , ")}`
        // 배열값을 문자로 바꿔주는, 합쳐주는, 구분자를 콤마(,)로 하겠다는 의미
      );
      // 표현식 구문안에 또 다른 표현식은 사용 X , 빽팁응 잘 써라잉
    });
  })
  .catch(console.log);
