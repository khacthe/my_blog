source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.1"

gem "rails", "~> 5.2.2"
gem "mysql2", ">= 0.4.4", "< 0.6.0"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"
gem "webpacker"
gem "turbolinks", "~> 5"
gem "redis", "~> 4.0"
gem "bcrypt", "~> 3.1.7"
gem "mini_magick", "~> 4.8"
gem "bootsnap", ">= 1.1.0", require: false
gem "devise"
gem "grape"
gem "active_model_serializers"
gem "grape-active_model_serializers"
gem "grape-swagger"
gem "grape_logging"
gem "react_on_rails", "~> 11.1"
gem "paranoia", "~> 2.4"
gem "grape-entity"
gem "grape-swagger-entity"
gem "pagy"
gem "state_machine", "~> 1.2"
gem "state_machines-activerecord", "~> 0.5.2"
gem "figaro"

group :development, :test, :staging do
  gem "pry"
  gem "pry-rails"
  gem "pry-byebug"
  gem "pry-doc"
  gem "binding_of_caller"
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "faker"
  gem "factory_bot_rails"
  gem "guard"
  gem "guard-rspec"
  gem "rubocop", require: false
  gem "rails-env-credentials"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "shoulda-matchers", "~> 3.1.2"
  gem "rspec-rails", "~> 3.8"
  gem "database_cleaner"
  gem "timecop"
  gem "webmock", "~> 3.4"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]