class AddImageToSpecialties < ActiveRecord::Migration[5.2]
  def change
    add_column :specialties, :image, :string
  end
end
