class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :slug
      t.integer :views
      t.text :body
      t.boolean :publish
      t.integer :category_id
      t.integer :admin_id

      t.timestamps
    end
  end
end
