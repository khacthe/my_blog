FactoryBot.define do
  factory :category do
    name{Faker::Name.name}
    email{Faker::Internet.email}
    password{"abcA123123"}
  end
end
