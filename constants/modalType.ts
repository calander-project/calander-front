export const MODAL_TYPE = {
  CREATE_GROUP: "CREATE_GROUP", // 그룹 만들기
  SCHEDULE_COORDINATION: "SCHEDULE_COORDINATION", // 일정 조율
  SCHEDULE_DETAILS: "SCHEDULE_DETAILS", // 일정 상세
  SCHEDULE_CREATE: "SCHEDULE_CREATE", //일정 생성
  SCHEDULE_EDIT: "SCHEDULE_EDIT", //일정 수정
  DELETE_GROUP: "DELETE_GROUP", // 그룹 삭제
  EXPORT_MEMBER: "EXPORT_MEMBER", // 멤버 내보내기
  CHANGE_LEADER: "CHANGE_LEADER", // 리더 변경
  EXIT_GROUP: "EXIT_GROUP", // 그룹 탈퇴
  CANCEL_INVITE: "CANCEL_INVITE", // 초대 취소
} as const;

export type ModalType = (typeof MODAL_TYPE)[keyof typeof MODAL_TYPE];
