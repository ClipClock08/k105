class AddImageToEducationPrograms < ActiveRecord::Migration[5.2]
  def change
    add_column :education_programs, :image, :string
  end
end
