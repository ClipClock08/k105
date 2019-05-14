class ScienceWork < ApplicationRecord
  belongs_to :teacher

  validates :photo, :name, :description, presence: true
end
