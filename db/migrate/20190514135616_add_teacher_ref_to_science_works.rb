class AddTeacherRefToScienceWorks < ActiveRecord::Migration[5.2]
  def change
    add_reference :science_works, :teacher, foreign_key: true
  end
end
