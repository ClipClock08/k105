class Teacher < ApplicationRecord
  has_many :subjects
  has_many :science_works

  validates :name, :lastname, :patronymic, :photo, :position, :rank, :degree, presence: true
end
