class Specialty < ApplicationRecord
  has_many :education_programs

  validates :name, :description, :image, presence: true
end
