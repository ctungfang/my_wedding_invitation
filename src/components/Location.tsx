import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
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
  flexWrap: "wrap", // For responsive behavior
  marginTop: "24px",
});

const Image = styled("img", {
  width: "50%",
  maxWidth: 512,
  flex: "0 1 auto", // Prevents the image from shrinking too much
});

const AddressWrapper = styled("div", {
  display: "flex",
  flexDirection: "column", // Stack text and button vertically
  alignItems: "center", // Center-align text and button horizontally
  gap: "12px", // Space between the address and button
  maxWidth: "300px", // Prevent text from stretching too wide
  textAlign: "center", // Ensure address text is centered
});

const LocationTitle = styled("p", {
  fontSize: "1.8vh", // Increased font size for location title
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: "4px",
});

const Address = styled("p", {
  fontSize: "1.4vh",
  lineHeight: 1.6,
  margin: 0,
  opacity: 0.75,
});

const GoogleMapButton = styled("a", {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "rgb(176, 55, 56)", // Red button color
  color: "#ffffff",
  fontSize: "1.2vh",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgb(150, 45, 46)", // Darker red on hover
  },
});

export default function Location({
  data,
}: {
  data?: { location_title: string; location: string; wedding_address: string };
}) {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>交通資訊</Title>
      </Divider>
      <ContentWrapper>
        {/* Map Image */}
        <Image src="./assets/LocationMap.jpg" alt="Location Map" />

        {/* Address Section */}
        <AddressWrapper>
          {/* Location Title with increased font size */}
          <LocationTitle>{data?.location_title}</LocationTitle>

          <Address>
            <strong>{data?.location}</strong>
            <br />
            {data?.wedding_address}
          </Address>

          {/* Google Map Button */}
          <GoogleMapButton
            href="https://www.google.com.tw/maps/place/%E5%90%9B%E5%93%81%E9%85%92%E5%BA%97/@25.0494507,121.5081488,15z/data=!4m9!3m8!1s0x3442a96d714a9ebb:0xd0a283f59a33a950!5m2!4m1!1i2!8m2!3d25.0492706!4d121.5169525!16s%2Fg%2F1hdzmxvv_?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Map
          </GoogleMapButton>
        </AddressWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
