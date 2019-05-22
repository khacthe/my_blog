class V1 < Grape::API
  VERSION = name.downcase
  ERROR_CODES = {
    record_not_found: 404,
    record_invalid: 422,
    unauthenticated: 401,
    validation_errors: 422,
    fallback: 400

  }
  RESPONSE_HEADER_CODES = {
    record_not_found: 404,
    record_invalid: 422,
    unauthenticated: 401,
    validation_errors: 422,
    fallback: 400
  }

  # use ActionDispatch::Session::CookieStore
  use GrapeLogging::Middleware::RequestLogger,
    instrumentation_key: "grape_key",
    include: [GrapeLogging::Loggers::Response.new, GrapeLogging::Loggers::FilterParameters.new]

  version VERSION, using: :path
  error_formatter :json, APIError::ErrorFormatter

  mount Posts
end
