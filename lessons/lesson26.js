export const LESSON_DATA = {
  lessonNum: 26,
  subject: "실과/코딩",
  grade: "6학년 2학기",
  unitTitle: "소프트웨어와 프로그래밍: 무한 루프(while True)와 탈출문(break)",
  badge: "6-2 실과",
  icon: "🛑",
  headerTitle: "6학년 파이썬: 26강 while 반복문 (2) break와 무한 루프",
  defaultRoomCode: "100126",
  simulator: {
    type: "while_break_reactor",
    title: "비상 탈출 레버: while True & break 가상 탐구실",
    subDesc: "일부러 무한 루프(while True)를 돌리다가, 특정 조건이 맞을 때 break로 즉시 탈출하는 현대 프로그래밍의 핵심 제어 패턴을 체험하세요!",
    modes: [
      { id: "break_on_target", label: "1. 🛑 특정 숫자 발견 시 즉시 탈출 (break)", icon: "🛑" },
      { id: "input_exit_loop", label: "2. 💬 '그만'을 입력할 때까지 계속 묻기", icon: "💬" },
      { id: "infinite_safe", label: "3. 🛡️ 안전장치 break가 있는 합산기", icon: "🛡️" }
    ],
    summaryTable: {
      title: "달려라 파이썬 26강: 무한 루프와 break 핵심 제어표",
      headers: ["명령어 / 구문", "역할", "실행 효과", "코드 예시"],
      rows: [
        ["while True:", "의도적 무한 루프", "조건이 항상 참이므로 끝없이 계속 실행", "while True:"],
        ["break", "반복문 즉시 탈출", "자신을 감싸고 있는 가장 가까운 반복문을 강제 종료", "if num == 0: break"],
        ["if와 break의 조합", "탈출 조건 설정", "반복문 안에서 검사하여 특정 상황에만 탈출", "if word == '끝': break"],
        ["무한 입력 패턴", "대화형 프로그램", "사용자가 원할 때까지 입력을 계속 받는 게임/앱 구조", "ans = input('계속할까요? ')"]
      ]
    }
  },
  questions: [
    {
      id: 1,
      label: "1번 break기능",
      ch: "Q1: break 명령어의 핵심 역할",
      q: "반복문 안에서 `break` 명령어를 실행하면 컴퓨터는 어떤 동작을 할까요?",
      options: [
        "진행 중인 반복문을 즉시 깨뜨리고 완전히 빠져나온다.",
        "컴퓨터를 강제로 재부팅한다.",
        "반복문의 맨 처음으로 되돌아간다.",
        "화면에 에러 메시지를 띄우고 정지한다."
      ],
      ans: 0,
      exp: "break는 '깨뜨리다'라는 뜻으로, 실행되는 즉시 자신을 둘러싼 반복문을 완전히 강제 종료하고 루프 밖으로 탈출합니다."
    },
    {
      id: 2,
      label: "2번 whileTrue의미",
      ch: "Q2: while True 구문의 성질",
      q: "`while True:`라는 코드가 의미하는 바로 옳은 설명은?",
      options: [
        "조건이 항상 참이므로 break를 만날 때까지 끝없이 반복한다.",
        "조건이 항상 참이므로 딱 1번만 실행되고 끝난다.",
        "True라는 글자를 화면에 계속 출력한다.",
        "문법 오류(SyntaxError)가 발생한다."
      ],
      ans: 0,
      exp: "조건식 자리에 참을 뜻하는 True가 고정되어 있으므로, 내부에서 break로 탈출시켜 주지 않으면 끝없이 반복되는 무한 루프가 됩니다."
    },
    {
      id: 3,
      label: "3번 탈출시점계산",
      ch: "Q3: break로 인한 조기 종료 결과",
      q: "아래 코드를 실행했을 때 화면에 마지막으로 출력되는 숫자는?\n```python\ni = 1\nwhile True:\n    print(i)\n    if i == 3:\n        break\n    i = i + 1\n```",
      options: [
        "3",
        "4",
        "2",
        "1"
      ],
      ans: 0,
      exp: "i가 1, 2, 3까지 출력된 뒤, `if i == 3:` 조건이 만족되어 break가 실행되므로 마지막 출력 숫자는 3이 됩니다."
    },
    {
      id: 4,
      label: "4번 사용자종료패턴",
      ch: "Q4: 'q'를 입력하면 종료되는 코드",
      q: "사용자가 'q'를 입력했을 때 반복문을 멈추게 하는 올바른 코드는?",
      options: [
        "if text == 'q': break",
        "if text == 'q': print('q')",
        "while text == 'q': pass",
        "if text != 'q': break"
      ],
      ans: 0,
      exp: "입력값(text)이 'q'와 일치할 때(`== 'q'`) 즉시 탈출해야 하므로 `if text == 'q': break`가 올바릅니다."
    },
    {
      id: 5,
      label: "5번 break위치효과",
      ch: "Q5: break 아랫줄 코드의 실행 여부",
      q: "아래 코드에서 숫자 5는 출력될까요, 안 될까요?\n```python\nwhile True:\n    break\n    print(5)\n```",
      options: [
        "break가 먼저 실행되어 5는 절대 출력되지 않는다.",
        "5가 한 번 출력된다.",
        "5가 무한히 출력된다.",
        "오류가 난다."
      ],
      ans: 0,
      exp: "break를 만나면 그 아랫줄에 있는 코드들을 거들떠보지도 않고 즉시 반복문 밖으로 튕겨 나가므로 5는 출력되지 않습니다."
    }
  ],
  neisRubric: {
    code: "[6실05-02, 6실05-03]",
    standard: "무한 반복(while True)과 강제 탈출문(break)을 결합하여, 특정 이벤트 발생 시 안전하게 종료되는 상호작용 제어 알고리즘을 작성할 수 있다.",
    high: "무한 루프의 위험성과 유용성을 균형 있게 이해하고, 특정 탈출 조건을 만족했을 때 break를 호출하여 반복문을 안전하게 제어하는 방어적 프로그래밍 역량이 매우 뛰어남.",
    mid: "break 키워드가 반복문을 즉시 중단시키는 역할을 함을 알고 있으며, if문과 break를 결합하여 사용자 입력에 반응하는 반복 코드를 구성함.",
    low: "반복이 멈추지 않을 때 멈추게 하는 명령어가 break임을 알고, 퀴즈 레이싱을 통해 break의 기본 쓰임새를 학습하는 중임.",
    questionFeedback: {
      1: { correct: "break가 반복문을 강제 종료시키는 제어 기능을 정확히 이해함.", incorrect: "break 명령어의 루프 탈출 역할을 다시 점검할 필요가 있음." },
      2: { correct: "while True가 무한 루프를 생성하는 메커니즘을 명확하게 파악함.", incorrect: "조건식이 True로 고정되었을 때 일어나는 무한 실행 현상을 복습해야 함." },
      3: { correct: "break가 걸리는 시점의 조건식을 분석하여 최종 출력값을 정확히 도출함.", incorrect: "break가 실행되는 시점의 변수 값과 코드 순서를 다시 확인할 필요가 있음." },
      4: { correct: "사용자의 특정 종료 입력에 반응하는 if-break 패턴을 바르게 구사함.", incorrect: "특정 문자 입력 시 루프를 끝내는 조건 결합 문법을 보완할 필요가 있음." },
      5: { correct: "break 실행 시 아랫줄 코드가 즉시 생략되고 탈출함을 올바르게 파악함.", incorrect: "break 호출 시 즉각적인 루프 탈출로 인해 뒷 코드가 실행되지 않음을 숙지해야 함." }
    }
  }
};