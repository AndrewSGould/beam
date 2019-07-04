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

describe("<MemberDetails /> functions", () => {
  describe("getting valid record from member search results", () => {
    let inst;
    beforeEach(() => {
      global.fetch = FetchMock;

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
