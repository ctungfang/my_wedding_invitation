import { CheckCircleTwoTone } from "@ant-design/icons";
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  paddingBottom: 8,
  width: "100%",
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("p", {
  fontSize: "1.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 12,
});

const SubContent = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.75,
  marginBottom: 24,
});

const Description = styled("p", {
  fontSize: "1.3vh",
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: 8,
});

const ContactButton = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

const QRCode = styled("img", {
  marginLeft: 12,
  width: 100,
  height: 100,
});

const RedEnvelopeButton = styled("button", {
  width: 64,
  height: 64,
  borderRadius: "50%",
  background: "linear-gradient(135deg, #D83A34, #FF6F61)",
  border: "2px solid gold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  cursor: "pointer",
  "&:hover": {
    background: "linear-gradient(135deg, #FF6F61, #D83A34)",
  },
});

type CongratulatoryMoneyProps = {
  data?: Data;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>送上祝賀</Title>
      </Divider>
      <Content>送上一份祝賀禮物 以表達您的祝賀之意</Content>
      <ContactButton onClick={() => setGroomVisible(true)}>
      <RedEnvelopeButton>
          <img
            src="./assets/red_envelope_btn.png"
            alt="Red Envelope Button"
            style={{
              width: 64,
              height: 64,
              marginBottom: 16,
            }}
          />
        </RedEnvelopeButton>
        <br />
        <SubContent>禮金帳戶</SubContent>
      </ContactButton>
      <Modal
        title={<b>新人禮金帳戶</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        {data?.groom && (
          <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <div>
            <b>台幣帳戶 台新銀行(812)</b>
            <Divider type="vertical" />
            <CopyToClipboard
              text={data?.groom?.account_number}
            >
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("The account number has been copied")}
              >
                {data?.groom?.account_number}
              </Button>
            </CopyToClipboard>
            </div>
            <QRCode src="./assets/TS_QRCode.png" alt="台幣帳戶 QR Code" />
          </div>
        )}
        {data?.groom && (
          <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
          <div>
            <b>美金帳戶(USD) Venmo</b>
            <Divider type="vertical" />
            <CopyToClipboard text={data?.groom?.account_number_usd}>
              <Button
                type="text"
                style={{ padding: 0, margin: 0 }}
                onClick={() => message.success("The account number has been copied")}
              >
                {data?.groom?.account_number_usd}
              </Button>
            </CopyToClipboard>
            </div>
            <QRCode src="./assets/VenmoQRCode.png" alt="美金帳戶 QR Code" />
          </div>
        )}
        <div>
          <Description>
            點擊複製帳號
          </Description>
        </div>
      </Modal>
    </Wrapper>
  );
}
