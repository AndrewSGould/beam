import React from "react";
import MemberDetails from "./MemberDetails.jsx";
import renderer from "react-test-renderer";
import FetchMock from "jest-fetch-mock";

const searchResults = [
  {
    id: 62,
    primary_insured_id: 249,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 13,
    primary_insured_id: 0,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 43,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 14,
    primary_insured_id: 0,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 67,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2017-01-01",
    terminated_at: "2017-06-30",
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 24,
    primary_insured_id: 34,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 52,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2017-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 48,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2018-01-01",
    terminated_at: "2018-10-31",
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 53,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2017-01-01",
    terminated_at: null,
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  },
  {
    id: 39,
    primary_insured_id: null,
    name: "Remy LeBeau",
    effective_date: "2017-01-11",
    terminated_at: "2017-12-31",
    shipping_address: "616 Thieves' Guild St.",
    shipping_city: "Columbus",
    shipping_state: "OH",
    shipping_zip_code: "43215"
  }
];
const preferenceResults = [
  {
    id: 1,
    member_id: 24,
    brush_color: "blue",
    motor_speed: 0.5,
    auto_off: true
  },
  {
    id: 2,
    member_id: 39,
    brush_color: "pink",
    motor_speed: 0.5,
    auto_off: false
  },
  {
    id: 3,
    member_id: 53,
    brush_color: "chartreuse",
    motor_speed: 0.5,
    auto_off: true
  },
  {
    id: 4,
    member_id: 48,
    brush_color: "blue",
    motor_speed: 0.75,
    auto_off: false
  },
  {
    id: 5,
    member_id: 62,
    brush_color: "pink",
    motor_speed: 0.75,
    auto_off: true
  },
  {
    id: 6,
    member_id: 14,
    brush_color: "chartreuse",
    motor_speed: 0.75,
    auto_off: false
  },
  {
    id: 7,
    member_id: 52,
    brush_color: "blue",
    motor_speed: 1.0,
    auto_off: true
  },
  {
    id: 8,
    member_id: 43,
    brush_color: "pink",
    motor_speed: 1.0,
    auto_off: false
  },
  {
    id: 9,
    member_id: 13,
    brush_color: "chartreuse",
    motor_speed: 1.0,
    auto_off: true
  }
];

describe("<MemberDetails /> functions", () => {
  describe("getting valid record from member search results", () => {
    let inst;
    beforeEach(() => {
      global.fetch = FetchMock;

      fetch
        .once(JSON.stringify(searchResults))
        .once(JSON.stringify(preferenceResults));

      const wrapper = renderer.create(<MemberDetails />);
      inst = wrapper.getInstance();
    });

    it("find member that is their own primary insured", () => {
      expect(inst.getValidRecord(searchResults).primary_insured_id).toEqual(
        null
      );
    });

    it("find member that is not terminated", () => {
      expect(inst.getValidRecord(searchResults).terminated_at).toEqual(null);
    });

    it("find the member that has the most recent effective date", () => {
      expect(inst.getValidRecord(searchResults).effective_date).toEqual(
        "2018-01-01"
      );
    });
  });
});
