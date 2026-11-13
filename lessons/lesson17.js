export const LESSON_DATA = {
  lessonNum: 17,
  subject: "실과/코딩",
  grade: "6학년 2학기",
  unitTitle: "소프트웨어와 프로그래밍: 리스트 값 바꾸기(수정), 추가, 삭제",
  badge: "6-2 실과",
  icon: "🛠️",
  headerTitle: "6학년 파이썬: 17강 리스트 (2) 수정·추가·삭제",
  defaultRoomCode: "100117",
  simulator: {
    type: "list_crud_visualizer",
    title: "동적 서랍장: 리스트 내용 변경 가상 탐구실",
    subDesc: "서랍장 속 물건을 바꾸고, 맨 뒤에 새 물건을 넣는 append(), 특정 위치에 끼워넣는 insert(), 지우는 del/remove를 실험해 보세요!",
    modes: [
      { id: "mod_val", label: "1. 🔄 값 수정 (list[0] = '새값')", icon: "🔄" },
      { id: "append_val", label: "2. ➕ 맨 뒤 추가 (append)", icon: "➕" },
      { id: "del_val", label: "3. ❌ 삭제 (del & remove)", icon: "❌" }
    ],
    summaryTable: {
      title: "달려라 파이썬 17강: 리스트 조작 핵심 명령어 요약표",
      headers: ["명령어", "기능", "작동 원리", "코드 예시"],
      rows: [
        ["리스트[i] = 값", "값 수정(변경)", "i번 칸의 기존 값을 새로운 값으로 덮어씀", "a[0] = 99"],
        ["리스트.append(값)", "맨 끝에 추가", "리스트의 맨 마지막 자리에 새 칸을 붙임", "a.append('딸기')"],
        ["리스트.insert(i, 값)", "중간에 끼워넣기", "i번 위치에 값을 넣고 기존 값들은 뒤로 밀림", "a.insert(1, '바나나')"],
        ["del 리스트[i]", "위치로 삭제", "i번 위치의 칸을 통째로 삭제", "del a[0]"],
        ["리스트.remove(값)", "이름으로 삭제", "지정한 값과 똑같은 첫 번째 물건을 삭제", "a.remove('사과')"]
      ]
    }
  },
  questions: [
    {
      id: 1,
      label: "1번 append함수",
      ch: "Q1: 리스트 맨 뒤에 새 값을 추가하는 함수",
      q: "`fruits = ['사과', '배']`의 맨 끝에 '포도'를 덧붙여 `['사과', '배', '포도']`로 만드는 명령어는?",
      options: [
        "fruits.append('포도')",
        "fruits.add('포도')",
        "fruits.push('포도')",
        "fruits.insert('포도')"
      ],
      ans: 0,
      exp: "파이썬 리스트의 맨 끝에 새로운 요소를 추가할 때는 `.append()` 메서드를 사용합니다."
    },
    {
      id: 2,
      label: "2번 값수정",
      ch: "Q2: 리스트의 기존 값을 새로운 값으로 변경",
      q: "`num = [10, 20, 30]`에서 10을 99로 바꾸기 위한 올바른 대입문은?",
      options: [
        "num[0] = 99",
        "num[1] = 99",
        "num.change(10, 99)",
        "num = 99"
      ],
      ans: 0,
      exp: "변경하고자 하는 위치인 0번 인덱스를 지정하고 등호(=)로 새 값을 대입(`num[0] = 99`)하면 값이 교체됩니다."
    },
    {
      id: 3,
      label: "3번 del삭제",
      ch: "Q3: 인덱스 번호로 요소를 삭제하는 del 키워드",
      q: "`a = ['A', 'B', 'C']`에서 'B'를 삭제하여 `['A', 'C']`로 만들기 위한 코드는?",
      options: [
        "del a[1]",
        "del a[2]",
        "delete a['B']",
        "a[1] = 0"
      ],
      ans: 0,
      exp: "'B'는 1번 인덱스에 있으므로 `del a[1]`을 실행하면 1번 칸이 삭제되고 뒤에 있던 'C'가 앞으로 당겨집니다."
    },
    {
      id: 4,
      label: "4번 remove함수",
      ch: "Q4: 값의 이름을 직접 지정하여 삭제하는 함수",
      q: "`animals = ['개', '고양이', '토끼']`에서 '고양이'라는 글자를 직접 찾아 삭제하는 함수는?",
      options: [
        "animals.remove('고양이')",
        "animals.delete('고양이')",
        "animals.erase('고양이')",
        "animals.pop('고양이')"
      ],
      ans: 0,
      exp: "인덱스 번호를 몰라도 값의 이름을 직접 지정해 삭제할 때는 `.remove('값')`을 사용합니다."
    },
    {
      id: 5,
      label: "5번 insert끼워넣기",
      ch: "Q5: 원하는 위치에 요소를 끼워넣는 insert",
      q: "`colors = ['빨강', '파랑']`의 1번 자리에 '노랑'을 끼워 넣어 `['빨강', '노랑', '파랑']`을 만드는 코드는?",
      options: [
        "colors.insert(1, '노랑')",
        "colors.insert('노랑', 1)",
        "colors.append(1, '노랑')",
        "colors[1] = '노랑'"
      ],
      ans: 0,
      exp: "insert()는 첫 번째 인자로 들어갈 위치(인덱스), 두 번째 인자로 넣을 값을 전달합니다: `insert(위치, 값)`."
    }
  ],
  neisRubric: {
    code: "[6실05-02, 6실05-03]",
    standard: "리스트의 가변성(Mutable)을 이해하고, 요소의 수정, 추가(append, insert), 삭제(del, remove) 명령어를 활용하여 동적 데이터를 제어할 수 있다.",
    high: "리스트에 데이터를 추가·삽입·삭제할 때 인덱스가 유기적으로 재배치되는 원리를 완벽히 파악하고, 상황에 맞게 append와 insert, del과 remove를 정확히 구분하여 활용함.",
    mid: "리스트의 기존 값을 변경하거나 append()를 통해 새 항목을 추가할 수 있으며, 삭제 명령어의 기초 사용법을 알고 실습에 참여함.",
    low: "리스트의 내용물이 필요에 따라 추가되거나 지워질 수 있다는 가변성을 이해하고, 퀴즈 레이싱을 통해 append(추가) 명령어의 이름을 익히는 중임.",
    questionFeedback: {
      1: { correct: "맨 뒤에 요소를 추가하는 append() 메서드를 정확히 선택함.", incorrect: "리스트의 대표적인 요소 추가 함수인 append()의 명칭을 복습해야 함." },
      2: { correct: "인덱스를 지정하여 기존 요소를 새로운 값으로 갱신하는 문법을 바르게 이해함.", incorrect: "리스트의 특정 위치 값을 덮어쓰는 대입문 표기법을 보완할 필요가 있음." },
      3: { correct: "del 키워드를 활용해 특정 위치의 요소를 정확히 제거함.", incorrect: "del 명령어 뒤에 리스트와 인덱스 대괄호가 온다는 규칙을 확인할 필요가 있음." },
      4: { correct: "값의 이름으로 항목을 찾아 삭제하는 remove()의 기능을 바르게 파악함.", incorrect: "이름 기반 삭제 함수인 remove()의 사용법을 정리하도록 지도가 필요함." },
      5: { correct: "insert(위치, 값)의 매개변수 순서 규칙을 명확하게 구사함.", incorrect: "insert() 함수의 괄호 안 순서(위치 번호가 먼저)를 다시 점검할 필요가 있음." }
    }
  }
};