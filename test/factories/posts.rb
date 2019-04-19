FactoryBot.define do
  factory :post do
    title { "MyString" }
    slug { "MyString" }
    views { "" }
    body { "MyText" }
    publish { false }
    category_id { 1 }
  end
end
