module Helpers::HandleErrorHelper
  def handle_error! error, details = nil, headers = {}, backtrace = []
    key = error.class.name.demodulize.underscore.to_sym
    message = {
      error_code: error_code_from(key),
      message: I18n.t("api_error.#{key}"),
      details: details
    }
    error! message, response_header_code_from(key), headers, backtrace
  end

  def error_code_from key
    version_class::ERROR_CODES[key] || version_class::ERROR_CODES[:fallback]
  end

  def response_header_code_from key
    version_class::RESPONSE_HEADER_CODES[key] || version_class::RESPONSE_HEADER_CODES[:fallback]
  end

  def version_class
    grape = app
    grape = grape.instance_variable_get :@app until grape.is_a? Grape::Middleware::Versioner::Path

    @version_class ||= grape.options[:versions]&.first&.capitalize&.constantize
  end

  def grape_error_details error
    error.each_with_object({}) do |(attributes, e), details|
      attr = attributes.first
      (details[attr] ||= []) << grape_error_message(attr, e)
    end
  end

  private
  def grape_error_message attribute, error
    I18n.t(
      "grape.errors.format",
      default: "%{attributes} %{message}",
      attributes: translate_attribute(attribute),
      message: error.message
    )
  end

  def translate_attribute attribute
    I18n.t "grape.errors.attributes.#{attribute}"
  end
end
