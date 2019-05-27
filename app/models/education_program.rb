class EducationProgram < ApplicationRecord
  belongs_to :specialty

  validates :name, :description, :image, presence: true
end
