class CreateScienceWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :science_works do |t|
      t.string :photo
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
