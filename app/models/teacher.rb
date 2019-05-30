class Teacher < ApplicationRecord
  has_many :subjects
  has_many :science_works

  mount_uploader :photo, ImageUploader

  validates :name, :lastname, :patronymic, :photo, :position, :rank, :degree, presence: true
end
