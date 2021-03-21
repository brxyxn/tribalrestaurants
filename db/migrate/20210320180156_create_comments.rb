class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :username, null: false
      t.text :body, null: false
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
