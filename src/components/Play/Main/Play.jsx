import MenuAppBar from "../../Header/Header";
import CardQuestion from "../Child/CardQuestion";
import { Container } from "@mui/system";

export default function Play() {
  return (
    <>
      <MenuAppBar />
      <Container sx={{ height: "100%", textAlign: "center" }}>
        <CardQuestion />
      </Container>
    </>
  );
}
