/* eslint-disable prefer-const */
import Button from "@mui/material/Button";
import { FaSpotify } from "react-icons/fa";
import * as St from "./styles";

export default function Login() {
  return (
    <St.Container>
      <St.Title>
        Nosso site possui um player integrado ao Spotify, para acessar, por
        favor entre com sua conta ou crie uma gratuitamente
      </St.Title>
      <Button
        startIcon={<FaSpotify style={{ fontSize: "3rem" }} />}
        href="/auth/login"
        sx={{
          backgroundColor: "#25d864",
          color: "primary.dark",
          fontSize: 36,
          fontWeight: "bold",
          padding: "1rem",
        }}
      >
        Entrar com Spotify
      </Button>
    </St.Container>
  );
}
