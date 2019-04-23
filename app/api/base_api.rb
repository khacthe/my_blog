module BaseAPI
  extend ActiveSupport::Concern

  included do
    prefix "api"
    format :json
    default_format :json
    helpers Helpers::HandleErrorHelper

    rescue_from APIError::Base, ActiveRecord::UnknownAttributeError, ActiveRecord::StatementInvalid,
      JSON::ParserError do |e|
      handle_error! e
    end

    rescue_from ActiveRecord::RecordInvalid do |e|
      handle_error! e, e.record.errors.messages
    end

    rescue_from Grape::Exceptions::ValidationErrors do |e|
      handle_error! e, grape_error_details(e)
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
      handle_error! e
    end
  end
end