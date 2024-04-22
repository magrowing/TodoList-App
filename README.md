# TodoList-App

## 🎯 목표

useState, useReducer 말고도 상태를 관리 할수 있는 방법인 External Store의 개념을 접하게 되었고 전역상태관리 라이브러리인 Zustand를 사용해서 Props Drilling 피하고 상태를 전역적으로 공유해보는 방법을 학습해보고자 만든 프로젝트입니다.

## ⚙️ 사용 기술

- React
- TypeScript
- Zustand
- styled-components

## 🕹️ 기능 구현

- Web / Mobile 기기를 대응하기 위한 반응형 Web-App
- styled-components 의 ThemeProvider 활용한 다크모드 지원
- 할일 등록/수정/삭제/조회
  - 모달을 통해 할일 등록/수정
  - 콤보박스 통해 미완료/완료 목록 조회
  - 체크박스를 통해 완료된 할일 표시

## 🚨 발생한 이슈

- 할일 ComboBox 상태에 따라 할일 목록이 필터링이 제대로 동작하고 있지 않았습니다.

![할일 목록이 필터링 이슈](./img/todolist.gif)

### 원인

기존의 전체 할일 목록을 유지하지 않은 상태에서 필터링된 목록을 기준으로 다시 필터링을 하게 되므로 기대하는 기능과는 다르게 작동하게 되었습니다. 기존 목록을 보존하지 못하고, 필터링된 결과에서 계속 필터링을 진행하는 로직 때문에 발생한 이슈였습니다.

### 해결 방법

할일 목록 데이터를 로컬 스토리지에 저장하고, 할일 등록, 삭제, 수정이 이루어질 때마다 로컬 스토리지에 저장된 할일 목록 리스트도 함께 업데이트합니다. ComboBox의 상태에 따라 할일 목록을 조회할 때는 로컬 스토리지에서 전체 할일 목록 리스트를 불러와 해당 상태에 맞게 필터링하도록 로직을 변경했습니다.

## 👩🏻‍💻 배운점

- 상태를 전역적으로 관리함으로서 불필요한 props 전달되지 않기 때문에 컴포넌트의 관심사에 따라 분리 할 수 있었습니다.

- Zustand를 통해 Store의 상태를 전체 구독하게 되면 Store의 state가 변경 될 때마다 구독중인 컴포넌트가 불필하게 렌더링 하게 됨으로 필요한 state만 사용 해야합니다. 불필요하게 리렌더링을 방지하는 방법으로는 아래와 같은 방법들이 존재합니다.
  - `useShallow` : Zustand 제공해주는 hooks을 사용하는 방법
  - state 와 state를 업데이트 시키는 액션 함수를 분리하여 사용하는 방법

> 해당 프로젝트는 useShallow을 사용하는 방법을 선택했습니다. 이유는, 액션함수들을 별도로 분리하는 코드를 작성하면 타입 지정까지 추가로 작업이 들어가서 useShallow 방식과 필요한 상태들만 사용해서 코드를 작성하였습니다.

## 🔗 참고

- UI 디자인
  - [https://youtu.be/W0Uf_xu350k?si=S4Zo-sRu-8lIP0Tn](https://youtu.be/W0Uf_xu350k?si=S4Zo-sRu-8lIP0Tn)
- 다크모드
  - [https://youtu.be/W0Uf_xu350k?si=S4Zo-sRu-8lIP0Tn](https://youtu.be/W0Uf_xu350k?si=S4Zo-sRu-8lIP0Tn)
- 국가-언어별 표준 날짜,시간 포맷 API
  - [https://velog.io/@oneook/intl](https://velog.io/@oneook/intl)
- Zustand 렌더링 최적화
  - [https://mine-it-record.tistory.com/717](https://mine-it-record.tistory.com/717)
  - [https://velog.io/@2ast/React-Zustand-custom-selector를-활용한-렌더링-최적화](https://velog.io/@2ast/React-Zustand-custom-selector%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94)
  - [https://velog.io/@apparatus1/zustand#항상-selector를-사용하는-zustand-store-hook-만들기](https://velog.io/@apparatus1/zustand#%ED%95%AD%EC%83%81-selector%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-zustand-store-hook-%EB%A7%8C%EB%93%A4%EA%B8%B0)
  - [https://velog.io/@mingdolacucudas/zustand-어떻게-써야-잘썼다고-소문날까](https://velog.io/@mingdolacucudas/zustand-어떻게-써야-잘썼다고-소문날까)
