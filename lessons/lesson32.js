export const LESSON_DATA = {
  lessonNum: 32,
  subject: "실과/코딩",
  grade: "6학년 2학기",
  unitTitle: "소프트웨어와 프로그래밍: 재료를 넣고 결과를 돌려받는 함수",
  badge: "6-2 실과",
  icon: "🧃",
  headerTitle: "6학년 파이썬: 32강 함수 (2) 매개변수와 return",
  defaultRoomCode: "100132",
  simulator: {
    type: "function_param_return",
    title: "만능 자판기: 매개변수(Input)와 return(Output) 가상 탐구실",
    subDesc: "동전을 넣고(매개변수) 음료수를 뽑는(return) 자판기처럼, 함수에 입력값을 전달하고 계산 결과를 돌려받아 변수에 담아보세요!",
    modes: [
      { id: "param_greeting", label: "1. 🏷️ 이름을 전달받는 인사 함수 (def hello(name))", icon: "🏷️" },
      { id: "return_calc", label: "2. ➕ 두 수를 더해 돌려주는 return (def add(a, b))", icon: "➕" },
      { id: "return_vs_print", label: "3. ⚠️ return(변수에 저장) vs print(화면에 보여주기)", icon: "⚠️" }
    ],
    summaryTable: {
      title: "달려라 파이썬 32강: 매개변수와 return 구조표",
      headers: ["구성 요소", "비유 (자판기)", "문법 및 역할", "코드 예시"],
      rows: [
        ["매개변수 (Parameter)", "동전 투입구 (입력)", "함수 괄호 안에 적어 외부에서 전달받는 값", "def add(num1, num2):"],
        ["전달값 (Argument)", "실제 넣는 동전", "함수를 호출할 때 괄호 안에 넣어주는 실제 데이터", "add(10, 20)"],
        ["반환값 (return)", "음료수 배출구 (출력)", "함수가 계산을 마치고 바깥으로 돌려주는 결과물", "return num1 + num2"],
        ["즉시 종료", "return의 부가 기능", "return이 실행되는 즉시 함수는 그 자리에서 종료", "return 뒤의 코드는 실행 안 됨"]
      ]
    }
  },
  questions: [
    {
      id: 1,
      label: "1번 매개변수역할",
      ch: "Q1: 함수 괄호 안에 들어가는 매개변수의 역할",
      q: "`def hello(name):`에서 괄호 안의 `name`이 하는 역할로 옳은 것은?",
      options: [
        "함수를 부를 때 외부에서 넘겨주는 값을 받아들이는 통로(매개변수)",
        "함수를 삭제하는 명령어",
        "비밀번호를 잠그는 특수 기호",
        "화면에 글자를 무조건 출력하는 함수"
      ],
      ans: 0,
      exp: "괄호 안의 변수는 함수 외부에서 전달해주는 재료(값)를 전달받아 함수 안에서 사용할 수 있게 해주는 '매개변수(Parameter)'입니다."
    },
    {
      id: 2,
      label: "2번 return의미",
      ch: "Q2: 함수의 결과물을 돌려주는 return",
      q: "함수 내부에서 계산한 최종 결과값을 함수 바깥으로 되돌려줄 때 사용하는 명령어는?",
      options: [
        "return",
        "give",
        "send",
        "print"
      ],
      ans: 0,
      exp: "함수는 `return 결과값` 명령어를 통해 계산된 데이터를 자신을 호출한 위치로 전달(반환)합니다."
    },
    {
      id: 3,
      label: "3번 덧셈함수결과",
      ch: "Q3: 매개변수와 return을 가진 함수 계산",
      q: "아래 코드를 실행했을 때 화면에 출력되는 결과는?\n```python\ndef add(a, b):\n    return a + b\n\nresult = add(7, 3)\nprint(result)\n```",
      options: [
        "10",
        "73",
        "a + b",
        "None"
      ],
      ans: 0,
      exp: "a에는 7, b에는 3이 들어가고 `return 7 + 3`이 실행되어 10이라는 값이 나와 `result`에 저장되므로 10이 출력됩니다."
    },
    {
      id: 4,
      label: "4번 return과print차이",
      ch: "Q4: return과 print의 결정적 차이점",
      q: "함수에서 `return`과 `print`의 차이점에 대한 설명으로 올바른 것은?",
      options: [
        "return은 값을 변수에 저장할 수 있게 넘겨주고, print는 화면에 글자를 보여주기만 한다.",
        "return과 print는 완전히 똑같은 명령어이다.",
        "print를 써야만 다른 계산에 활용할 수 있다.",
        "return은 화면에 큰 글씨로 출력할 때 쓴다."
      ],
      ans: 0,
      exp: "print는 단순히 콘솔 모니터에 결과를 보여주고 사라지지만, return은 값을 실제로 바깥으로 전달하여 다른 변수에 저장하거나 추가 계산에 쓸 수 있게 만듭니다."
    },
    {
      id: 5,
      label: "5번 return종료효과",
      ch: "Q5: return 실행 후 뒷 코드의 운명",
      q: "아래 코드에서 화면에 '끝'이라는 글자가 출력될까요?\n```python\ndef test():\n    return 100\n    print('끝')\n\ntest()\n```",
      options: [
        "출력되지 않는다 (return을 만나면 함수가 즉시 끝남)",
        "'끝'이 출력된다",
        "100과 '끝'이 둘 다 출력된다",
        "오류가 난다"
      ],
      ans: 0,
      exp: "함수는 `return` 문장을 실행하는 즉시 값을 돌려주고 함수를 종료해버리므로, return 아랫줄에 있는 print('끝')은 절대 실행되지 않습니다."
    }
  ],
  neisRubric: {
    code: "[6실05-02, 6실05-03]",
    standard: "함수의 입력(매개변수)과 출력(반환값, return) 개념을 이해하고, 데이터를 전달받아 처리한 후 결과를 반환하는 유기적 함수를 작성할 수 있다.",
    high: "매개변수(인자)를 통한 데이터 전달 체계와 return 문의 값 반환 및 함수 즉시 종료 원리를 완벽히 파악하고, print문과의 차이를 명확히 구분하여 반환값을 재가공하는 프로그램을 우수하게 설계함.",
    mid: "함수에 인자(값)를 넘겨주는 방법과 return을 통해 결과값을 받아 변수에 저장하는 흐름을 이해하고 코딩 실습을 원활히 완수함.",
    low: "자판기에 동전을 넣고 음료를 뽑듯 함수에도 입력과 출력이 있음을 알고, 퀴즈 레이싱을 통해 return 키워드의 철자를 익히는 중임.",
    questionFeedback: {
      1: { correct: "매개변수가 외부 데이터를 전달받는 입력 통로임을 정확히 이해함.", incorrect: "함수 괄호 안 매개변수의 역할(입력값 수신)을 다시 확인할 필요가 있음." },
      2: { correct: "결과값을 바깥으로 돌려주는 return 키워드를 올바르게 선택함.", incorrect: "함수의 결과 반환 키워드인 return을 복습하도록 지도가 권장됨." },
      3: { correct: "매개변수 바인딩과 덧셈 연산 후 반환되는 결과값을 정확히 추론함.", incorrect: "함수에 인자가 대입되어 계산되는 단계를 차근차근 점검할 필요가 있음." },
      4: { correct: "단순 화면 출력(print)과 데이터 반환(return)의 차이를 완벽히 구분함.", incorrect: "화면 출력과 값의 반환이 갖는 용도 차이를 명확히 정리해야 함." },
      5: { correct: "return 문이 함수 실행을 즉각 종료시킨다는 제어 특성을 바르게 파악함.", incorrect: "return 실행 즉시 함수가 끝나 뒷줄 코드가 무시됨을 확인할 필요가 있음." }
    }
  }
};