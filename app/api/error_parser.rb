module ErrorParser
  def parse message
    case message
    when Hash
      code = message[:error_code]
      msg = message[:message]
      details = message[:details]
    else
      code = V1::ERROR_CODES[:unexpected_exception]
      msg = message
      details = nil
    end
    [code, msg, details]
  end
end
