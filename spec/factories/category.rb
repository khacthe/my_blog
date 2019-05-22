require_relative "../support/files_test_helper"

FactoryBot.define do
  factory :category do
    name{Faker::Name.name}
    description{Faker::Lorem.paragraph_by_chars(256, false)}

    image{FilesTestHelper.jpg}
  end
end
