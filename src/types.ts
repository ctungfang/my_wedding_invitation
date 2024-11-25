type Data = {
  date: string;
  location: string;
  gretting: string;
  groom: {
    name: string;
    account_number: string;
    account_number_usd: string;
    parents: {
      mother: {
        name: string;
      };
      father: {
        name: string;
      };
    };
  };
  bride: {
    name: string;
    account_number: string;
    parents: {
      mother: {
        name: string;
      };
      father: {
        name: string;
      };
    };
  };
  kakaotalk: {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
  };
};
