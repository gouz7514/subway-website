# 서브웨이 사용법을 알려주는 웹사이트

## 프로젝트명
#### 어케했Sub ([링크](https://gouz7514.github.io/subway-website/))<br>
![어케했Sub 작동 모습](https://user-images.githubusercontent.com/41367134/108964451-d4252500-76be-11eb-80b2-00051a3f587c.gif)

## 프로젝트 설명
React를 활용해 써브웨이의 사용법을 알려주는 **SPA 웹사이트의 구축**을 목표로 함<br>

**기존 [써브웨이 웹사이트](https://www.subway.co.kr/utilizationSubway#none)와 다른 점**
- 기존 웹사이트의 경우 사용법 및 메뉴들에 대한 설명은 존재하지만, 메뉴, 재료 등을 보기 위해서는 **새로운 페이지로 접속이 필요**함. → 이를 **SPA 구축을 통해 보완함**.
- 기존 웹사이트는 `lazy loading` 기법이 적용되어 있지 않아 페이지 접속 시 모든 이미지 파일을 동시에 받아와 컨텐츠를 보는 데 자원 및 시간의 낭비가 발생. → 본 프로젝트는 **`intersectionObserver`를 사용한 `lazy loading` 기법을 적용**해 이를 방지함.
- 건강을 강조하는 써브웨이의 이미지에 걸맞게 **칼로리 기준 정렬 기능**을 추가함

## 실행 방법
레포지토리를 다운받은 후
```
npm start
```
이후 `http://localhost:3000/subway-website`로 접속 시 동작 확인 가능

## 추후 보완 사항
- 다크 모드의 적용

## 문의 사항
피드백 및 기타 문의 사항 모두 `gouz7514@naver.com`으로 보내주시길 바랍니다😁