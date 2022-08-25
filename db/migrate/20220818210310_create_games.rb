class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :score
      t.string :control
      t.string :description

      t.timestamps
    end
  end
end
