import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 32,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh", // Increased font size for the main title
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const ContentWrapper = styled("div", {
  display: "flex",
  justifyContent: "center", // Align items horizontally to the center of the wrapper
  alignItems: "center", // Vertically align the map and address section
  gap: "16px", // Space between the map and address section
  flexWrap: "nowrap", // For responsive behavior
  marginTop: "24px",

  // Media query for small screens 
  "@media (max-width: 768px)": { flexDirection: "row", // Always keep items in a row justify
    Content: "center", // Center them horizontally 
    alignItems: "flex-start", // Align them to the start of the container
    },
  });

const Image = styled("img", {
  width: "50%",
  maxWidth: 512,
  flex: "0 1 auto", // Prevents the image from shrinking too much
});

export default function Location({
  data,
}: {
  data?: { location_title: string; location: string; wedding_address: string; parking_title: string; parking_info: string; parking_info2: string; parking_free: string };
}) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>電子喜帖</Title>
      </Divider>
      <ContentWrapper>
        {/* Electronic Invitation Image */}
        <Image src="./assets/EInvitation_front.jpg" alt="Electronic Invitation Front" />
        <Image src="./assets/EInvitation_back.jpg" alt="Electronic Invitation Back" />
      </ContentWrapper>
    </Wrapper>
  );
}