class APIError::Base < Grape::Exceptions::Base
  def initialize *args
    case
    when args.empty?
      super message: I18n.t(self.class.name.underscore.gsub(%r{\/}, "."))
    when args[0].is_a?(Hash)
      super args[0]
    else
      super(*args)
    end
  end
end
