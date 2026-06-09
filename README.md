# KBRIDGE 해외특송 견적문의 페이지

## 포함 파일
- `index.html` : GitHub Pages용 웹페이지
- `Code.gs` : Google Apps Script 메일 접수용 코드
- `_config.yml`

## Google Apps Script 연결 방법
1. Google Apps Script에서 새 프로젝트를 만듭니다.
2. `Code.gs` 내용을 전체 복사해 붙여넣습니다.
3. 상단 메뉴에서 `배포 > 새 배포 > 웹 앱`을 선택합니다.
4. 실행 사용자: `나`
5. 액세스 권한: `모든 사용자`
6. 배포 후 생성된 웹 앱 URL을 복사합니다.
7. `index.html` 안의 아래 부분을 찾습니다.

```js
const GOOGLE_SCRIPT_URL = 'PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

8. 위 값을 실제 웹 앱 URL로 교체합니다.
9. 수정한 파일을 GitHub Pages에 업로드합니다.

## 수신 메일
기본 수신 메일은 `all@kbridges.co.kr`입니다.
변경하려면 `Code.gs`의 `RECEIVER_EMAIL` 값을 바꾸면 됩니다.


## 수정 내용
- 히어로 영역의 이미지 요소를 제거하고, 해외특송 견적 흐름과 준비 정보 중심의 텍스트형 패널로 변경했습니다.


## 추가 수정 내용
- 운송유형 선택 영역 삭제
- 히어로 하단 4개 요약 카드 삭제
- 품목 사진/인보이스/MSDS 별도 첨부 안내 문구 삭제
- Contact 섹션을 카카오톡 실시간 문의 CTA로 변경


## Footer 수정
- Footer를 제공된 스크린샷 구조처럼 상단 브랜드/문의, 하단 회사정보/저작권 구성으로 변경했습니다.
- 설명 문구는 `케이브릿지가 운영하는 해외특송 서비스`로 반영했습니다.


## 로고 수정
- 상단 헤더와 하단 Footer 로고를 동일한 글로브형 KBRIDGE 로고 스타일로 변경했습니다.


## 공식 로고 반영
- 업로드한 케이브릿지 주식회사 로고 이미지를 상단과 하단에 동일하게 적용했습니다.
- 로고 파일은 `assets/kbridge-logo-official.png`에 포함되어 있습니다.


## 로고 이미지 경로 오류 수정
- 로고가 깨지지 않도록 `index.html` 내부에 base64 방식으로 직접 포함했습니다.
- `assets` 경로가 달라도 상단/하단 로고가 표시됩니다.


## 로고 아이콘형 수정
- 상단과 하단 로고를 전체 로고 이미지 대신 아이콘만 사용하도록 변경했습니다.
- 텍스트는 별도로 `KBRIDGE`로 표시했습니다.
