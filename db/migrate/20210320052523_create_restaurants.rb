class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :logo, default: 'https://i.imgur.com/d5xgMbP.png'

      t.timestamps
    end
  end
end
