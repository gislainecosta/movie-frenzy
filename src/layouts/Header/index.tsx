import { BiSearchAlt2 } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import * as St from "./styles";

export default function Header() {
  return (
    <St.Container>
      <St.Logo src={Logo} alt="Logo" />
      <St.Form>
        <St.Input type="text" placeholder="Busca por filmes" />
        <St.Button type="submit">
          <BiSearchAlt2 />
        </St.Button>
      </St.Form>
    </St.Container>
  );
}
