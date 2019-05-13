class EducationProgram < ApplicationRecord
  validates :name, :description, presence: true
end
