class ScienceWork < ApplicationRecord
  belongs_to :teacher

  mount_uploader :photo, ImageUploader

  validates :photo, :name, :description, presence: true
end
