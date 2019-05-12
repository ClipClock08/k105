class CreateSubjects < ActiveRecord::Migration[5.2]
  def change
    create_table :subjects do |t|
      t.string :name
      t.string :description
      t.float :credits
      t.float :independent_work
      t.float :classroom_work
      t.string :program_files
      t.string :synopsis_files
      t.string :lab_files
      t.string :control_question_files

      t.timestamps
    end
  end
end
