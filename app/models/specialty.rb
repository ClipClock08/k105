class Specialty < ApplicationRecord
  has_many :education_programs

  mount_uploader :image, ImageUploader

  validates :name, :description, :image, presence: true
end
