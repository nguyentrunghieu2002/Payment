import TourOrderTemplate from "../templates/TourOrderTemplate";

const TourOrder = () => {
  const mockData = {
    id: "39fd4dc1-bc59-415d-aa1d-6e67c6e20d6a",
    status: "AUTHORIZED",
    expiredAt: "2025-03-27T13:49:51",
    availableActions: [],
    total: "32.0",
    currency: "USD",
    items: [
      {
        id: "9a40022a-ec0b-42c7-a124-8299d6e69baa",
        name: "booking",
        currency: "USD",
        price: "20",
        total: "40",
        quantity: 2,
        sourceType: "BUDDY_BOOKING",
        sourceId: "93c8a45f-a407-4074-b5a3-ddbad58129ec",
        source: {
          __typename: "BuddyBooking",
          id: "93c8a45f-a407-4074-b5a3-ddbad58129ec",
          sessionDuration: "HALF_DAY",
          fromDate: "2025-03-30",
          toDate: "2025-03-31",
          status: "PAID",
          currency: "USD",
          depositAmount: "0",
          note: '{"phone":"+84345169775","note":"Nothing More"}',
          location: {
            id: "36ad2aa1-510a-401d-a781-114411b67a19",
            name: "Hanoi",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            slug: "hanoi",
            photo: {
              id: "https://picsum.photos/id/1015/1024/1024",
              url: "https://picsum.photos/id/1015/1024/1024",
              __typename: "Photo",
            },
            country: {
              name: "Viet Nam",
              __typename: "Country",
            },
            __typename: "Location",
          },
          buddy: {
            name: "Ethan Dang",
            code: "ethan.dang",
            id: "4f44e644-0095-404b-8c6c-1b95654ff427",
            photos: [
              {
                id: "bb359a5f-0b4d-4286-a010-4cb40297d7fe",
                sm: "https://cloudfront.net/eyJidWNrZXQiOiJzdGFnaW5nLXBob3Rvcy50dWJ1ZGQuY29tIiwia2V5Ijoic3RhZ2luZy91cGxvYWRzL3VzZXIvYzU5ZTViMTctNGI2Yy00NjI2LThkOTgtNzE5NGI2Y2RiZDAzL2J1ZGR5LzRmNDRlNjQ0LTAwOTUtNDA0Yi04YzZjLTFiOTU2NTRmZjQyNy9iYjM1OWE1Zi0wYjRkLTQyODYtYTAxMC00Y2I0MDI5N2Q3ZmUuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImhlaWdoIjoyNTYsImZpdCI6Imluc2lkZSJ9fX0=?signature=e13b86dc35a1d7bea8ccbf5ae5cf7df48bd29de5f0499c339df12a3b135f94b0",
                __typename: "Photo",
              },
              {
                id: "7e04e946-07d7-47e5-93f1-fb2392e7137a",
                sm: "https://cloudfront.net/eyJidWNrZXQiOiJzdGFnaW5nLXBob3Rvcy50dWJ1ZGQuY29tIiwia2V5Ijoic3RhZ2luZy91cGxvYWRzL3VzZXIvYzU5ZTViMTctNGI2Yy00NjI2LThkOTgtNzE5NGI2Y2RiZDAzL2J1ZGR5LzRmNDRlNjQ0LTAwOTUtNDA0Yi04YzZjLTFiOTU2NTRmZjQyNy83ZTA0ZTk0Ni0wN2Q3LTQ3ZTUtOTNmMS1mYjIzOTJlNzEzN2EuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImhlaWdoIjoyNTYsImZpdCI6Imluc2lkZSJ9fX0=?signature=52b4899f28ce90c7fe34ba3660f94d6f2dc819e08ed6cd371f34a405a26dd772",
                __typename: "Photo",
              },
            ],
            __typename: "Buddy",
          },
          buddySpot: {
            id: "b14d156c-5dd8-4e0b-8828-73efe4e9abb1",
            address: "Hanoi, Ha Noi, Vietnam",
            fullDayPrice: "40",
            halfDayPrice: "20",
            intro: "hello",
            __typename: "BuddySpot",
          },
          travellerUser: {
            fullName: "Tien Cuong Dang",
            __typename: "User",
          },
        },
        __typename: "OrderItem",
      },
      {
        id: "960d6da7-26c1-4241-a479-bd60e553690a",
        name: "Discount for booking",
        currency: "USD",
        price: "-8.0",
        total: "-8.0",
        quantity: 1,
        sourceType: "PROMO_CODE_REDEMPTION",
        sourceId: "9f1bcb9f-07ed-42c2-bacd-3052be012c45",
        source: null,
        __typename: "OrderItem",
      },
    ],
    __typename: "Order",
  };

  //   console.log("hehe", data);
  console.log("TourOrder data:", mockData);

  return (
    <div>
      <TourOrderTemplate data={mockData}></TourOrderTemplate>
    </div>
  );
};

export default TourOrder;
