type Data = {
  date: string;
  date_only?: string;
  location_title?: string;
  location_eng?: string;
  location: string;
  wedding_address?: string;
  gretting: string;
  invitation_title?: string;
  ceremoney_info?: string;
  banquet_entry_info?: string;
  banquet_info?: string;
  afterparty_title?: string;
  afterparty_location?: string;
  afterparty_address?: string;
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
