require "rails_helper"

RSpec.describe Post, type: :model do
  describe "associations" do
    it{is_expected.to belogs_to :admin}
    it{is_expected.to belogs_to :category}
  end
end
