class V1::Entities::ApplicationEntity < Grape::Entity
  class << self
    def expose_attachments *attributes
      attributes.each do |attr|
        expose attr do |instance|
          if instance.public_send(attr).attached?
            Rails.application.routes.url_helpers.rails_blob_path instance.public_send(attr), only_path: true
          end
        rescue Errno::ENOENT
          nil
        end
      end
    end

    # rubocop:disable Naming/UncommunicativeMethodParamName
    def expose_thumbnail_for attribute, as = :thumbnail
      expose as do |instance|
        attachment = instance.public_send attribute
        if attachment.attached? && attachment.blob
          metadata = ActiveStorage::Analyzer::ImageAnalyzer.new(attachment.blob).metadata

          next nil unless metadata

          Rails.application.routes.url_helpers.rails_representation_url(
            attachment.variant(shave: "#{(metadata[:width] - metadata[:height]) / 2}x0").processed,
            only_path: true
          )
        end
      rescue Errno::ENOENT, MiniMagick::Error
        nil
      end
    end
    # rubocop:enable Naming/UncommunicativeMethodParamName
  end
end
