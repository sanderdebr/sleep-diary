import styled from "styled-components";
import Link from "next/link";

function Note() {
  return (
    <NoteWrapper>
      <Link href="/help/privacy">
        <a>Privacy Policy</a>
      </Link>{" "}
      |{" "}
      <Link href="/help/terms-and-conditions">
        <a>Terms and Conditions</a>
      </Link>
    </NoteWrapper>
  );
}

const NoteWrapper = styled.footer`
  padding: 1rem 0;
  text-align: center;
  width: 100%;
  font-size: 80%;
  opacity: 50%;
  display: none;

  @media (min-width: ${({ theme }) => theme.media.desktop}px) {
    display: block;
  }
`;

export default Note;
