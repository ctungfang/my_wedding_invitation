import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
    background: "#efebe9",
    backgroundImage: "url(./assets/GroovePaper.png)",
    width: "100%",
    paddingBottom: 0,
    textAlign: "center",
  });

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
  textAlign: "center",
});

const GroomBride = styled("p", {
    fontSize: "1.75vh",
    lineHeight: 1.75,
    opacity: 0.85,
    marginBottom: 0,
    width: "100%",
    textAlign: "center",
  });


const InvitationDetails = styled("div", {
    fontSize: "1.75vh",
    lineHeight: 1.75,
    opacity: 0.85,
    marginTop: 8,
    textAlign: "center",
  });

const Highlight = styled("strong", {
    fontSize: "1.75vh",
    color: "rgb(150, 45, 46)", // Optional: Highlight color for titles like After Party
});

type WeddingProps = {
    data?: Data;
  };

export default function Wedding({ data }: WeddingProps) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>婚禮資訊</Title>
      </Divider>
      <GroomBride>
        Susan & Charles 
        <br />
        蘇宣 & 東方譯慷
        <br />
        新娘家長 {" "}
        {data?.bride?.parents?.father?.name} ·{" "}
        {data?.bride?.parents?.mother?.name}
        <br />
        新郎家長 {" "}
        {data?.groom?.parents?.father?.name} ·{" "}
        {data?.groom?.parents?.mother?.name}
      </GroomBride>

      {/* Invitation Details */}
      <InvitationDetails>
        <strong>{data?.invitation_title}</strong>
        <br />
        {data?.ceremoney_info}
        <br />
        {data?.banquet_entry_info}
        <br />
        {data?.banquet_info}
        <br />
        <Highlight>{data?.location_eng}</Highlight>
        <br />
        {data?.location}
        <br />
        {data?.wedding_address}
        <br />
        <br />
        <strong>{data?.afterparty_title}</strong>
        <br />
        {data?.afterparty_location}
        <br />
        {data?.afterparty_address}
      </InvitationDetails>
    </Wrapper>
  );
}
