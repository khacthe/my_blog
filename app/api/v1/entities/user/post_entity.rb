class V1::Entities::User::PostEntity < V1::Entities::ApplicationEntity
  expose :id, documentation: {type: Integer}
  expose :title
  expose :body
  expose :publish
  expose :category_id
  expose :admin_id
  expose :created_at

  expose_attachments :image
  expose_thumbnail_for :image
end
