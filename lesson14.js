export const LESSON_DATA = {
  lessonNum: 14,
  subject: "실과/코딩",
  grade: "6학년 2학기",
  unitTitle: "소프트웨어와 프로그래밍: 여러 조건을 묶는 논리 연산자(and, or, not)",
  badge: "6-2 실과",
  icon: "🔀",
  headerTitle: "6학년 파이썬: 14강 자료형 bool (2) 논리 연산자",
  defaultRoomCode: "100114",
  simulator: {
    type: "bool_logic",
    title: "논리 회로 탐구실: and, or, not 연산자 시뮬레이터",
    subDesc: "두 가지 이상의 조건을 결합하는 and(~이고), or(~이거나)와 결과를 반대로 뒤집는 not(~이 아닌)의 작동 원리를 확인하세요!",
    modes: [
      { id: "and_gate", label: "1. 🤝 and (둘 다 참이어야 참)", icon: "🤝" },
      { id: "or_gate", label: "2. 👐 or (하나만 참이어도 참)", icon: "👐" },
      { id: "not_gate", label: "3. 🔄 not (결과를 반대로 뒤집기)", icon: "🔄" }
    ],
    summaryTable: {
      title: "달려라 파이썬 14강: 3대 논리 연산자 진리표 요약",
      headers: ["논리 연산자", "의미", "참(True)이 되는 조건", "코드 예시"],
      rows: [
        ["and", "그리고", "연결된 조건이 '둘 다 참'일 때만 True", "(10 > 5) and (3 < 7) → True"],
        ["or", "또는", "연결된 조건 중 '하나라도 참'이면 True", "(10 > 5) or (3 > 7) → True"],
        ["not", "~이 아니다", "참은 거짓으로, 거짓은 참으로 반전", "not (10 > 5) → False"],
        ["우선순위", "계산 순서", "괄호() → not → and → or 순서로 처리", "not False and True → True"]
      ]
    }
  },
  questions: [
    {
      id: 1,
      label: "1번 and연산",
      ch: "Q1: and 연산자의 결과 판별",
      q: "파이썬에서 `print((10 > 5) and (2 > 8))`의 실행 결과는?",
      options: [
        "False",
        "True",
        "10",
        "오류 (SyntaxError)"
      ],
      ans: 0,
      exp: "and 연산자는 양쪽 조건이 '모두 참'이어야 참입니다. 앞의 10 > 5는 참이지만 뒤의 2 > 8이 거짓이므로 최종 결과는 False입니다."
    },
    {
      id: 2,
      label: "2번 or연산",
      ch: "Q2: or 연산자의 결과 판별",
      q: "파이썬에서 `print((10 > 5) or (2 > 8))`의 실행 결과는?",
      options: [
        "True",
        "False",
        "2",
        "오류 (SyntaxError)"
      ],
      ans: 0,
      exp: "or 연산자는 양쪽 중 '하나라도 참'이면 참이 됩니다. 10 > 5가 참이므로 뒤의 조건과 상관없이 결과는 True가 됩니다."
    },
    {
      id: 3,
      label: "3번 not연산",
      ch: "Q3: 결과를 반대로 뒤집는 not 연산자",
      q: "`print(not (5 == 5))`의 실행 결과는 무엇일까요?",
      options: [
        "False",
        "True",
        "5",
        "None"
      ],
      ans: 0,
      exp: "괄호 안의 5 == 5는 True입니다. not은 참을 거짓으로 뒤집으므로 최종 결과는 False가 됩니다."
    },
    {
      id: 4,
      label: "4번 and조건규칙",
      ch: "Q4: and 연산자가 True가 되기 위한 조건",
      q: "`A and B` 수식이 True가 되기 위해 필요한 조건으로 옳은 것은?",
      options: [
        "A와 B가 둘 다 True여야 한다.",
        "A와 B 중 하나만 True여도 된다.",
        "A와 B가 둘 다 False여야 한다.",
        "A가 반드시 B보다 커야 한다."
      ],
      ans: 0,
      exp: "and(그리고) 연산자는 결합된 모든 명제가 참(True)일 때만 결과로 True를 반환합니다."
    },
    {
      id: 5,
      label: "5번 복합논리",
      ch: "Q5: not과 and가 결합된 복합 식의 평가",
      q: "`print(not False and True)`를 계산했을 때의 올바른 결과는?",
      options: [
        "True",
        "False",
        "not True",
        "Error"
      ],
      ans: 0,
      exp: "not이 먼저 계산되어 not False는 True로 변환됩니다. 따라서 'True and True'가 되어 최종 결과는 True가 됩니다."
    }
  ],
  neisRubric: {
    code: "[6실05-02, 6실05-03]",
    standard: "논리 연산자(and, or, not)를 활용하여 복합적인 조건을 구성하고, 논리 연산의 진리값을 판별할 수 있다.",
    high: "and, or, not 논리 연산자의 고유한 진리표 특성을 완벽히 분석하고, 복잡한 다중 조건식의 우선순위를 정확하게 계산하여 프로그래밍 조건식에 반영하는 논리적 사고력이 매우 뛰어남.",
    mid: "and와 or의 의미 차이를 이해하고 있으며, 참과 거짓으로 이루어진 간단한 복합 조건의 결과를 올바르게 판별하여 코딩 활동에 참여함.",
    low: "여러 조건을 결합할 수 있다는 개념을 이해하고, 퀴즈 레이싱을 통해 and(그리고)와 or(또는)의 기본 의미를 파악하는 중임.",
    questionFeedback: {
      1: { correct: "and 연산자가 한쪽이라도 거짓이면 거짓이 되는 성질을 정확히 유추함.", incorrect: "and 연산자는 양쪽 모두 참이어야만 True가 됨을 확인할 필요가 있음." },
      2: { correct: "or 연산자가 하나라도 참이면 True를 반환하는 논리 구조를 바르게 파악함.", incorrect: "or 연산자의 관대한 참 판별(하나만 맞아도 참) 규칙을 복습하도록 권장됨." },
      3: { correct: "not 연산자가 기존 진리값을 정반대로 반전시키는 기능을 명확히 이해함.", incorrect: "not 연산자가 결과를 뒤집는 성질(True→False)을 다시 정리할 필요가 있음." },
      4: { correct: "and 연산의 성립 조건을 논리적으로 완벽하게 설명할 수 있음.", incorrect: "and 조건의 엄격한 성립 요건(둘 다 참)을 보완할 필요가 있음." },
      5: { correct: "not과 and가 결합된 복합 논리 연산의 우선순위를 정확히 계산함.", incorrect: "연산자 간의 처리 순서(not 먼저 실행)를 고려하여 계산하는 연습이 필요함." }
    }
  }
};