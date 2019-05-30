class EducationProgram < ApplicationRecord
  belongs_to :specialty

  mount_uploader :image, ImageUploader

  validates :name, :description, :image, presence: true
end
