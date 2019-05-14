class EducationProgram < ApplicationRecord
  belongs_to :specialty

  validates :name, :description, presence: true
end
