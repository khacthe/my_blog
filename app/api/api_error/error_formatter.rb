module APIError::ErrorFormatter
  extend ErrorParser

  def self.call message, _backtrace, _options, _env, _original_exception = nil
    code, msg, details = parse message
    {
      error_code: code,
      message: msg,
      details: details
    }.compact.to_json
  end
end
