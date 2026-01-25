import { members } from "../data/member";

export const getMemberName = (id) => {
  const member = members.find((m) => m.id === id);
  return member ? member.name : `User ${id}`;
};