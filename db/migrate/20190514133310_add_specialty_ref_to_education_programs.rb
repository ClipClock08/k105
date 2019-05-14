class AddSpecialtyRefToEducationPrograms < ActiveRecord::Migration[5.2]
  def change
    add_reference :education_programs, :specialty, foreign_key: true
  end
end
