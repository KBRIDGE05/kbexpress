/**
 * KBRIDGE 해외특송 견적문의 접수용 Google Apps Script
 * 1) Apps Script 새 프로젝트 생성
 * 2) 이 Code.gs 전체 붙여넣기
 * 3) 배포 > 새 배포 > 웹 앱
 * 4) 실행 사용자: 나
 * 5) 액세스 권한: 모든 사용자
 * 6) 배포 URL을 index.html의 GOOGLE_SCRIPT_URL에 입력
 */

const RECEIVER_EMAIL = 'all@kbridges.co.kr';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');

    const subject = data.subject || '케이브릿지 해외특송 견적문의';
    const body = data.body || makeBodyFromData_(data);

    MailApp.sendEmail({
      to: RECEIVER_EMAIL,
      replyTo: data.email && data.email !== '-' ? data.email : '',
      subject: subject,
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'sent' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function makeBodyFromData_(data) {
  return `[케이브릿지 해외특송 견적문의]\n\n` +
    `■ 기본 정보\n` +
    `회사명: ${data.company || '-'}\n` +
    `담당자명: ${data.name || '-'}\n` +
    `연락처: ${data.phone || '-'}\n` +
    `회신 이메일: ${data.email || '-'}\n\n` +
    `■ 운송 정보\n` +
    `운송 유형: ${data.direction || '-'}\n` +
    `도착/출발 국가: ${data.country || '-'}\n` +
    `도착/출발 도시·우편번호: ${data.city || '-'}\n` +
    `발송 희망일: ${data.readyDate || '-'}\n\n` +
    `■ 화물 정보\n` +
    `화물 유형: ${data.cargoType || '-'}\n` +
    `품명: ${data.itemName || '-'}\n` +
    `실제중량: ${data.weight || '-'} KG\n` +
    `박스 수량: ${data.boxes || '-'} 박스\n` +
    `박스 사이즈: ${data.length || '-'} x ${data.width || '-'} x ${data.height || '-'} CM\n` +
    `인보이스 금액: ${data.value || '-'}\n\n` +
    `■ 추가 문의 내용\n${data.memo || '-'}\n\n` +
    `접수 시간: ${data.submittedAt || '-'}\n\n` +
    `※ 제품 사진, 인보이스, 패킹리스트, MSDS/성분표가 있으면 추가 확인이 필요할 수 있습니다.`;
}
