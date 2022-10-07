import Header from "../../Header/Header";
import ListQuestionPlay from "../Child/ListQuestionPlay"
import { Container } from "@mui/system";

export default function Play() {
  return (
    <>
      <Header />
      <Container sx={{ height: "100%", textAlign: "center" }}>
        <ListQuestionPlay />
      </Container>
    </>
  );
}
