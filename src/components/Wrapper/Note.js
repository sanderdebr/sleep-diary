import styled from "styled-components";
import Link from "next/link";

function Note() {
  return (
    <NoteWrapper>
      <Link href="/privacy">Privacy Policy</Link> |{" "}
      <Link href="/terms-and-conditions">Terms and Conditions</Link>
    </NoteWrapper>
  );
}

const NoteWrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.palette.secondary};
`;

export default Note;
