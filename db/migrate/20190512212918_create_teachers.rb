class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :name
      t.string :lastname
      t.string :patronymic
      t.string :photo
      t.string :position
      t.string :rank
      t.string :degree

      t.timestamps
    end
  end
end
