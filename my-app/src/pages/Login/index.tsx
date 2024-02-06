/* eslint-disable prefer-const */
import Button from "@mui/material/Button";
import * as St from "./styles";

export default function Login() {
  return (
    <St.Container>
      <Button>
        <a href="http://localhost:8888">Logar com Spotify</a>
      </Button>
    </St.Container>
  );
}
