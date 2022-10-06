import Header from "../../Header/Header";
import CardQuestion from "../Child/CardQuestion"
import { Container } from "@mui/system";

export default function Play() {
  return (
    <>
      <Header />
      <Container sx={{ height: "100%", textAlign: "center" }}>
        <CardQuestion />
      </Container>
    </>
  );
}
