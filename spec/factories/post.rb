require_relative "../support/files_test_helper"

FactoryBot.define do
  factory :post do
    title{Faker::Name.name}
    body{Faker::Lorem.paragraph_by_chars(256, false)}
    publish{true}

    association :admin
    association :category

    image{FilesTestHelper.jpg}
  end
end