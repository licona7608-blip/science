export const LESSON_DATA = {
  lessonNum: 23,
  subject: "실과/코딩",
  grade: "6학년 2학기",
  unitTitle: "소프트웨어와 프로그래밍: 여러 갈래 길을 만드는 elif 다중 조건문",
  badge: "6-2 실과",
  icon: "🔀",
  headerTitle: "6학년 파이썬: 23강 if 조건문 (2) elif 다중 조건",
  defaultRoomCode: "100123",
  simulator: {
    type: "elif_multi_branch",
    title: "성적 & 등급 판별기: elif 다중 갈림길 가상 탐구실",
    subDesc: "조건이 3개 이상일 땐 elif! 위에서부터 차례대로 검사하여 처음 맞닥뜨린 '참(True)' 구간만 실행되는 원리를 확인하세요.",
    modes: [
      { id: "grade_eval", label: "1. 🏅 점수별 등급 판별 (A, B, C, F)", icon: "🏅" },
      { id: "traffic_light", label: "2. 🚦 신호등 3색 판별기 (초록/노랑/빨강)", icon: "🚦" },
      { id: "eval_order", label: "3. ⚠️ 위에서부터 순서대로 검사하는 순서의 비밀", icon: "⚠️" }
    ],
    summaryTable: {
      title: "달려라 파이썬 23강: if - elif - else 문법 체계표",
      headers: ["구문", "의미", "작동 방식", "사용 규칙"],
      rows: [
        ["if 조건1:", "첫 번째 조건 검사", "참이면 실행 후 전체 조건문 탈출", "반드시 맨 처음에 1번만 작성"],
        ["elif 조건2:", "그렇지 않고 만약 조건2라면", "앞 조건이 거짓일 때 다음 조건을 검사", "필요한 만큼 여러 개(무제한) 작성 가능"],
        ["else:", "위 조건이 모두 아니라면", "모든 조건이 거짓일 때 실행되는 나머지 구역", "맨 마지막에 선택적으로 1번만 작성"],
        ["실행 우선순위", "위에서 아래로 (Top-Down)", "가장 먼저 참이 된 블록 하나만 실행되고 종료", "조건 작성 순서가 매우 중요"]
      ]
    }
  },
  questions: [
    {
      id: 1,
      label: "1번 elif의미",
      ch: "Q1: elif 키워드의 탄생 배경",
      q: "파이썬의 `elif`는 다음 중 어떤 두 단어를 합쳐서 줄인 말일까요?",
      options: [
        "else if",
        "early if",
        "element if",
        "error if"
      ],
      ans: 0,
      exp: "elif는 'else if(그렇지 않고 만약 ~라면)'의 줄임말로, 앞선 조건이 거짓일 때 새로운 조건을 검사하기 위해 사용합니다."
    },
    {
      id: 2,
      label: "2번 elif개수",
      ch: "Q2: 한 조건문 안에서 elif의 사용 가능 횟수",
      q: "하나의 if 조건문 구조 안에서 `elif`는 최대 몇 개까지 작성할 수 있을까요?",
      options: [
        "제한 없이 원하는 만큼 여러 개 작성할 수 있다.",
        "딱 1개만 작성할 수 있다.",
        "최대 3개까지만 작성할 수 있다.",
        "else보다 적은 개수만 작성해야 한다."
      ],
      ans: 0,
      exp: "elif는 조건이 여러 개 필요한 경우 제한 없이 원하는 만큼 계속해서 덧붙여 사용할 수 있습니다."
    },
    {
      id: 3,
      label: "3번 우선순위탈출",
      ch: "Q3: elif의 최초 만족 시 탈출 성질",
      q: "`score = 95`일 때 아래 코드를 실행하면 화면에 무엇이 출력될까요?\n```python\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\n```",
      options: [
        "A",
        "A B",
        "B",
        "A B 둘 다 출력되지 않음"
      ],
      ans: 0,
      exp: "score는 90 이상과 80 이상 둘 다 만족하지만, 맨 위의 `score >= 90`이 먼저 참이 되었으므로 'A'만 출력하고 전체 if문을 빠져나옵니다."
    },
    {
      id: 4,
      label: "4번 문법주의",
      ch: "Q4: if - elif - else 작성 순서 규칙",
      q: "다음 중 조건문의 구조 배치로 문법상 올바른 것은?",
      options: [
        "if → elif → else",
        "elif → if → else",
        "if → else → elif",
        "else → elif → if"
      ],
      ans: 0,
      exp: "조건문은 항상 if로 시작해야 하며, 중간에 elif들이 오고, 맨 마지막에 그 외의 경우를 처리하는 else가 와야 합니다."
    },
    {
      id: 5,
      label: "5번 전원불만족",
      ch: "Q5: if와 elif가 모두 거짓일 때",
      q: "`score = 45`일 때 아래 코드가 출력할 결과는?\n```python\nif score >= 90:\n    print('우수')\nelif score >= 60:\n    print('보통')\nelse:\n    print('노력')\n```",
      options: [
        "노력",
        "보통",
        "우수",
        "출력 없음"
      ],
      ans: 0,
      exp: "45점은 90 이상도 아니고 60 이상도 아니므로 모든 조건이 거짓이 되어 마지막 `else:` 구역의 '노력'이 출력됩니다."
    }
  ],
  neisRubric: {
    code: "[6실05-02, 6실05-03]",
    standard: "다양한 기준에 따라 실행 경로가 나뉘는 다중 조건(if-elif-else) 구조를 이해하고, 위계가 있는 판별 알고리즘을 설계할 수 있다.",
    high: "다중 조건문에서 조건식이 위에서 아래로 순차 평가되는 메커니즘을 완벽히 이해하고, 조건의 배치 순서에 따른 논리적 오류를 방지하며 완결성 높은 등급 판정 알고리즘을 작성함.",
    mid: "elif를 활용하여 3가지 이상의 갈래를 나누는 방법을 알고 있으며, 주어진 값에 따라 적절한 분기 결과를 도출하는 코딩 실습을 성실히 수행함.",
    low: "조건이 많을 때 elif를 사용한다는 사실을 알고, 퀴즈 레이싱을 통해 if, elif, else의 배치 순서를 익혀나가는 단계임.",
    questionFeedback: {
      1: { correct: "elif가 'else if'의 약어임을 정확히 인지하고 그 쓰임새를 파악함.", incorrect: "elif의 명칭 유래(else if)와 의미를 다시 확인할 필요가 있음." },
      2: { correct: "elif는 분기 필요성에 따라 무제한으로 확장 가능하다는 점을 바르게 이해함.", incorrect: "elif의 사용 횟수에 제한이 없다는 유연성을 복습할 필요가 있음." },
      3: { correct: "첫 번째 참 조건을 만났을 때 즉시 분기를 탈출하는 흐름 제어 원리를 정확히 적용함.", incorrect: "상위 조건 만족 시 하위 elif가 무시되는 탈출 원리를 보완해야 함." },
      4: { correct: "if, elif, else의 올바른 문법적 배치 순서를 명확하게 숙지함.", incorrect: "조건문 블록의 배치 순서(if 시작, else 마무리)를 점검할 필요가 있음." },
      5: { correct: "모든 조건이 불만족되었을 때 else로 귀결되는 실행 결과를 올바르게 추론함.", incorrect: "모든 if/elif가 거짓일 때 else가 기본 실행된다는 점을 다시 확인할 필요가 있음." }
    }
  }
};