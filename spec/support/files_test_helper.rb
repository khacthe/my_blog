module FilesTestHelper
  extend self
  extend ActionDispatch::TestProcess

  def default_name
    "default.jpg"
  end

  def jpg
    upload default_name, "image/jpg"
  end

  private
  def upload name, type
    file_path = Rails.root.join "spec", "support", "assets", name
    fixture_file_upload file_path, type
  end
end
